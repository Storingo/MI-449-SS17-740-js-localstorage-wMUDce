var button1 = document.getElementById('button')

var visits = window.localStorage.getItem('numVisits')

visits = (parseInt(visits) || 0) + 1

window.localStorage.setItem('numVisits', visits)
document.getElementById('count').textContent = visits

var timeOfDay = window.localStorage.getItem('timeOfDay') || 'day'
document.body.setAttribute('class', timeOfDay + '-theme')

button1.addEventListener('click', function () {
  if (timeOfDay === 'night') {
    timeOfDay = 'day'
  } else {
    timeOfDay = 'night'
  }
  document.body.setAttribute('class', timeOfDay + '-theme')
  window.localStorage.setItem('timeOfDay', timeOfDay)
})
