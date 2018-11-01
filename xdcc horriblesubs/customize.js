// ==UserScript==
// @name         HorribleSubs Change Background
// @namespace    http://tampermonkey.net/
// @version      1.3
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
    var animeOne = '<button id="animeOne" class="kc_button">SOA</button>';
    var animeTwo = '<button id="animeTwo" class="kc_button">Goblin Knight</button>';

    function addAnimeButtons(callback) {
        var header = $('#header');
        header.append('<div class="kc_container">' + animeOne + animeTwo + '</div>');
        callback();
    }

    function addOnClickListener() {
        $('#animeOne').click(function() {
            document.getElementById('search').value = 'Sword Art Online - Alicization 720';
            $('input[type="submit"]').click();
        });
        $('#animeTwo').click(function() {
            document.getElementById('search').value = 'Goblin Slayer 720';
            $('input[type="submit"]').click();
        });
    }

	javascript:p.setSkin(3);
    addAnimeButtons(addOnClickListener);
})();
