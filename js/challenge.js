document.addEventListener('DOMContentLoaded', function(){
  increment()
  count()
})

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
  counter.innerText = counterInt += 1
}