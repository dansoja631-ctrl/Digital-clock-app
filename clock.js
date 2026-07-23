let is24Hour = true;

function updateClock(){

const now = new Date();

let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();

let session="";

if(!is24Hour){

session = hour >=12 ? " PM":" AM";

hour = hour%12;

hour = hour ? hour :12;

}

hour = String(hour).padStart(2,'0');
minute = String(minute).padStart(2,'0');
second = String(second).padStart(2,'0');

document.getElementById("clock").innerHTML =
`${hour}:${minute}:${second}${session}`;

const options={
weekday:'long',
year:'numeric',
month:'long',
day:'numeric'
};

document.getElementById("date").innerHTML =
now.toLocaleDateString('en-US',options);

}

setInterval(updateClock,1000);

updateClock();

function toggleFormat(){

is24Hour=!is24Hour;

updateClock();

}

function toggleTheme(){

document.body.classList.toggle("dark");

}