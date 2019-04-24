// ==UserScript==
// @name         Deezer Add To Playlist
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  FAILED EXPERIMENT Adds simple one-click buttons to playlist. Reduces clicks by 2 per album, only works on my profile.
// @author       Artemis-Lunarly
// @match        https://www.deezer.com/en/album/*
// @grant        GM_addStyle
// @downloadUrl  https://raw.githubusercontent.com/artemis-lunarly/tampermonkey/master/deezer/add_to_playlist.js
// @updateUrl	 https://raw.githubusercontent.com/artemis-lunarly/tampermonkey/master/deezer/add_to_playlist.js
// ==/UserScript==


GM_addStyle('.kc_playlist_container { position: fixed; top: 0; left: 650px; color: black; font-size: 1.5em; font-weight: bold; width: 50px; height: 56px; line-height: 56px; text-align: center; z-index: 999; display: inline-block; } .kc_playlist_button { display: inline; padding: 5px; margin-left: 5px; border: 2px solid gray; border-radius: 10px; } .kc_playlist_button:hover { cursor: pointer; }');


(function() {
    'use strict';
    function createTSMButton(callback) {
        var html = '<div id="kc_playlist" class="kc_playlist_container">';
		html += '<div id="kc_playlist_artist" class="kc_playlist_button">Artist</div>';
		html += '<div id="id="kc_playlist_soundtrack" class="kc_playlist_button">Soundtrack</div>';
		html += '<div id="id="kc_playlist_broadway" class="kc_playlist_button">Broadway</div>';
		html += '</div>';
		var playlist = $('body');
		playlist.prepend(html);
        callback();
    }

    function addClick() {
        $('#kc_listTracks').click(function() {
            alertList();
        });
    }

    function alertList() {
        var ep = $('a[itemprop="url"]');
		var outputText = '';
        ep.each(function(i, div) {
            var url = $(this).attr('href');
            outputText += 'https://www.deezer.com/en/' + url + ';';
        });
		outputText.slice(0,-1);
        prompt("Seperated List of Songs:", outputText);
    }
	

		createTSMButton(addClick);
	
})();
