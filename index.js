let num1= parseInt(prompt("Enter your first number")) 
let num2= parseInt(prompt("Enter your second number"))

let add =num1+num2;
let sub =num1-num2;
let mult =num1*num2;
let div =num1/num2;
let rem =num1%num2;

document.getElementById('add').innerHTML=add;
document.getElementById('sub').innerHTML=sub;
document.getElementById('mult').innerHTML=mult;
document.getElementById('div').innerHTML=div;
document.getElementById('rem').innerHTML=rem;




