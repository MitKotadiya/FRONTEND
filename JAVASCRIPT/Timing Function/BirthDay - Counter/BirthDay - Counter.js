
let count = () => {

  let birthDate = new Date("2026-05-06 12:00:00");
  let currentDate = new Date();

  if (birthDate.getFullYear() <= currentDate.getFullYear() && birthDate <= currentDate) {
        document.getElementById("error").textContent ="Invalid date: Birthday must be in the future.";
        return;
  }else{

  let years = birthDate.getFullYear() - currentDate.getFullYear();
  let months = birthDate.getMonth() - currentDate.getMonth();
  let days = birthDate.getDate() - currentDate.getDate();
  let hours = birthDate.getHours() - currentDate.getHours();
  let minutes = birthDate.getMinutes() - currentDate.getMinutes();
  let seconds = birthDate.getSeconds() - currentDate.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    let prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }
  
  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
  
}
}

setInterval(count, 1000);

   
