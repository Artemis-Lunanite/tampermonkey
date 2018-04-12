// ==UserScript==
// @name         DC Desire2Learn Add Email
// @namespace    http://tampermonkey.net/
// @version      1.3.1
// @description  Adds a button to DC D2L that takes the user to their DC mail.
// @author       CrunchyHotDogs
// @match        https://durhamcollege.desire2learn.com/*
// @grant        none
// @downloadUrl  https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/dc_d2l/add_buttons.js
// @updateUrl	 https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/dc_d2l/add_buttons.js
// ==/UserScript==

(function() {
	//Links
	var email = 'https://outlook.office.com/owa/?realm=dcmail.ca&vd=www';
    	var library = 'http://guides.library.durhamcollege.ca/?b=s';
	var loc = 'http://authorities.loc.gov';
	
	//CSS
	var css_link = 'color: #CEE6DF; font-size: 1.05em; font-weight: bold; padding-right: 10px;';
	
	//HTML
	var html = 	'<div style="display: inline-block; vertical-align: middle; padding-right: 20px;">' +
				'<a href="' + library + '" target="_blank" style="' + css_link + '">' +
	    				'Library' +
	    			'</a>' +
				'<a href="' + loc + '" target="_blank" style="' + css_link + '">' +
	    				'LOC Authorities' +
				'</a>' +
	    			'<a href="' + email + '" target="_blank" style="' + css_link + '">' +
	    				'Email' +
				'</a>' +
	    		'</div>';


    
    function addButton() {
        var mainDiv = $('.d2l-minibar-right');
        mainDiv.prepend(html);
    }
    addButton();
})();
