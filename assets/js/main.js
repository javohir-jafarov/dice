const dice1 = document.getElementById('dice1')
const dice2 = document.getElementById('dice2')
const rollBtn = document.getElementById('rollBtn')

const maxNum = 6 + 1
const minNum = 1

let randomNum1;
let randomNum2;

const maxDeg = 179 + 1
const minDeg = 1

 let randomDice = () => {
    randomNum1 = Math.floor(Math.random() * (maxNum - minNum) + minNum)
    randomNum2 = Math.floor(Math.random() * (maxNum - minNum) + minNum)



    dice1.innerHTML = `<img src="./assets/images/${randomNum1}.png">`
    dice2.innerHTML = `<img src="./assets/images/${randomNum2}.png">`
    
}
let animation = () => {

    dice1.style.opacity = '0'
    dice2.style.opacity = '0'

    dice1.style.transform = `scale(10)`
    dice2.style.transform = `scale(10)`


    setTimeout(() => {
        dice1.style.opacity = '1'
        dice2.style.opacity = '1'



        dice1.style.transform = `rotate(${Math.floor(Math.random() * (maxDeg - minDeg) + minDeg)}deg)`
    dice2.style.transform = `rotate(${Math.floor(Math.random() * (maxDeg - minDeg) + minDeg)}deg)`
    }, 100)
}

window.addEventListener('click', randomDice)
window.addEventListener('click', animation)


window.addEventListener('click', startShakeDetection)




async function startShakeDetection() {
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    try {
      const permission = await DeviceMotionEvent.requestPermission();
      if (permission !== 'granted') {
        alert('Sensorga ruxsat berilmadi!');
        return;
      }
    } catch (error) {
      console.error(error);
    }
  }

  let lastX = null, lastY = null, lastZ = null;
  const threshold = 15; 

  window.addEventListener('devicemotion', (event) => {
    let { x, y, z } = event.accelerationIncludingGravity;
    if (lastX === null) { lastX = x; lastY = y; lastZ = z; return; }

    let deltaX = Math.abs(lastX - x);
    let deltaY = Math.abs(lastY - y);
    let deltaZ = Math.abs(lastZ - z);

    
    if ((deltaX > threshold && deltaY > threshold) || deltaZ > threshold) {
      randomDice(), animation()
      
      
    }

    lastX = x; lastY = y; lastZ = z;
  });
}


