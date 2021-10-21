const daysContainer = document.querySelector(".days");
const hoursContainer = document.querySelector(".hours");
const minutesContainer = document.querySelector(".minutes");
const secondsContainer = document.querySelector(".seconds")
let d = document.querySelector(".date");
const erro = document.querySelector(".erro")
const divForm = document.querySelector(".form");
const divResult = document.querySelector(".result");

function start(){
  let date = d.valueAsDate;
  let currentTime = new Date();
  
  if(date <= currentTime){
    erro.innerHTML =" ⚠️Insira uma data que não tenha passado e nem a data do dia atual ⚠️";
    d.value = "";
  }else{
  incialCountdown()
  
  divForm.setAttribute("style", "display: none")
  divResult.setAttribute("style", "display: block")
  }
  
}

function incialCountdown(){
  setInterval(() => {
    let date = d.valueAsDate;
    let day = new Date(date.valueOf() + date.getTimezoneOffset() * 60000);
    let currentTime = new Date();
    let difference = day - currentTime;

    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60
    
    secondsContainer.innerHTML = seconds < 10 ? "0" + seconds : seconds;
    minutesContainer.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    hoursContainer.innerHTML = hours < 10 ? "0" + hours : hours;
    daysContainer.innerHTML = days < 10 ? "0" + days : days;
  },1000)

}

function resetar(){
  window.location.reload()
}
