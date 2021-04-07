// ==UserScript==
// @name         显示处理中任务
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://github.com/gowithwind/notes/projects/1
// @grant        GM.xmlHttpRequest
// @connect      127.0.0.1
// ==/UserScript==
var old=null;
function send(){
    let host = location.host
    let p=null;
    p = document.getElementsByClassName("project-column")[2].getElementsByTagName('task-lists')[0].textContent.replaceAll('\n','')
    let data = {
        "command": "send", "data": p
    }
    console.log(p)
    GM.xmlHttpRequest({
        method: "POST",
        url: "http://127.0.0.1:1987/rpc",
        data: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
        onload: function(response) {
            if (response.responseText.indexOf("Logged in as") > -1) {
                //location.href = "http://www.example.net/dashboard";
            }
        }
    });
}
(function() {
    'use strict';
    setInterval(send,5000)
})();
