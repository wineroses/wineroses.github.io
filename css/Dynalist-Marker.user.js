// ==UserScript==
// @name         Dynalist Marker
// @version      1
// @description  DynalistのMarkdown強調を色つきに。
// @author       wineroses
// @namespace    https://wineroses.hatenablog.com/
// @match        https://dynalist.io/d/*
// ==/UserScript==

e = document.createElement("style");
e.innerHTML = ".node-bold{background: linear-gradient(transparent 60%, pink 60%);} .node-italics{background: linear-gradient(transparent 60%, skyblue 60%);} .node-bold>.node-italics{background: linear-gradient(transparent 60%, orange 60%);} .node-italics>.node-bold{background: linear-gradient(transparent 60%, lime 60%);} .CurrentLineHighlight{background:rgba(150, 150, 150, .1);}";
document.head.appendChild(e);
