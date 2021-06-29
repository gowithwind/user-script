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
// @grant       GM_notification
// ==/UserScript==
GM_registerMenuCommand('记录', function() {
    record();
}, 'r');

function record(){
    var data = {
        "msgtype": "text",
        "text": {
            "content": "主人:\n"+document.title+'\n'+location.href
        }
    }
    console.log(data);
    GM.xmlHttpRequest({
        method: "POST",
        url: "https://oapi.dingtalk.com/robot/send?access_token=你的token",
        data: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
        onload: function(response) {
            console.log(response.responseText);
            GM_notification ( {title: '已记录', text: document.title+'\n'+response.responseText} );
        }
    });
}
(function() {
    'use strict';

    // Your code here...
})();
