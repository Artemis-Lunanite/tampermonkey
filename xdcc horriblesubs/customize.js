// ==UserScript==
// @name         HorribleSubs Customize
// @namespace    http://tampermonkey.net/
// @version      1.56119
// @description  Changes the background on xdcc.horriblesubs.info.
// @author       Artemis Lunanite
// @match        *xdcc.horriblesubs.info/
// @grant        GM_addStyle
// @require      http://code.jquery.com/jquery-latest.js
// @downloadUrl  https://raw.githubusercontent.com/Artemis-Lunanite/tampermonkey/master/xdcc%20horriblesubs/customize.js
// @updateUrl	 https://raw.githubusercontent.com/Artemis-Lunanite/tampermonkey/master/xdcc%20horriblesubs/customize.js
// ==/UserScript==

GM_addStyle('.header h1 {display: inline !important; } .kc_container{ margin-left: 150px; display: inline; verticle-align: middle; } .kc_button{ margin-left: 15px; display: inline; height: 50%; border-radius: 50px; background-color: black; color: white; font-size: 1.25em; }');

(function() {
    'use strict';
	var searchOptions = [
        ['Dr. Stone', 'Dr. Stone 720'],
	['Fire Force', 'Enen no Shouboutai 720'],
	['BEM', 'BEM 720'],
	['Vinland', 'Vinland Saga 720'],
	['SAO', 'Sword Art Online War of Underworld 720'],
	['Food Wars', 'Shokugeki no Souma: Shin no Sara 720'],
	['Fairy Gone', 'Fairy Gone 720']];


    function addAnimeButtons(callback) {
		var header = $('#header');
	    var buttonHtml = '';

	    for (var i = 0; i < searchOptions.length; i++) {
            if (searchOptions[i][2]) {
                buttonHtml += '<button id="' + i + '" class="kc_button"><a href=' + searchOptions[i][1] + ' target="_blank">' + searchOptions[i][0] + '</a></button>';
            }
            else {
                buttonHtml += '<button id="' + i + '" class="kc_button horrible_subs">' + searchOptions[i][0] + '</button>';
            }
	    }
        header.append('<div class="kc_container">' + buttonHtml + '</div>');
        callback();
    }

    function addOnClickListener() {
        $('.horrible_subs').click(function() {
            var search = searchOptions[parseInt($(this).attr('id'))][1];
			document.getElementById('search').value = search;
            $('input[type="submit"]').click();
        });
    }

	javascript:p.setSkin(3);
    addAnimeButtons(addOnClickListener);
})();
