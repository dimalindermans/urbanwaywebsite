const ievaBtn = document.getElementById("ieva-btn")
const lauraBtn = document.getElementById("laura-btn")
const andrisBtn = document.getElementById("andris-btn")
const maksimsBtn = document.getElementById("maksims-btn")

const el10 = document.getElementById("10")
const el11 = document.getElementById("11")
const el12 = document.getElementById("12")
const el13 = document.getElementById("13")
const el14 = document.getElementById("14")
const el15 = document.getElementById("15")
const el16 = document.getElementById("16")
const el17 = document.getElementById("17")
const el18 = document.getElementById("18")
const el19 = document.getElementById("19")


ievaBtn.addEventListener("click", function() {
    el10.style.color = 'red'
    el11.style.color = 'green'
    el12.style.color = 'green'
    el13.style.color = 'red'
    el14.style.color = 'red'
    el15.style.color = 'green'
    el16.style.color = 'green'
    el17.style.color = 'red'
    el18.style.color = 'red'
    el19.style.color = 'red'
    ievaBtn.style.color = 'yellow' 
    lauraBtn.style.color = 'seashell'
    andrisBtn.style.color = 'seashell'
})

lauraBtn.addEventListener("click", function() {
    el10.style.color = 'red'
    el11.style.color = 'red'
    el12.style.color = 'green'
    el13.style.color = 'green'
    el14.style.color = 'green'
    el15.style.color = 'green'
    el16.style.color = 'green'
    el17.style.color = 'red'
    el18.style.color = 'green'
    el19.style.color = 'red'
    lauraBtn.style.color = 'yellow'
    ievaBtn.style.color = 'seashell'
    andrisBtn.style.color = 'seashell'
    maksimsBtn.style.color = 'seashell' 
})

andrisBtn.addEventListener("click", function() {
    el10.style.color = 'green'
    el11.style.color = 'red'
    el12.style.color = 'red'
    el13.style.color = 'red'
    el14.style.color = 'red'
    el15.style.color = 'red'
    el16.style.color = 'red'
    el17.style.color = 'red'
    el18.style.color = 'red'
    el19.style.color = 'red'
    andrisBtn.style.color = 'yellow'
    lauraBtn.style.color = 'seashell'
    ievaBtn.style.color = 'seashell' 
    maksimsBtn.style.color = 'seashell'
})

maksimsBtn.addEventListener("click", function() {
    el10.style.color = 'green'
    el11.style.color = 'green'
    el12.style.color = 'green'
    el13.style.color = 'green'
    el14.style.color = 'red'
    el15.style.color = 'red'
    el16.style.color = 'green'
    el17.style.color = 'green'
    el18.style.color = 'green'
    el19.style.color = 'red'
    maksimsBtn.style.color = 'yellow'
    andrisBtn.style.color = 'seashell'
    lauraBtn.style.color = 'seashell'
    ievaBtn.style.color = 'seashell' 
})

function whenYouClick() {
    let inputNumber = document.getElementById("inputNr").value;
    let phoneNumber = /^([2]){1}([0-9]){7}\b$/gm;
    if (inputNumber.match(phoneNumber)) {
      alert("OK! Thanks!");
      return true;
    } else {
      alert("Sorry, the number is incorrect");
      return false;
    }
  }