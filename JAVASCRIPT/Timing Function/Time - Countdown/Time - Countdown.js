let time = 10
setInterval( () => {
    document.getElementById("Countdown").innerHTML = time;
    if (time <= 0) {
        return;
    }
    time--
},1000)