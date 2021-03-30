// ==UserScript==
// @name         Scroll to bottom
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://github.com/*/notes/issues/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.scrollTo(0,document.body.scrollHeight);
    console.log("Scroll to bottom TEST");
    // Your code here...
})();
