// ==UserScript==
// @name         Keep2Share Switch to Video
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Opens up the direct video stream from watching Keep2Share.
// @author       CrunchyHotDogs
// @match        https://k2s.cc/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @downloadUrl  https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/k2s/k2s_direct_video.js
// @updateUrl	 https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/k2s/k2s_direct_video.js
// ==/UserScript==

(function() {
    'use strict';
    function findVideo() {
        var vidURL = document.getElementsByTagName("video")[0].src;
        window.location.replace(vidURL);
    }
     $(window).keydown(function(event) {
         if(event.which == 49) {
              findVideo();
              event.preventDefault();
          }
       });
})();

