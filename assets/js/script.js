/*
 * Title: Assistance Calculator using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the Assistance Calculator
 * Author: RzM
 * Date: 04/12/2021
 *
 */

// select elements & assign them to variables
let btnThree = document.querySelector('#threeK');
let btnThree5 = document.querySelector('#three5K');
let btnFour = document.querySelector('#fourK');
let btnFour5 = document.querySelector('#four5K');
let btnFive = document.querySelector('#fiveK');
let btnUndo = document.querySelector('#undo');

let labelTotalAmount = document.querySelector('.total-amount');
let labelTotalUnit = document.querySelector('.total-unit');

// for total unit
var totalAmount = 0;
var totalUnit = 0;
var totalAmountString = "Total Amount: ";
var totalUnitString = "Total Unit: ";
var tkString = ' TK';

// array for remove history
const arrayAmount = [];


let print = function() {
    console.log("clicked");
}

let totalUnitIncrement = function() {
    totalAmount = totalAmount + 3000;
    totalUnit = totalUnit + 1;
    arrayAmount.push(3000);
    funcTotalOutput();
}

function funcTotaling(value) {
    totalAmount = totalAmount + value;
    totalUnit = totalUnit + 1;
    arrayAmount.push(value);
    funcTotalOutput();
}

function funcLastAomuntAddingUndo() {
    var value = arrayAmount.pop();
    totalAmount = totalAmount - value;
    totalUnit = totalUnit - 1;
    funcTotalOutput();
}

function funcTotalOutput() {
    labelTotalAmount.innerText = totalAmountString + totalAmount + tkString;
    labelTotalUnit.innerText = totalUnitString + totalUnit;
}

btnThree.onclick = totalUnitIncrement;

btnThree5.addEventListener('click', function(){
    funcTotaling(3500);
});

btnFour.addEventListener('click', function(){
    funcTotaling(4000);
});

btnFour5.addEventListener('click', function(){
    funcTotaling(4500);
});

btnFive.addEventListener('click', function(){
    funcTotaling(5000);
});

btnUndo.onclick = funcLastAomuntAddingUndo;