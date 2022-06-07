let count = 0;
let countEl = document.getElementById("count-el");
let entryTag = document.getElementById("entrytag");
console.log(entryTag);
function increment(){
    count += 1;
    countEl.textContent = count;
    console.log(count);
}

function save(){
    entryTag.textContent += count + " - ";
    count = 0;
    countEl.textContent = count;
    console.log(count);
}

