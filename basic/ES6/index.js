"use strict"

//const student = ['afridi', 'anonna', 'dhaka', 'delhi'];
const num = ['1', '2', '3', '4'];

/* const newarray = student.filter(function(std){
    return std[0] == 'a';
});
//alternative
const newarray = student.filter(std=>std[0]=='d'); */

/* const newarray = student.join('--');

console.log(newarray); */

/* const newarray = [...student, '#', ...num];
console.log(newarray); */

//object destructuring -->
/* const student = {id: 1, name: 'afridi', email: 'afridi@gmail.com'}
const {id, name:myname, email:myemail} = student;
console.log(myemail); */

/* console.log('run now..');
setTimeout(function(){
    console.log('run after 3 sec...');
}, 3000)
setTimeout(function(){
    console.log('run after 3 sec...');
}, 3000)
setTimeout(function(){
    console.log('run after 5 sec...');
}, 5000) */

//promise object
/* const p = new Promise((resolve, reject)=>{
	let sum = 10;
	if(sum == 10){
		setTimeout(()=>{
			resolve('true');			
		}, 2000);
	}else{
		reject('false');
	}
});

p.then(msg=>{
    console.log(msg);
}).catch(error=>{
    console.log(error);
}); */

/* //function returns promise
function sum(a, b){
    return new Promise((resolve, reject)=>{
        if(a!==0 && b!==0){

            setTimeout(()=>{
                let sum = a+b;
                resolve(sum);
            }, 3000);

        }else{
            reject(0);
        }
    })
}

//asynchronous function
 async function mytask (x, y){
    let total = await sum(x, y);
    console.log(`Total Value ${total}`);
}

mytask(10,20);
console.log("this is a function!!");
 */

/* sum(1,9).then(msg=>{
    console.log(msg);
}).catch(error=>{
    console.log(error);
});

mytask(1,9).then(msg=>{
    console.log(msg);
}).catch(error=>{
    console.log(error);
}); */


//import {Student} from './student';
//import Student from './student'; // this is used inside module

const Student = require('./student.js');

const s1 = new Student('afridi', 'abc@gmail.com', 'cse');
console.log(s1.getName());


