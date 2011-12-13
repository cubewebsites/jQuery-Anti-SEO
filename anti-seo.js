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
	//clean all paragraphs and divs which don't contain paragraphs
	jQuery('p, div:not(:has(p))').each(function(){
		antiSeoCleanNode(jQuery(this));
	});	
}

function antiSeoCleanNode(nodetoclean) {	
	var mynodes	=	nodetoclean.children('p, div:not(:has(p))');	
	if(mynodes.length > 0) {		
		mynodes.each(function(){
			antiSeoCleanNode(jQuery(this));
		});		
	}
	antiSeoCleanup(nodetoclean);
}

function antiSeoCleanup(element) {
	wordcount = element.text().split(' ').length;
	//25 is what i might consider spammy, so crop from there	
	if(wordcount > 25) {			
		element.text('');
		return true;
	}
	return false;
}