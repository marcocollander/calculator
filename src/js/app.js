const characters = document.querySelectorAll(
  '.calculator-characters__row > .calculator-characters__item'
);
const display = document.querySelector('.calculator__display');
let number = 0,
  numberOne = 0,
  numberTwo = 0,
  counter = 0,
  result = 0;
let sign;

for (const character of characters) {
  character.addEventListener('click', () => {
    switch (character.textContent) {
    case '0':
      display.textContent += character.textContent;
      if (counter === 0) {
        number = parseFloat(display.textContent);
      } else if (counter === 1) {
        numberOne = parseFloat(character.textContent);
        character.textContent = '0';
      }
      break;
    case '1':
      display.textContent += character.textContent;
      if (counter === 0) {
        number = parseFloat(display.textContent);
      } else if (counter === 1) {
        numberOne = parseFloat(character.textContent);
        character.textContent = '1';
      }
      break;
    case '2':
      display.textContent += character.textContent;
      if (counter === 0) {
        number = parseFloat(display.textContent);
      } else if (counter === 1) {
        numberOne = parseFloat(character.textContent);
        character.textContent = '2';
      }
      break;
    case '3':
      display.textContent += character.textContent;
      if (counter === 0) {
        number = parseFloat(display.textContent);
      } else if (counter === 1) {
        numberOne = parseFloat(character.textContent);
        character.textContent = '3';
      }
      break;
    case '4':
      display.textContent += character.textContent;
      if (counter === 0) {
        number = parseFloat(display.textContent);
      } else if (counter === 1) {
        numberOne = parseFloat(character.textContent);
        character.textContent = '4';
      }
      break;
    case '5':
      display.textContent += character.textContent;
      if (counter === 0) {
        number = parseFloat(display.textContent);
      } else if (counter === 1) {
        numberOne = parseFloat(character.textContent);
        character.textContent = '5';
      }
      console.log(number);
      console.log(numberTwo);
      break;
    case '6':
      display.textContent += character.textContent;
      if (counter === 0) {
        number = parseFloat(display.textContent);
      } else if (counter === 1) {
        numberOne = parseFloat(character.textContent);
        character.textContent = '6';
      }
      break;
    case '7':
      display.textContent += character.textContent;
      if (counter === 0) {
        number = parseFloat(display.textContent);
      } else if (counter === 1) {
        numberOne = parseFloat(character.textContent);
        character.textContent = '7';
      }
      break;
    case '8':
      display.textContent += character.textContent;
      if (counter === 0) {
        number = parseFloat(display.textContent);
      } else if (counter === 1) {
        numberOne = parseFloat(character.textContent);
        character.textContent = '8';
      }
      break;
    case '9':
      display.textContent += character.textContent;
      if (counter === 0) {
        number = parseFloat(display.textContent);
      } else if (counter === 1) {
        numberOne = parseFloat(character.textContent);
        character.textContent = '9';
      }
      break;
    case '.':
      display.textContent += character.textContent;
      break;
    case '+':
      display.textContent += character.textContent;
      sign = '+';
      counter++;
      break;
    case '-':
      display.textContent += character.textContent;
      sign = '-';
      counter++;
      break;
    case '*':
      display.textContent += character.textContent;
      sign = '*';
      counter++;
      break;
    case '/':
      display.textContent += character.textContent;
      sign = '/';
      counter++;
      break;
    case '=':
      switch (sign) {
      case '+':
        console.log(number);
        console.log(numberOne);
        result = (number + numberOne).toFixed(4);
        console.log(result);
        display.textContent = result.toString();
        break;
      case '-':
        console.log(number);
        console.log(numberOne);
        result = (number - numberOne).toFixed(4);
        console.log(result);
        display.textContent = result.toString();
        break;
      case '*':
        console.log(number);
        console.log(numberOne);
        result = (number * numberOne).toFixed(4);
        console.log(result);
        display.textContent = result.toString();
        break;
      case '/':
        console.log(number);
        console.log(numberOne);
        result = (number / numberOne).toFixed(4);
        console.log(result);
        display.textContent = result.toString();
        break;
      }

      break;
    case 'C':
      display.textContent = '';
      sign = undefined;
      number = 0;
      numberOne = 0;
      numberTwo = 0;
      counter = 0;
    }
  });
}


