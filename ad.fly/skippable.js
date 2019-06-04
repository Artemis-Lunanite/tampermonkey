// ==UserScript==
// @name         ad.fly Skippable
// @namespace    http://tampermonkey.net/
// @version      1.00
// @description  Takes the destination from the URL and just goes to it.
// @author       Artemis Lunarly
// @match        https://www1.ecleneue.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    function goToDestination() {
        window.location.replace(getParameterByName('dest'));
    }
    goToDestination();
})();