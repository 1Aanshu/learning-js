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

// Write a program to exclude passsword from the array

const users = [
    {user: "a", pw: "test"},
    {user: "b", pw: "test1"},
    {user: "c", pw: "test2"}
]