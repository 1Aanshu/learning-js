// Recap couple of concepts (array,array method chaining,spread Ops, Function)
// Write a js function to convert the string in proper case

const arr = [{ name: "ram" }, { name: "sita" }, { name: "hari" }];
const first = arr[0];

const [a, b, c, ...rest] = arr;

// Immutable Js, Filter,map, reduce, every, some, find

const isEveryValid = arr.every((item) => item.name.split(" ")[0] === "r");
const isSomeValid = arr.some((item) => item.name.split(" ")[0] === "r");
console.log({ isEveryValid, isSomeValid });

// Function
const checkArrayStartWithR = (ram) => {
  return ram.every((item) => item.name.split(" ")[0] === "r");
};

const fun = checkArrayStartWithR(arr);
console.log({ fun });

// Write a js function to convert the string into the propercase
// Eg 'The fox is sly' => "The Fox Is Sly"

const properCase = (string) => {
    return string
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
console.log(properCase("The fox is sly"));

// Date and Date properties

const today = new Date(); //ISO String
console.log(today);

const giveMeYear = today.getFullYear();
const setMyYear = today.setFullYear(2023);
console.log(today, giveMeYear, setMyYear);

const myToday = new Date(1705200098); //new Date()
console.log({ myToday });

myToday.setDate(12);
console.log({ myToday });

// Practice month get-set, day get-set
//Date Formats
// UTC => TZ
// ISO => TZ +00:00
// Unix epoch => Seconds Tick
