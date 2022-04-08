// ==UserScript==
// @name         Dynalist Articlemode
// @version      1
// @description  Dynalistのアーティクルビューを便利にします
// @author       wineroses
// @namespace    https://wineroses.hatenablog.com/
// @match        https://dynalist.io/d/*
// ==/UserScript==

e = document.createElement("style");
e.innerHTML = ".Node-self{padding-top:0px !important; padding-bottom:3px !important;}.node-toolbar{background:burlywood !important;opacity:0; border-radius:0 !important}.node-toolbar:hover{opacity:1;}.DocumentTools-icon:not(:hover){opacity:0;}";
document.head.appendChild(e);

p=0;

document.ontouchstart = function(e){
  p = e.touches[0].pageX;
}

document.ontouchmove = function(e){
  x = e.touches[0].pageX;
  if(x-p>4 || p-x>4){
    e.preventDefault();
    d = document.getSelection();
    m = (e.touches.length==2 || d.toString().length)? "extend":"move";
    d.modify(m, (p>x)? "left":"right", "character");
    p = x;
  }
}
