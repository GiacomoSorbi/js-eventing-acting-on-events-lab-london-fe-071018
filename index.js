const dodger = document.getElementById('dodger')
const moves = {
  37: function(){ //left
    const leftNumbers = dodger.style.left.replace('px', '')
    const left = parseInt(leftNumbers, 10)
    dodger.style.left = `${left - 1}px`
  },
  38: function(){ //left
    const leftNumbers = dodger.style.left.replace('px', '')
    const left = parseInt(leftNumbers, 10)
    dodger.style.left = `${left - 1}px`
  },
  39: function(){ //left
    const leftNumbers = dodger.style.left.replace('px', '')
    const left = parseInt(leftNumbers, 10)
    dodger.style.left = `${left - 1}px`
  },
  40: function(){ //left
    const leftNumbers = dodger.style.left.replace('px', '')
    const left = parseInt(leftNumbers, 10)
    dodger.style.left = `${left - 1}px`
  },
}

document.addEventListener('keydown', function(e) {
  moves[e.which]();
})