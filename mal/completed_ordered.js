// ==UserScript==
// @name         MAL Add Completed Order Button
// @namespace    http://tampermonkey.net/
// @version      1.15
// @description  CURRENTLY ONLY WORKS WITH MY PROFILE. Creates a button that will show the completed list, but sorted by finished date descending.
// @author       CrunchyHotDogs
// @match        *https://myanimelist.net/animelist/*
// @grant        none
// @downloadUrl  https://raw.githubusercontent.com/Artemis-Lunarly/tampermonkey/master/mal/completed_ordered.js
// @updateUrl	 https://raw.githubusercontent.com/Artemis-Lunarly/tampermonkey/master/mal/completed_ordered.js
// ==/UserScript==

(function() {
    'use strict';
    function createButton() {
		var inserted = false;
        var statusMenu = $('#status-menu').children();
		statusMenu = statusMenu.children();
		statusMenu.each(function(i, ele) {
			if ($(this).is('div') && inserted === false) {
				$('<a href="https://myanimelist.net/animelist/Artemis-Lunarly?order=2&status=2" class="status-button">Completed Ordered</a>').insertBefore(ele);
				inserted = true;
			}
        });
    }

    createButton();
})();
