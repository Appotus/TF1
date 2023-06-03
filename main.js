const vorhangG=document.querySelector(".vorhangG-bild");
const vorhangL=document.querySelector(".vorhangL-bild");
const vorhangR=document.querySelector(".vorhangR-bild");
const vorhangO=document.querySelector(".vorhangO-bild");

let vorhangoben=false;
function vorhanghoch(){
    if (!vorhangoben){
        vorhangG.classList.add("oben");
        vorhangL.classList.add("jiggleL");
        vorhangR.classList.add("jiggleR");
        vorhangO.classList.add("jiggleO");
        vorhangoben=true;
    }
}






vorhangG.addEventListener("click",vorhanghoch);
