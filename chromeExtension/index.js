

let myLeadArray = []
const inputEl = document.getElementById("input-el")
const inputButton = document.getElementById("input-btn")

inputButton.addEventListener("click",function() {
    myLeadArray.push(inputEl.value)
    console.log(myLeadArray)
})

for(let i=0;i<myLeadArray.length;i++) {
    console.log(myLeadArray[i])
}
