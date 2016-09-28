// ==UserScript==
// @name         Reddit Hide Comments
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hides posts with 0 comments.
// @author       CrunchyHotDogs
// @match        https://www.reddit.com/r/*
// @exclude      https://www.reddit.com/r/*/comments/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';
    function hideComments() {
        $('.thing').each(function(i, div) {
            var comments = $(this).find('.comments');
            var thing = $(this);
            if(comments.text() === 'comment') {
                thing.hide();
            }
        });
    }
    hideComments();
})();