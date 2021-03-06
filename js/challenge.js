document.addEventListener('DOMContentLoaded', function(){
  increment()
  count()
  pause()
  like()
})

let isPaused = false

function increment(){
  let counter = document.getElementById('counter')
  let minus = document.getElementById('minus')
  let plus = document.getElementById('plus')
  let counterInt = parseInt(counter.innerText)
  minus.addEventListener('click', function(e){
    counter.innerText = counterInt -= 1
  })
  plus.addEventListener('click', function(e){
    counter.innerText = counterInt += 1
  })
  
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
  let minus = document.getElementById('minus')
  let plus = document.getElementById('plus')
  let pauseButton = document.getElementById('pause')
  pauseButton.addEventListener('click', function() {
    if (isPaused === false) {
      isPaused = true
      minus.disabled = true
      plus.disabled = true
      pauseButton.innerText = 'resume'
    }
    else {
      minus.disabled = false
      plus.disabled = false
      isPaused = false
      pauseButton.innerText = 'pause'
    }
  })
}

function like() {
  let heart = document.getElementById('heart')
  let ul = document.getElementsByClassName('likes')
  heart.addEventListener('click', function() {
    let li = document.createElement('li')
    li.appendChild(document.createTextNode("1 like!"));
    ul.appendChild(li)
  })
}