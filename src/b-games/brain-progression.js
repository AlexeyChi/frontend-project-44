import startGame from '../index.js';
import getRandomInt from '../randomizer.js';

const gameRules = 'What number is missing in the progression?';

const progressionMaxLength = getRandomInt(5, 15);

const makeArray = (startItem, step, changeIndex) => {
  const result = [];
  result.push(startItem);
  for (let i = 1; i < progressionMaxLength; i += 1) {
    const unchangeIndex = startItem + (i * step);
    result.push(i === changeIndex ? '..' : unchangeIndex);
  }
  return result;
};

const generateNewRound = () => {
  const firstItem = getRandomInt();
  const stepOfProgression = getRandomInt(1, 10);
  const randomIndex = getRandomInt(1, progressionMaxLength - 1);
  const value = makeArray(firstItem, stepOfProgression, randomIndex);
  const correctAnswer = String(value[randomIndex - 1] + stepOfProgression);
  return [value, correctAnswer];
};

const startBrainProgression = () => startGame(gameRules, generateNewRound);

export default startBrainProgression;
