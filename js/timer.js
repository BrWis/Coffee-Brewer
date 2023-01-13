var start = document.getElementById('start');
var reset = document.getElementById('reset');

var m = document.getElementById("minute");
var s = document.getElementById("sec");

var startTimer = null;

start.addEventListener('click', function(){
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
})

reset.addEventListener('click', function(){
    m.value = 0;
    s.value = 0;
    stopInterval()
})

function timer(){
    if(m.value == 0 && s.value == 0){
        m.value = 0;
        s.value = 0;
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    }
    return;
}

function stopInterval() {
    clearInterval(startTimer);
}