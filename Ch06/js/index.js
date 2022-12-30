
let memory = null;
let op = null;

const history = [];

function inputOnlyNumbers(evt) {

  if (evt.charCode >= 48 && evt.charCode <= 57) return true;
  if (evt.key == '.' && !this.value.includes('.')) return true;

  evt.preventDefault();
  return false;
}

function reset() {

  document.querySelector("#display").value = '';
  memory = null;
  op = null;
}

function square() {
  let display = document.querySelector("#display");
  const initialValue = display.value;
  if (Number.isNaN(display.value)) return;
  display.value = (+display.value) ** 2;
  addHistory(initialValue + ' squared = ' + display.value);
}

function squareRoot() {
  let display = document.querySelector("#display");
  const initialValue = display.value;
  if (Number.isNaN(display.value)) return;
  if (display.value < 0) {
    display.value = "Can't calculate the square root of a negative number";
    return;
  }
  display.value = Math.sqrt(+display.value);
  addHistory('√' + initialValue + ' = ' + display.value);
}

function input(val) {
  let display = document.querySelector("#display");
  display.value += val;
}

function point() {
  let display = document.querySelector("#display");
  if (display.value.includes('.')) return;
  display.value += '.';
}

function sign() {
  let display = document.querySelector("#display");
  display.value *= -1;
}

function inputOp(opCode) {
  let display = document.querySelector("#display");
  if (memory != null) {

    equal();

  }

  op = opCode;
  memory = +display.value;
  addHistory(memory + ' ' + op + ' ...');
  display.value = '';
}

function equal() {

  if (memory == null) return;
  let display = document.querySelector("#display");
  const secondParam = display.value;
  if (op == 'add') {
    display.value = +memory + +display.value;
  }
  if (op == 'sub') {
    display.value = +memory - +display.value;
  }
  if (op == 'mult') {
    display.value = +memory * +display.value;
  }
  if (op == 'div') {
    display.value = +memory / +display.value;
  }
  addHistory(memory + ' ' + op + ' ' + secondParam + ' = ' + display.value);

  memory = null;
  op = null;

}

function addHistory(msg) {

  history.push(msg);
  if (history.length > 8) history.splice(0, history.length - 8);

  const historyContainer = document.querySelector('.history-container');
  while (historyContainer.lastChild) {
    historyContainer.removeChild(historyContainer.lastChild);
  }
  for (const log of history) {
    const entry = document.createElement('p');
    entry.innerText = log;
    historyContainer.appendChild(entry);
  }
}

window.onkeypress = (evt) => {
  evt.preventDefault();
  if (evt.key == '7') input(7);
  if (evt.key == '8') input(8);
  if (evt.key == '9') input(9);
  if (evt.key == '4') input(4);
  if (evt.key == '5') input(5);
  if (evt.key == '6') input(6);
  if (evt.key == '1') input(1);
  if (evt.key == '2') input(2);
  if (evt.key == '3') input(3);
  if (evt.key == '0') input(0);
  if (evt.key == '+') inputOp('add');
  if (evt.key == '-') inputOp('sub');
  if (evt.key == '*') inputOp('mult');
  if (evt.key == '/') inputOp('div');
  if (evt.key == '.') point();
  if (evt.key == 'Enter') equal();
};

document.querySelector("#display")
  .addEventListener("keypress", inputOnlyNumbers);

