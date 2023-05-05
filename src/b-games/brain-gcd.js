import getRandomInt from '../randomizer.js';
import startGame from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 || num2 !== 1) {
    if (num1 % num2 === 0) {
      return num2;
    }
    return getGcd(num2, num1 % num2);
  }
  return 1;
};

const generateNewRound = () => {
  const firstNum = getRandomInt();
  const secondNum = getRandomInt();
  const value = `${firstNum} ${secondNum}`;
  const correctAnswer = String(getGcd(firstNum, secondNum));
  return [value, correctAnswer];
};

const startBrainGcd = () => startGame(gameRules, generateNewRound);

export default startBrainGcd;
