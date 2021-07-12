//console.log('Hello World from node js ...');

// let x  = function(a, b){
//     return a+b;
// }

// let x = (a, b) => {
//     c = a+b;
//     c++;
//     return c;
// }

// console.log(x(5, 6));

//const f1 = () => 'this is a function';

// const f2 = (f) => {
//     return f();
// }

// console.log(f2(() => 'this is a function xxx'));

// const student = {
//     id: 11,
//     name: 'afridi',
//     dept: 'cse',

//     getName: function(){
//         return this.name;
//     }

// }
const a = require('./student.js');

// console.log(a.getName());
// console.log(a.id);

console.log(a.f1(5, 10));
console.log(a.f1(1029, 2346));