//name of a user.
let userName = '';

//the question the user wants to ask the Magic Eight Ball.
let userQuestion = '';

//Generates a random number between 0 and 7.
let randomNumber = Math.floor(Math.random() * 8);

//Stores answer from the eight ball.
let eightBall = '';

userName === 'Jane' ? console.log('Hello, Jane!') : console.log('Hello!');

console.log(userQuestion);

switch(randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

console.log(eightBall);
