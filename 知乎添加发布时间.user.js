// ==UserScript==
// @name         知乎添加发布时间
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.zhihu.com/question/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelectorAll(".QuestionHeader-title")[1].textContent+=" "+document.querySelectorAll("meta[itemprop=dateCreated]")[0].getAttribute("content").slice(0,10)
    // Your code here...
})();
