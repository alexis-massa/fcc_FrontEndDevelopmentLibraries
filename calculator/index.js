let currentInput = '0'
let lastResult = ''
let lastOperator = ''
let isResultDisplayed = false


$(document).ready(() => { addEventListeners() })

const calculateResult = () => {
  try {
    let expression = currentInput.replace(/[^-()\d/*+.]/g, '')
    lastResult = parseFloat(eval(expression).toFixed(4)).toString()
    currentInput = lastResult
    isResultDisplayed = true
    updateDisplay()
  } catch (e) {
    currentInput = 'Error'
    updateDisplay()
  }
}

const inputNumber = (num) => {
  if (isResultDisplayed) {
    currentInput = num
    isResultDisplayed = false
  } else {
    if (currentInput === '0' && num !== '.') currentInput = num
    else if (!(num === '0' && currentInput === '0')) currentInput += num
  }
  updateDisplay()
}

const inputDecimal = () => {
  const lastNumberSegment = currentInput.split(/[-+*/]/).pop();
  if (!lastNumberSegment.includes('.')) currentInput += '.';
  updateDisplay();
};

const inputOperator = (operator) => {
  if (isResultDisplayed) isResultDisplayed = false
  if (/[+\-*/]$/.test(currentInput)) {
    if (op === '-' && !/[+\-*/]-$/.test(currentInput)) currentInput += op
    else currentInput = currentInput.slice(0, -1) + operator
  } else {
    currentInput += operator
  }
  lastOperator = operator
  updateDisplay()

}

const clearInput = () => {
  currentInput = '0'
  lastResult = ''
  lastOperator = ''
  isResultDisplayed = false
  updateDisplay()
}

const updateDisplay = () => { $('#display').text(currentInput) }

const addEventListeners = () => {
  document.getElementById('zero').onclick = () => inputNumber('0');
  document.getElementById('one').onclick = () => inputNumber('1');
  document.getElementById('two').onclick = () => inputNumber('2');
  document.getElementById('three').onclick = () => inputNumber('3');
  document.getElementById('four').onclick = () => inputNumber('4');
  document.getElementById('five').onclick = () => inputNumber('5');
  document.getElementById('six').onclick = () => inputNumber('6');
  document.getElementById('seven').onclick = () => inputNumber('7');
  document.getElementById('height').onclick = () => inputNumber('8');
  document.getElementById('nine').onclick = () => inputNumber('9');
  document.getElementById('decimal').onclick = () => inputDecimal();

  document.getElementById('add').onclick = () => inputOperator('+');
  document.getElementById('substract').onclick = () => inputOperator('-');
  document.getElementById('multiply').onclick = () => inputOperator('*');
  document.getElementById('divide').onclick = () => inputOperator('/');

  document.getElementById('equals').onclick = calculateResult;
  document.getElementById('clear').onclick = clearInput;
}