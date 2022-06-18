

let myLeadArray = []
const inputEl = document.getElementById("input-el")
const inputButton = document.getElementById("input-btn")
const ul = document.getElementById("unorderlist")

inputButton.addEventListener("click",function() {
    myLeadArray.push(inputEl.value)
    console.log(myLeadArray)
    addLeadToUl()
})

function addLeadToUl(){
    ul.innerHTML += "<li>" +  myLeadArray[myLeadArray.length-1] + "</li>";
}

// for(let i=0;i<myLeadArray.length;i++) {
//    ul.innerHTML += "<li>" +  "kajshdbjhabsjhdb" + "</li>";
// }
