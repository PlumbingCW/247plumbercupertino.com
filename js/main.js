(function(){
var d=document,h=d.documentElement;
h.classList.add("js");
var btn=d.querySelector(".hamburger"),ov=d.querySelector(".mob-overlay"),cl=d.querySelector(".mob-close");
function openM(){h.classList.add("mob-open");h.style.overflow="hidden";if(btn){btn.setAttribute("aria-expanded","true")}}
function closeM(){h.classList.remove("mob-open");h.style.overflow="";if(btn){btn.setAttribute("aria-expanded","false")}}
if(btn){btn.addEventListener("click",openM)}
if(ov){ov.addEventListener("click",closeM)}
if(cl){cl.addEventListener("click",closeM)}
d.addEventListener("keydown",function(e){if(e.key==="Escape"){closeM()}});
var w=window.matchMedia("(min-width:769px)");
function chk(){if(w.matches){closeM()}}
if(w.addEventListener){w.addEventListener("change",chk)}
d.querySelectorAll(".faq-q").forEach(function(q){
q.addEventListener("click",function(){
var it=q.parentNode,o=it.classList.toggle("open");
q.setAttribute("aria-expanded",o?"true":"false");
});
});
})();
