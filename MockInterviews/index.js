
let val = document.getElementById("value");
let count = 0

function increment(){
    alert("Increment is clicked");
    count++;
    if(count>5){
        count = 5;
    }
    val.textContent = count;
}

function decrement(){
    alert("Decrement is clicked");
    count--;
    if(count<0){
        count = 0;
    }
    val.textContent = count;
}

function toggle(){
    val.classList.toggle("toggle")
}