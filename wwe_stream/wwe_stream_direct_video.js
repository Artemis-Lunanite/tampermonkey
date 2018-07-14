// ==UserScript==
// @name         WWE Stream Direct Video
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Opens up the direct video stream from watching WWE streams.
// @author       CrunchyHotDogs
// @match        http://educationteams.com/*
// @grant        none
// @downloadUrl  https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/wwe_stream/wwe_stream_direct_video.js
// @updateUrl	 https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/wwe_stream/wwe_stream_direct_video.js
// ==/UserScript==

(function() {
    'use strict';
    function findVideo() {
        var vidURL = document.getElementsByTagName("iframe")[0].src;
        window.location.replace(vidURL);
    }
    findVideo();
})();