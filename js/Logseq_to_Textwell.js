// Add a button to transfer from Logseq to Textwell
// by wineroses.(2022/06/26)

e = document.createElement("div");
e.id = "ShareOut";
e.innerHTML = "";
e.style = "font-size:20px;margin-right:10px;"
head.lastChild.prepend(e);

ShareOut.onclick = function(){
  p = document.querySelectorAll(".ls-block");
  s = "";
  for(i=0; i<p.length; i++){
    if(p[i].getAttribute("level")=="1") s+= "\n";
    s+= p[i].querySelector(".block-content").innerText;
  }
  s = s.replace(/^\n+/, "");
  s = "textwell://replace?text=" + encodeURIComponent(s);
  window.open(s);
}
