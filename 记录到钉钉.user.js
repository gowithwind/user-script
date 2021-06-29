// ==UserScript==
// @name         记录到钉钉
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @grant         GM.xmlHttpRequest
// @connect      oapi.dingtalk.com
// @grant      GM_registerMenuCommand
// ==/UserScript==
GM_registerMenuCommand('Run this now', function() {
    record();
}, 'r');

function record(){
    var data = {
        "msgtype": "text",
        "text": {
            "content": "主人:\n"+location.href
        }
    }
    console.log(data);
    GM.xmlHttpRequest({
        method: "POST",
        url: "https://oapi.dingtalk.com/robot/send?access_token=",
        data: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
        onload: function(response) {
            console.log(response.responseText);
        }
    });
}
(function() {
    'use strict';

    // Your code here...
})();
