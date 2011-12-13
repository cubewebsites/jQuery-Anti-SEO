/*
* Method to dynamically load jQuery if it's not already on the page
* Code from http://weblogs.asp.net/joelvarty/archive/2009/05/07/load-jquery-dynamically.aspx
* Combined with http://net.tutsplus.com/tutorials/javascript-ajax/create-bookmarklets-the-right-way/
*/
function initJQuery() {    
    //if the jQuery object isn't available
    if (typeof(jQuery) == 'undefined') {    
		script = document.createElement( 'script' );  
		script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js';  
		script.onload=initAntiSeo;  
		document.body.appendChild(script);   
    } else {
		initAntiSeo();        
    }
}
initJQuery();

function initAntiSeo() {
	jQuery.noConflict();	
}