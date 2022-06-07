
let isAlive = false;
let hasBlackJack = false;
let firstCard;
let secondCard;
let cards = [firstCard , secondCard]
let sum = firstCard + secondCard;
let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el");

function getRandomCard(){
    return Math.floor(Math.random()*11)+1;
}

function startGame(){
    isAlive = true;
    hasBlackJack = false;
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard;
    rendorGame();
}

function rendorGame(){
    if(sum<21){
        message = "Do you want to draw a new Card?";
    } else if(sum === 21){
        message = "Wohoo! you've got a Blackjack";
        hasBlackJack = true;
    } else{
        message = "You're out of the Game";
        isAlive = false;
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    let updatesText = ""
    for(let idx=0;idx<cards.length;idx++){
        updatesText += cards[idx] + " ";
    }
    cardEl.textContent = "Cards: " + updatesText;
}


function newCard(){
    if(sum>=21){
        return;
    }
    let cardValue = getRandomCard();
    sum += cardValue;
    cards.push(cardValue);
    rendorGame();
}