// let total = 0;
// let current = 0;

// const seven = document.querySelector('.seven')
let eight = document.querySelector('.eight')
let nine = document.querySelector('.nine')
let four = document.querySelector('.four')
let five = document.querySelector('.five')
let six = document.querySelector('.six')
let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let zero = document.querySelector('.zero')

let plusobj = document.querySelector('#add')
let divideobj = document.querySelector('#divide')
let multiplyobj = document.querySelector('#multiply')
let decimalobj = document.querySelector('#decimal')
let equalsobj = document.querySelector('.equals')
let minusobj = document.querySelector('#minus')

// let operator = document.querySelectorAll('.opp')

// let number = document.querySelectorAll('.num')

// we want above to refer to the object itself; when the object is clicked we can use its Number(textContent) to obtain the value to be used in the computation 

// operator.addEventListener(click, operation());

// number.addEventListener(click, newNum());

// 18 + 4 + 5

// function operation() {
    
// }

// seven.addEventListener('click', testFunc)
document.querySelector('.seven').addEventListener('click', testFunc);
eight.addEventListener('click', eightClick);
nine.addEventListener('click', nineClick);

four.addEventListener('click', fourClick);
five.addEventListener('click', fiveClick);
six.addEventListener('click', sixClick);

one.addEventListener('click', oneClick);
two.addEventListener('click', twoClick);
three.addEventListener('click', threeClick);

zero.addEventListener('click', zeroClick);

plusobj.addEventListener('click', plus);
divideobj.addEventListener('click', divide);
multiplyobj.addEventListener('click', multiply);
decimalobj.addEventListener('click', decimal);
equalsobj.addEventListener('click', equals);
minusobj.addEventListener('click', minus);

function testFunc() {
    document.querySelector('.test').classList.add('testcase');
}
function oneClick(){

	document.case.display.value += "1"
};
function twoClick(){

	document.case.display.value += "2"
};
function threeClick(){

	document.case.display.value += "3"
};
function fourClick(){

	document.case.display.value += "4"
};
function fiveClick(){

	document.case.display.value += "5"
};

function sixClick(){

	document.case.display.value += "6"
};

function sevenClick(){

	document.case.display.value += "7"
};

function eightClick(){

	document.case.display.value += "8"
};

function nineClick(){

	document.case.display.value += "9"
};

function zeroClick(){

	document.case.display.value += "0"
};
function plus(){

	document.case.display.value += "+"
};
function minus(){

	document.case.display.value += "-"
};
function divide(){

	document.case.display.value += "/"
};
function multiply(){

	document.case.display.value += "*"
};


// We might not need clear if the 0 can be used as clear 
// function clear(){

// 	document.case.display.value = ""
// };

function decimal(){

	document.case.display.value = "."
};


function equals() {
	let equals = eval(document.case.display.value)
	document.case.display.value = equals;
}
