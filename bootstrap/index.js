const getFormData = () => {
  const name = document.getElementById("name").value;
  document.getElementById("result").innerHTML = name;
};

const getTime = () => {
  const time = new Date();
  const watchHour = time.getHours();
  const watchMin = time.getMinutes();
  const watchSec = time.getSeconds();

  const currentTime = String(watchHour).concat(":", watchMin, ":", watchSec);
  document.getElementById("clock").innerHTML = currentTime;
};

setInterval(() => {
  getTime();
}, 1000);
