// ==UserScript==
// @name         Reddit Anti Mobile
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       CrunchyHotDogs
// @match        https://m.reddit.com/*
// @match        https://i.reddit.com/*
// @grant        none
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


