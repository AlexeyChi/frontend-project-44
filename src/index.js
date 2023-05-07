import readlineSync from 'readline-sync';

const roundCount = 3;

const startGame = (gemeRules, generateNewRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gemeRules);
  for (let i = 0; i < roundCount; i += 1) {
    const [value, correctAnswer] = generateNewRound();
    console.log(`Question: ${value}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
