const sayHello = () => {
    const name =document.getElementById("name").value;
    alert (`Hello ${name}`);
}

const Date = () => {
    const birthday = document.getElementById("birthday").value;
    alert(`Date updated ${birthday}`);
}

const File = () => {
    const myFile = document.getElementById("myFile").value;
    alert(`File uploaded ${myFile}`);
}