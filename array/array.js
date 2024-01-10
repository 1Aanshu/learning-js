const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]

const group = [
    {name: "hari", age:30},
    {name: "ram", age:10},
    {name: "gita", age:40}
];

// Use sort method of array to sort them in ascending order

const newGroup = group.sort((a,b) => a.age - b.age);
console.log({newGroup});

// Write a function to find the maximum and minimum value of an array 
//[22,1,33,9,25] => {min:1, max:55}

const number = [22,1,33,9,25];
const minMax = number.sort((a,b) => a - b);
console.log({min: minMax[0] , max: minMax.pop()});

// Write a program to exclude passsword from the array

const users = [
    {user: "a", pw: "test"},
    {user: "b", pw: "test1"},
    {user: "c", pw: "test2"}
];

// Immutable JS
// JS methods that we use in array to do operations in a copy of the original data
// Array
// map, filter, reduce, some , find, every

// Write a function that accepts an array and 
// Return the sum of all the items of array

// [1,2,3,4,5,6,7,8,9,10] => 55

const number1 = [1,2,3,4,5,6,7,8,9,10];
const sum = number1.reduce(
(accumulator, currentValue) => accumulator + currentValue , 0,
);

console.log (sum);