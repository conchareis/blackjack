let player = {
    name: "Concha Reis",
    chips: 145,
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let cardName = document.getElementById("card-name")
let balanceEl = document.getElementById("balance-el")

// playerEl.textContent = player.name + ": €" + player.chips
cardName.textContent = player.name

const text = document.createTextNode(player.chips);
balanceEl.appendChild(text)

var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = 'css/img/nr1.png';

imgArray[1] = new Image();
imgArray[1].src = 'css/img/nr2.png';

imgArray[2] = new Image();
imgArray[2].src = 'css/img/nr3.png';

imgArray[3] = new Image();
imgArray[3].src = 'css/img/nr4.png';

imgArray[4] = new Image();
imgArray[4].src = 'css/img/nr5.png';

imgArray[5] = new Image();
imgArray[5].src = 'css/img/nr6.png';

imgArray[6] = new Image();
imgArray[6].src = 'css/img/nr7.png';

imgArray[7] = new Image();
imgArray[7].src = 'css/img/nr8.png';

imgArray[8] = new Image();
imgArray[8].src = 'css/img/nr9.png';

imgArray[9] = new Image();
imgArray[9].src = 'css/img/nr10.png';

imgArray[10] = new Image();
imgArray[10].src = 'css/img/nr11.png';

imgArray[11] = new Image();
imgArray[11].src = 'css/img/nr12.png';

imgArray[12] = new Image();
imgArray[12].src = 'css/img/nr13.png'


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


function startGame() {
    isAlive = true
    cards = [];
    cardsEl.innerHTML = '';
    let firstCard = getRandomCard()
    var realCard = imgArray[firstCard - 1];
    let secondCard = getRandomCard()
    var realCard2 = imgArray[secondCard - 1];
    cards = [realCard, realCard2]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    // cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.appendChild(cards[i])
    }

    // sumEl.textContent = "Sum: " + sums
    sumEl.textContent = sum
    if (sum <= 20) {
        message = ("Do you want to draw a new card?")
    } else if (sum === 21) {
        message = ("You have got BlackJack!")
        hasBlackJack = true
    } else {
        message = ("You are out of the game.")
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        var realCard = imgArray[card - 1];
        cards.push(realCard)
        renderGame()
    }
}


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

! function(a) {
    a(function() {
        a(".button-sent #back").hide(), a(".button-sent #continue").click(function(b) {
            a("#area .master-card").css("transform", "rotateY(180deg)"), a(".button-sent #back").show()
        }), a(".button-sent #back").click(function(b) {
            a("#area .master-card").css("transform", "rotateY(0deg)"), a(this).hide()
        })
    })
}(jQuery);