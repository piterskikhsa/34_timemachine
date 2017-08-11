var TIMEOUT_IN_SECS = 3 * 60
var TEMPLATE = '<h1 style="background:rgba(0,0,0,0.73); padding:10px; color:#fd0b24;"><span id="timer-minutes">00</span>:<span id="timer-seconds">00</span></h1>'
var EXPRESSIONS = ['Для того чтобы начать действовать, нет лучшего времени, чем сейчас.',
                  'Когда-нибудь все мы умрём. Вне зависимости от того, сколько вам лет, нужно воспользоваться имеющимся у вас временем, чтобы стать счастливым человеком.',
                  'Ничем не может человек распорядиться в большей степени, чем временем.',
                  'Только время принадлежит нам. Не трать его зря.']

// adds HTML tag to current page
var timerContainer = document.createElement('div')
timerContainer.setAttribute("style", "height: 100px; position:fixed; z-index:100; top:30px; left:20px")
var bodyTag = document.body
bodyTag.insertBefore(timerContainer, bodyTag.firstChild)
timerContainer.innerHTML = TEMPLATE

function getTimestampInSecs() {
    var timestampInMilliseconds = new Date().getTime()
    return Math.round(timestampInMilliseconds / 1000)
}

function padZero(number) {
    return ("00" + String(number)).slice(-2);
}

function alertMessage() {
    alert(EXPRESSIONS[Math.floor(Math.random() * EXPRESSIONS.length)])
}

function alertTimer() {
    alertMessage()
    setInterval(function () {
        alertMessage()
    }, 30000);
}

var timestampOnStart = getTimestampInSecs()

function displayTimer() {
    var currentTimestamp = getTimestampInSecs()
    var secsGone = currentTimestamp - timestampOnStart
    var secsLeft = Math.max(TIMEOUT_IN_SECS - secsGone, 0)

    var minutes = Math.floor(secsLeft / 60);
    var seconds = secsLeft - minutes * 60;

    document.getElementById('timer-minutes').innerHTML = padZero(minutes)
    document.getElementById('timer-seconds').innerHTML = padZero(seconds)

}
setInterval(displayTimer, 300)
setTimeout(alertTimer, TIMEOUT_IN_SECS * 1000)
