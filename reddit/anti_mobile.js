// ==UserScript==
// @name         Reddit Anti Mobile
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Whenever a Google link takes you to a m. or an i. reddit post, redirect you to the normal website.
// @author       CrunchyHotDogs
// @match        https://m.reddit.com/*
// @match        https://i.reddit.com/*
// @grant        none
// @downloadUrl  https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/reddit/anti_mobile.js
// @updateUrl	 https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/reddit/anti_mobile.js
// ==/UserScript==

(function() {
    'use strict';
    function antiMobile() {
        var url = window.location.href;
        url = url.replace('m.', '').replace('i.', '').replace('.compact', '');
        window.location = url;
    }
    antiMobile();
})();


