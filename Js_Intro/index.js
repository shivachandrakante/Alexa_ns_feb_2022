
let val = document.getElementById("value");
let count = 0

function clickme(){
    let a = {name:"abc",age:20}
    console.log("-------------------")
    console.log(a)
    const b = {name:"abc",age:20}
    console.log("-------------------")
    console.log(b)
    b.name = "bdd"
    console.log("-------------------")
    console.log(b)
    console.log("-------------------")
    for(let i in b){
        console.log(b[i])
    }

}