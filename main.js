const loadingtext = document.querySelector('.loadingtext')
const surferblurred = document.querySelector('.surferblurred')

let loading = 0

let int = setInterval(blurring, 30)

function blurring() {
  loading++

  if (loading > 99) {
    clearInterval(int)
  }

  loadingtext.innerText = `${loading}%`
  loadingtext.style.opacity = progression(loading, 0, 100, 1, 0)
  surferblurred.style.filter = `blur(${progression(loading, 0, 100, 30, 0)}px)`
}

const progression = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}