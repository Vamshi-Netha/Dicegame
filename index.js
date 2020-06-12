let ran = Math.floor(Math.random()*6)+1;
vamshi = "images/dice"+ran+".png";
console.log(vamshi);
let rak = (document.querySelectorAll("img")[0]);
rak.setAttribute("src",vamshi);

let ran2 = Math.floor(Math.random()*6)+1;
vamshi2 = "images/dice"+ran2+".png";
let niha = (document.querySelectorAll("img")[1]);
niha.setAttribute("src",vamshi2);

if (ran>ran2)
document.querySelector("h1").innerHTML= " 🚩 Player 1 Wins"

else
document.querySelector("h1").innerHTML= "Player 2 Wins  🚩"

