// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
const test = processFirstItem(['foo', 'bar'], (str)=>str + str);
console.log(test);
//const firstTest = test(str);
// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 
 * they seem to log the same thing, but counter1 keeps its variable in memory and the count of it because it's nested inside the function , counter2 will have to search for the variable it needs on the global scope every time it runs.  
 
 * 2. Which of the two uses a closure? How can you tell?
 
 *  counter1 has closure and counter2 is not using closure. counter2 is reaching outside to the global scope for a variable and counter1 is using the variable nested in its scope keeping it in memory.

 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?

 *counter1 would be preferable if you would want to keep track of the count since it's in the memory of the closure function to use it for a score board lets say and counter2 would be good if you would need to reset/redefine the score/count every time(for counter 2 the variable that it uses it's free to be used in as many functions/counts as you need but that over runs/ over works the program and you can lose the variable down the road/ over ride that variable down the road).
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();
console.log(counter1()); 
//  console.log(counter1());
//  console.log(counter1());
// console.log(counter1());
//counter2 code
let count = 0;

function counter2() {
  return count++;
}
console.log(counter2());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
let score = Math.floor(Math.random()*Math.floor(3));
return score;
}
console.log(inning());
// console.log(inning());
// console.log(inning());
// console.log(inning());
// console.log(inning());
// console.log(inning());
// console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, numberInnings){
let objectScore = {};
objectScore.Home = 0;
objectScore.Away = 0;
for(let i = 1; i<numberInnings; i++){
objectScore.Home = objectScore.Home + inning();
objectScore.Away = objectScore.Away + inning();
}
return objectScore;
}
console.log(finalScore(inning, 9));
// console.log(finalScore(inning, 9));
// console.log(finalScore(inning, 9));
// console.log(finalScore(inning, 9));
// console.log(finalScore(inning, 9));


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1)callback function "inning" that you wrote above
(2) a number of innings
(3)callback function "getInningScore"

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */
function getInningScore(inning){
  let home = 0;
  let away = 0;
  return function(){
    home += inning();
    away += inning();
    return `{Home: ${home}, Away: ${away}`;
  }
}
console.log(getInningScore(inning));
function scoreboard(inning, getInningScore, numberOfInnings) {
  let awayTeam = 0;
  let homeTeam = 0;
  
  for(let i = 1; i<numberOfInnings; i++){
    awayTeam += getInningScore(inning());
    homeTeam += getInningScore(inning());
    
  }
  return `1st inning : ${homeTeam} - ${awayTeam}\n2nd inning: ${homeTeam} - ${awayTeam}\n3rd inning: ${homeTeam} - ${awayTeam}\n4th inning: ${homeTeam} - ${awayTeam}\n5th inning: ${homeTeam} - ${awayTeam}\n6th inning: ${homeTeam} - ${awayTeam}\n7th inning: ${homeTeam} - ${awayTeam}\n8th inning: ${homeTeam} - ${awayTeam}\n9th inning: ${homeTeam} - ${awayTeam}\nFinal Score: ${homeTeam} - ${awayTeam}`;
};
console.log(scoreboard(inning, getInningScore, 9));
// console.log(scoreboard(inning, 9));
// console.log(scoreboard(inning, 9));


