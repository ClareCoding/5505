console.log('hello hello world world')

// var 全局
// let , 可以修改
// const  不能修改  是常量

const age = 30;
// const 在使用时，必须初始化数值
console.log(age);

const username = "john";
const isCool = true;


// console.log(typeof b);
const x = null;
const y = undefined;
// z也是undefined

console.log(typeof z);


console.log("My name is " + username  +" and I am " +  age);
console.log(`My name is ${username} and I am ${age}. `);

const s = "hello hihi";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(""));
// [
//   'h', 'e', 'l', 'l',
//   'o', ' ', 'h', 'i',
//   'h', 'i'
// ]


const m = "tech, computers, it, code";
console.log(m.split(","));


const numbers = new Array(1,2,3,4,5);
console.log(numbers);
const fruits = ["apples", "oranges"];
console.log(fruits[1]);


// 末尾添加元素：
fruits.push("mangos");
fruits.pop();
fruits.unshift("strawberries");
// 在前面加一个元素
console.log(fruits);

console.log(Array.isArray(fruits));
console.log(Array.isArray("fruits"));

console.log(fruits.indexOf("oranges"));



const person = {
    firstname: "John",
    lastname: "Doe",
    age: 30,
    hobbies: ["music", "movies", "sports"],
    address: {
        street: "50 main st",
        city: "Boston",
        state: "MA",
    },
};

console.log(person);
// console.log(person.firstname);
console.log(person.hobbies[1]);
console.log(person.address.city);


// const { firstname, lastname} = person;
// console.log(firstname);

const {
    firstname, 
    lastname,
address: {city}} = person;

console.log(city);

// 添加新属性：
person.email = "john@gmail.com";
console.log(person.email);

const todos = [
    {
        id: 1,
        text: "Take out trash",
        isCompleted: "true",
    },
    {
        id: 2,
        text: "Meeting with boss",
        isCompleted: "true",
    },
    {
        id: 3,
        text: "Dentist",
        isCompleted: "false",
    }


];


console.log(todos[1].text);



// json:注意每一个属性页会带双引号的
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

const r = 10;
const t = 15;


if (r ==10) {
    console.log("r is string 10");
}

// 三个等号会考虑数据的类型：
if (r ===10) {
    console.log("r is number 10");
} else if (r > 5) {
    console.log("r is greater than 5");
} else {
    console.log(" r is less than 5")
}


if (r > 5 || y >10) {
    console.log("r is number 10");
} else if (r > 5) {
    console.log("r is greater than 5");
} else {
    console.log(" r is less than 5")
}

//   &&



// 三元运算：用来简化if else 代码
const p = 10;
const color = p > 10 ? "red" : "blue";
console.log(color);

switch(color) {
    case "red":
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
    default:
        console.log("color is not red or blue");
}
// 注意要有break！！！

for (let i = 0; i <10; i++) 
{
    console.log(i)
}

// while 循环要注意：
// 1. 变量声明在while 之前； 在 JavaScript 中，变量声明可以放在 while 循环之前，也可以放在循环内部。但是，如果你在循环内部声明变量，那么它只会在该循环内部可见。
// 2.变量的限制在while 后的括号里面；
// 3.对变量的更改，要在while的花括号里面；
let i = 0 ;
while (i < 10) {
    console.log(`while loop number: ${i}`);
    i++;
}


for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

for (let to of todos) {
    console.log(to);
    console.log(to.isCompleted);
    console.log(to.id);

}


// for each：
var ar = [10,20,30,40,50];
ar.forEach(
    function (item, index) {
    console.log(item,index)
    }
)


// object 一种无序的储存方式：
var obj ={
    name: "Amy",
    age: 60
}

for (var key in obj) {
    console.log(key)
    console.log(key, obj[key])
}










