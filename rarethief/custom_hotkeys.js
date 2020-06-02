// ==UserScript==
// @name         SoT Map Hotkeys
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Add hotkeys for common commands.
// @author       Artemis Lunanite
// @match        https://maps.seaofthieves.rarethief.com/*
// @grant        GM_addStyle
// @require      http://code.jquery.com/jquery-latest.js
// @require      https://craig.global.ssl.fastly.net/js/mousetrap/mousetrap.min.js
// @downloadUrl  https://raw.githubusercontent.com/Artemis-Lunanite/tampermonkey/master/rarethief/custom_hotkeys.js
// @updateUrl	 https://raw.githubusercontent.com/Artemis-Lunanite/tampermonkey/master/rarethief/custom_hotkeys.js
// ==/UserScript==

GM_addStyle('#custom_hotkeys_button { padding-left: 5px; padding-right: 5px; border-radius: 5px; font-weight: bold; position: fixed; left: 12px; top: 380px; font-size: 27px; background-color: #e2dfd9; color: #323335; } #custom_hotkeys_button:hover { cursor: pointer; } .custom_hotkeys_hide { display: none !important; } #custom_hotkeys_description { font-weight: bold; color: #323335; position: fixed; display: inline-block; padding-left: 15px; width: 250px; height: 325px; background-color: white; top: 465px; left: 13px; border-radius: 25px; background-color: #e2dfd9; }');


(function() {
    'use strict';

    $('#opener_arrow').click();

    $('body').append('<p id="custom_hotkeys_button" href="#" title="Hotkeys">H</a>');
    $('body').append('<div id="custom_hotkeys_description" class="custom_hotkeys_hide"><p>Ctrl + Alt + F = Search</p><p>Ctrl + Alt + C = Chickens</p><p>Ctrl + Alt + P = Pigs</p>Ctrl + Alt + S = Snakes<p></p><p>Ctrl + Alt + A = All Animales</p><p>Alt + V = Volcanoes</p><p>Alt + S = Shipwrecks</p></div>');


    $('#custom_hotkeys_button').click(function () {
        if ($('#custom_hotkeys_description').css('display') === 'none') {
            $('#custom_hotkeys_description').removeClass('custom_hotkeys_hide');
        }
        else {
            $('#custom_hotkeys_description').addClass('custom_hotkeys_hide');
        }
    });


    //Allows use of hotkeys in textboxes.
    Mousetrap.prototype.stopCallback = function () {
        return false;
    }


    //Search section.
    Mousetrap.bind('ctrl+alt+f', async function(e) {
		$('#search_header').click();
        $('#marker_search_input').focus();
        $('#marker_search_input').val('');
        return false;
	});

    //Animal section.
    Mousetrap.bind('ctrl+alt+c', async function(e) {
        $('#chicken_checkbox').click();
        return false;
    });
    Mousetrap.bind('ctrl+alt+s', async function(e) {
        $('#snake_checkbox').click();
        return false;
    });
    Mousetrap.bind('ctrl+alt+p', async function(e) {
        $('#pig_checkbox').click();
        return false;
    });
    Mousetrap.bind('ctrl+alt+a', async function(e) {
        $('#chicken_checkbox').click();
        $('#pig_checkbox').click();
        $('#snake_checkbox').click();
        return false;
    });
    Mousetrap.bind('alt+v', async function(e) {
        $('#volcano_checkbox').click();
        return false;
    });
    Mousetrap.bind('alt+s', async function(e) {
        $('#shipwreck_checkbox').click();
        return false;
    });
})();