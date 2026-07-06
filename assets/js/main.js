const dice1 = document.getElementById('dice1')
const dice2 = document.getElementById('dice2')
const rollBtn = document.getElementById('rollBtn')

const max = 6 + 1
const min = 1

let randomNum1;
let randomNum2;

 

window.addEventListener('click', function() {
    randomNum1 = Math.floor(Math.random() * (max - min) + min)
    randomNum2 = Math.floor(Math.random() * (max - min) + min)



    dice1.innerHTML = `<img src="./assets/images/${randomNum1}.png">`
    dice2.innerHTML = `<img src="./assets/images/${randomNum2}.png">`
    
})




