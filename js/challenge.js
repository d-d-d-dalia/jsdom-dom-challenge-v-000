document.addEventListener('DOMContentLoaded', function(){
  increment()
  count()
})

function increment(){
  let counter = document.getElementById('counter')
  let minus = document.getElementById('minus')
  let plus = document.getElementById('plus')
  minus.addEventListener('click', function(e){
    counter.innerHTML -= 1
  })
  plus.addEventListener('click', function(e){
    counter.innerHTML += 1
  })
}

function count() {
  setInterval(increase, 1000);
}

function increase() {
  let counter = document.getElementById('counter')
  //let newCount = parseInt(counter.innerText) ++
  //console.log(newCount)
}