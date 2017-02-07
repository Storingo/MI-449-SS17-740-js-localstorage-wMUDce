var button1 = document.getElementById('button')

var time = window.localStorage.getItem('timeOfDay')

var visits = window.localStorage.getItem('numVisits')

if (visits === null) {
  visits = 1
} else {
  visits = parseInt(visits)
  visits = visits + 1
}
window.localStorage.setItem('numVisits', visits)
document.getElementById('count').textContent = visits

if (time === null) {
  document.body.setAttribute('class', 'day-theme')
} else {
  document.body.setAttribute('class', time + '-theme')
}

button1.addEventListener('click', function () {
  var timeOfDay = window.localStorage.getItem('timeOfDay')
  if (timeOfDay === null) {
    timeOfDay = 'night'
  } else if (timeOfDay === 'day') {
    timeOfDay = 'night'
  } else {
    timeOfDay = 'day'
  }
  document.body.setAttribute('class', timeOfDay + '-theme')
  window.localStorage.setItem('timeOfDay', timeOfDay)
})
