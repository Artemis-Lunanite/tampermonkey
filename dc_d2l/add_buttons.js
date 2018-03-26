// ==UserScript==
// @name         DC Desire2Learn Add Email
// @namespace    http://tampermonkey.net/
// @version      1.30
// @description  Adds a button to DC D2L that takes the user to their DC mail.
// @author       CrunchyHotDogs
// @match        https://durhamcollege.desire2learn.com/*
// @grant        none
// @downloadUrl  https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/dc_d2l/add_buttons.js
// @updateUrl	 https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/dc_d2l/add_buttons.js
// ==/UserScript==

(function() {
	var email = 'https://outlook.office.com/owa/?realm=dcmail.ca&vd=www';
    	var library = 'http://guides.library.durhamcollege.ca/?b=s';
	var html = '<div style="display: inline-block; vertical-align: middle; padding-right: 20px;"><a href="' + library + '" target="_blank" style="color: #CEE6DF; font-size: 1.05em; font-weight: bold; padding-right: 10px;">Go To Library</a><a href="' + email + '" target="_blank" style="color: #CEE6DF; font-size: 1.05em; font-weight: bold;">Go To Email</a></div>';


    
    function addButton() {
        var mainDiv = $('.d2l-minibar-right');
        mainDiv.prepend(html);
    }
    addButton();
})();
