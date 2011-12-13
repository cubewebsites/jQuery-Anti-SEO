/*
* Method to dynamically load jQuery if it's not already on the page
* Code from http://weblogs.asp.net/joelvarty/archive/2009/05/07/load-jquery-dynamically.aspx
*/
var jQueryScriptOutputted = false;
function initJQuery() {    
    //if the jQuery object isn't available
    if (typeof(jQuery) == 'undefined') {    
    
        if (! jQueryScriptOutputted) {
            //only output the script once..
            jQueryScriptOutputted = true;
            
            //output the script (load it from google api)
            document.write("<scr" + "ipt type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js\"></scr" + "ipt>");
        }
        setTimeout("initJQuery()", 50);
    } else {
		//jquery now loaded, start the anti-SEO process
        $(function() {  
			//set jQuery in no conflict mode
			$.noConflict();
            initAntiSeo();
        });
    }            
}
initJQuery();

function initAntiSeo() {
	
}