import startGame from '../index.js';
import getRandomInt from '../randomizer.js';

const gameRules = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculator = (firstNumber, operator, secondNumber) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Case ${operator} not found.`);
  }
};

const generateNewRound = () => {
  const firstNum = getRandomInt();
  const secondNum = getRandomInt();
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const value = `${firstNum} ${operator} ${secondNum}`;
  const correctAnswer = String(calculator(firstNum, operator, secondNum));
  return [value, correctAnswer];
};

const startBrainCalc = () => startGame(gameRules, generateNewRound);
export default startBrainCalc;
