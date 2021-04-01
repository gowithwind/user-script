// ==UserScript==
// @name         音乐桌面显示
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://y.qq.com/*
// @match        *://music.163.com/*
// @grant         GM.xmlHttpRequest
// @connect jiang
// ==/UserScript==
var old=null;
function send(){
    let host = location.host
    let p=null;
    if(host=='y.qq.com'){
        let c = document.getElementsByClassName("on")
        if(c.length>0) p=c[0].textContent
    }
    if(host=='music.163.com'){
        let c = document.getElementsByClassName("j-flag z-sel")
        if(c.length>0) p=c[0].textContent
    }
    if(p!=old){old=p}else{return}
    console.log(p)
    let data = {
        "command": "send", "data": p
    }
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
    setInterval(send,500)
})();
