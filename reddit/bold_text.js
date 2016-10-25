// ==UserScript==
// @name         Reddit Bold Post Text
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Bolds the text of a reddit post..
// @author       CrunchyHotDogs
// @match        https://www.reddit.com/r/*/comments/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// @downloadUrl  https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/reddit/bold_text.js
// @updateUrl	 https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/reddit/bold_text.js
// ==/UserScript==

(function() {
    'use strict';
    function boldText() {
     $('.md').each(function(i, p) {
         p.style.fontWeight = 'bold';
     });
    }
    boldText();
})();
