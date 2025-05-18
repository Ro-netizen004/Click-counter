let count=0;

const counterElement=document.getElementById("counter");
const saveElement=document.getElementById("save-El");
let str="";

function displayCount(){
    counterElement.innerText=count;
}

displayCount();

function increment(){
    count++;
    displayCount();
}



function decrement(){
    count--;
    displayCount();
}

function reset(){
    count=0;
    displayCount();
}

function save(){
    str+=count + " ";
    saveElement.innerText=str;
}
