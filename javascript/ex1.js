// EXERCISE 1
// print number from 1 to 100
// if number is divisible by 3 print fizz
// if number is divisible by 5 print buzz
// if number is divisible by both number print fizzBuzz

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   }
//   console.log(i);
// }

// EXERCISE 2
// SAME AS BEFORE BUT PRINT NUMBER AND FIZZ, BUZZ OR FIZZBUZZ WHEN IS NEEDED

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`${i} FizzBuzz`);
//   } else if (i % 3 === 0) {
//     console.log(`${i} Fizz`);
//   } else if (i % 5 === 0) {
//     console.log(`${i} Buzz`);
//   }
//   console.log(i);
// }

// EXERCISE 3
// FROM THE LIST SUM THE EVEN NUMBERS

// const numbers = [4, 8, 0, 1, 3, 9, 10];

// let sum = 0;
// for (let i = 0; i <= numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     sum = sum + numbers[i];
//   }
// }
// console.log(sum);

// const sum = 0;
// for (i of a) {
//   if (a[i] % 2 === 0) {
//     sum = sum + a[i];
//   }
// }
// console.log(sum);

// EXERCISE 4
// WITH CLASES, CREATE A GAME OF CARDS WITH 2 PLAYERS THAT HAVE 6 CARDS
// PLAYER1 WIN 1ST,3TH,4TH AND 5TH, DEUCE 6H
// PLAYER2 ONLY WIN 2ND

// class Deck {
//     constructor (cards) {
//         this.cards=[];
//         this.values= ['A',2,3,4,5,6,7,8,9,'T','J','Q','K'];
//     }

//     ranks () {
//         switch (this.value = 'A' || )
//     }
// }

const cards = [
  { 2: 2 },
  { 3: 3 },
  { 4: 4 },
  { 5: 5 },
  { 6: 6 },
  { 7: 7 },
  { 8: 8 },
  { 9: 9 },
  { T: 10 },
  { J: 11 },
  { Q: 12 },
  { K: 13 },
  { A: 14 }
];

function startGame() {
  const player1 = ["T", 2, 3, 9, 5];
  const player2 = [5, 6, 3, 8, 4];
  let round = 0;
  for (let i = 0; i < player1.length; i++) {
    if ((player1[i] = "T")) {
      player1[i] = 10;
    } else if (player1[i] > player2[i]) {
      console.log(
        `Player 1 win round ${(round = round + 1)}. Win with card ${
          player1[i]
        } carta player 2 ${player2[i]}`
      );
    } else if (player1[i] == player2[i]) {
      console.log(
        `Round ${(round = round + 1)} end deuce. Deuce with card ${player1[i]}`
      );
    } else {
      console.log(
        `Player 2 win round ${(round = round + 1)}. Win with card ${player2[i]}`
      );
    }
  }
}

// function letterValue() {
//   if (
//     player1.indexOf("T") >= 0 ||
//     player2.indexOf("T") >=0) {
//       player1IndexOf('T')= 10
//     }
//     player1.indexOf("J") >= 0 ||
//     player2.indexOf("J") ||
//     player1.indexOf("Q") >= 0 ||
//     player2.indexOf("Q") ||
//     player1.indexOf("K") >= 0 ||
//     player2.indexOf("K") ||
//     player1.indexOf("A") >= 0 ||
//     player2.indexOf("A")
//   ) {
//   }
// }

startGame();
