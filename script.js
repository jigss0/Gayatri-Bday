const colors = ["#ff7199","#ffd35b","#9be7c4","#bda7ff","#fff0df"];

function makeConfetti(count=75){
  const box=document.querySelector(".confetti");
  box.innerHTML="";
  for(let i=0;i<count;i++){
    const s=document.createElement("span");
    s.style.left=Math.random()*100+"%";
    s.style.background=colors[Math.floor(Math.random()*colors.length)];
    s.style.transform=`rotate(${Math.random()*360}deg)`;
    s.style.setProperty("--x",(Math.random()*240-120)+"px");
    s.style.animationDuration=(2.5+Math.random()*3)+"s";
    s.style.animationDelay=(Math.random()*.7)+"s";
    box.appendChild(s);
  }
}
function openWish(){
  makeConfetti(100);
  document.querySelector("#wish").scrollIntoView({behavior:"smooth"});
}
window.addEventListener("load",()=>setTimeout(()=>makeConfetti(45),500));
