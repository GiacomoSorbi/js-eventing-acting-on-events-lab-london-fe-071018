const dodger = document.getElementById('dodger')
const moves = {
  37: function(){ //left
    const leftNumbers = dodger.style.left.replace('px', '')
    const left = parseInt(leftNumbers, 10)
    dodger.style.left = `${left - 1}px`
  },
  38: function(){ //up
    const bottomNumbers = dodger.style.bottom.replace('px', '')
    const bottom = parseInt(bottomNumbers, 10)
    dodger.style.bottom = `${bottom + 1}px`
  },
  39: function(){ //right
    const leftNumbers = dodger.style.left.replace('px', '')
    const left = parseInt(leftNumbers, 10)
    dodger.style.left = `${left + 1}px`
  },
  40: function(){ //down
    const bottomNumbers = dodger.style.bottom.replace('px', '')
    const bottom = parseInt(bottomNumbers, 10)
    dodger.style.bottom = `${bottom - 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  (moves[e.which] || (_ => console.log(e.which)))();
})