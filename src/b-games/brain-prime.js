import startGame from '../index.js';
import getRandomInt from '../randomizer.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const halfNum = num / 2;
  for (let i = 2; i <= halfNum; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateNewRound = () => {
  const value = getRandomInt(2, 100);
  const correctAnswer = isPrime(value) ? 'yes' : 'no';
  return [value, correctAnswer];
};

const startBrainPrime = () => startGame(gameRules, generateNewRound);

export default startBrainPrime;
