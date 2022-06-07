// custom.js for Logseq
// Slide Cursor by wineroses.

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
