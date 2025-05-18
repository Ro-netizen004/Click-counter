let count=0;

const counterElement=document.getElementById("counter");

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

