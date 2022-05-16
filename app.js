const {play} = require('./game');

const {winner, signs_history, score_history} = play();

console.log(`Player #${winner} is the winner !`);
console.log(signs_history);
console.log(score_history);