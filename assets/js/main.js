const dice1 = document.getElementById('dice1')
const dice2 = document.getElementById('dice2')
const rollBtn = document.getElementById('rollBtn')

const max = 6 + 1
const min = 1

let randomNum1 = Math.floor(Math.random() * (max - min) + min)
let randomNum2 = Math.floor(Math.random() * (max - min) + min)



console.log(randomNum1, randomNum2)