var cardCollection = document.getElementsByClassName("cards")
console.log(cardCollection);

// Create onClick Function
for (item of cardCollection) {
    item.addEventListener("click", function () {
        for (item of cardCollection) {
            item.classList.remove("cardSelected")
        }
        this.classList.remove("cards")
        cardPositionerCall()
        this.classList.add("cards")
        this.classList.add("cardSelected")
        this.style.left = ("20vw")

    })
}

let cardCount = document.getElementsByClassName("cards").length

function cardPositioner() {
    let divider = cardCount - 1
    let cardCollection = document.getElementsByClassName("cards")
    let fraction = (100 - 30) / divider
    let i = 0
    for (item of cardCollection) {
        let d = 5 + (fraction * i)
        item.style.left = d + "vw"
        i++
    }
}

cardPositioner()

function cardPositionerCall() {
    let divider = cardCount - 2
    let cardCollection = document.getElementsByClassName("cards")
    let fraction = (100 - 30) / divider
    let i = 0
    for (item of cardCollection) {
        let d = 5 + (fraction * i)
        item.style.left = d + "vw"
        i++
    }
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var randomize = false

document.querySelector("h1").onmouseover = event => {

    clearInterval(interval);
    
    interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("").map(letter => letters[Math.floor(Math.random() * 26)]).join("")
    }, 30)
}

let interval = null;

document.querySelector("h1").onmouseleave = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}