const sayHello = () => {
  const name = document.getElementById("name").value;
  alert(`Hello ${name}`);
  // radio
  const gender = document.getElementsByName("gender")[0].checked
    ? document.getElementsByName("gender")[0].value
    : document.getElementsByName("gender")[1].value;
  console.log(gender);

  //select

  //file upload

  //date manipulation
};
