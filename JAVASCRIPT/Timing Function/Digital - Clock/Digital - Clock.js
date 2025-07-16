setInterval(()=>{
let currentDate = new Date();
let localDate = currentDate.toLocaleTimeString()
document.getElementById("time").innerHTML = localDate;
},1000)
