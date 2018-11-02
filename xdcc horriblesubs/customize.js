// ==UserScript==
// @name         HorribleSubs Customize
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Changes the background on xdcc.horriblesubs.info.
// @author       CrunchyHotDogs
// @match        *xdcc.horriblesubs.info/
// @grant        GM_addStyle
// @require      http://code.jquery.com/jquery-latest.js
// @downloadUrl  https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/xdcc%20horriblesubs/customize.js
// @updateUrl	 https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/xdcc%20horriblesubs/customize.js
// ==/UserScript==

GM_addStyle('.header h1 {display: inline !important; } .kc_container{ margin-left: 150px; display: inline; verticle-align: middle; } .kc_button{ margin-left: 15px; display: inline; height: 50%; border-radius: 50px; background-color: black; color: white; font-size: 1.25em; }');

(function() {
    'use strict';
	var searchStrings = ['Sword Art Online - Alicization 720', 'Goblin Slayer 720', 'Zombieland Saga 720'];
	var buttonText = ['SOA', 'Goblin Slayer', 'Zombieland Saga'];
	
	

    function addAnimeButtons(callback) {
		var header = $('#header');
	    var buttonHtml = '';
		
	    for (var i = 0; i < searchStrings.length; i++) {
			buttonHtml += '<button id="' + i + '" class="kc_button">' + buttonText[i] + '</button>';
	    }
        header.append('<div class="kc_container">' + buttonHtml + '</div>');
        callback();
    }

    function addOnClickListener() {
        $('.kc_button').click(function() {
            var search = searchStrings[parseInt($(this).attr('id'))];
			document.getElementById('search').value = search;
            $('input[type="submit"]').click();
        });
    }

	javascript:p.setSkin(3);
    addAnimeButtons(addOnClickListener);
})();
