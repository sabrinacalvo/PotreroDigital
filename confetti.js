import confetti from "http://cdn.skypack.dev/canvas-confetti";

const btn = document.getElementById("btn")
function makeConfetti(){
    confetti()
}

btn.addEventListener("click", makeConfetti)