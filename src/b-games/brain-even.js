import getRandomInt from '../randomizer.js';
import startGame from '../index.js';

const gemeRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateNewRound = () => {
  const value = getRandomInt();
  const correctAnswer = isEven(value) ? 'yes' : 'no';
  return [value, correctAnswer];
};

const startBrainEven = () => startGame(gemeRules, generateNewRound);

export default startBrainEven;
