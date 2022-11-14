function setup() {
    canvas=createCanvas(340, 340);
    canvas.position(535, 200);
    background("white");
 }
 function clearCanvas() {
     background("white");
     console.log("Canvas Cleared!");
 }

 let counterDisplayElem = document.querySelector('.counter-display');

let counterPlusElem = document.querySelector('.counter-plus');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};