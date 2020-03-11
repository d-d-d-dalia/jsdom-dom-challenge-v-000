document.addEventListener('DOMContentLoaded', function(){
  increment()
  count()
  pause()
})

let isPaused = false

function increment(){
  let counter = document.getElementById('counter')
  let minus = document.getElementById('minus')
  let plus = document.getElementById('plus')
  let counterInt = parseInt(counter.innerText)
  if (!isPaused) {
    minus.addEventListener('click', function(e){
      counter.innerText = counterInt -= 1
    })
    plus.addEventListener('click', function(e){
      counter.innerText = counterInt += 1
    })
  }
}

function count() {
  setInterval(increase, 1000);
}

function increase() {
  let counter = document.getElementById('counter')
  let counterInt = parseInt(counter.innerText)
  if (!isPaused) {
    counter.innerText = counterInt += 1
  }
}

function pause() {
  let pauseButton = document.getElementById('pause')
  pauseButton.addEventListener('click', function() {
    if (isPaused === false) {
      isPaused = true
      pauseButton.innerText = 'resume'
    }
    else {
      isPaused = false
      pauseButton.innerText = 'pause'
    }
  })
}