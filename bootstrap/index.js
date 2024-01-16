const getFormData = () => {
  const name = document.getElementById("name").value;
  document.getElementById("result").innerHTML = name;
  const pwd = document.getElementById("pwd").value;
  document.getElementById("resultpwd").innerHTML =pwd;
  const mail = document.getElementById("mail").value;
  document.getElementById("resultmail").innerHTML =mail;
  const colz = document.getElementById("colz").value;
  document.getElementById("resultcolz").innerHTML=colz;
};

const getTime = () => {
  const time = new Date();
  const Day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  const watchDay = Day[time.getDay()];
  const watchDate = time.getDate();
  const Month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const watchMonth = Month[time.getMonth()];
  const watchYear = time.getFullYear();
  const watchHour = time.getHours();
  const watchMin = time.getMinutes();
  const watchSec = time.getSeconds();
  const watchAp = time.toUTCString();
  const watchTime = time.toLocaleTimeString();

  const currentTime = String(watchDay).concat(
    " ",
    watchDate,
    " ",
    watchMonth,
    " ",
    watchYear,
    " ",
    watchHour,
    ":",
    watchMin,
    ":",
    watchSec,
    " ",
    watchAp,
    " ",
    watchTime
  );
  document.getElementById("clock").innerHTML = currentTime;
};

setInterval(() => {
  getTime();
}, 1000);
