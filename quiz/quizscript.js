// declaring global variables

let player1 = 'Player1';
let player2 = 'Player2';

let buttonPressed = false;                                // answer button pressed. Stops timer if true.
let bounce = false;                                       // if user sets bounce to on, the question is bounced once, when the time is iver.
let questionNum = 1;                                      // number of the current question.
let totalQuestions = 2;                                   // total of questions chosen is settings.
let players = 2;                                          // number of players.
let subj = 0;                                             // array of subjects chosen for the questions.
let time = 10;                                            // time for each question, in seconds.
let difficulty = 0;
let activePlayer = 1;
let bounceDone = false;


//------------------------------------------------------------------------------------------
// Calling to game functions

settings();                                               // displays settings screen.
play();                                                   // displays the game screen and question, with timer on, gets the answer, bounces if time is over and actualizes scores.
finish();                                                 // displays final results screen.


//------------------------------------------------------------------------------------------
// declaring game functions


function settings(){                                        // shows the settings screen (a fixed div placed over the play screen).
  
  let button = document.querySelector(".button");


  button.addEventListener('click', ()=>{                    // when usec clicks button, settings window is closed and data is collected.

    document.getElementById("settings").style.display = "none";

    
  let playersNum = document.getElementsByName("playersNum");
  playersNum[0].checked ? players = 1 : players = 2;
  let questions = document.getElementsByName("questionsNum");
  questions[0].checked ? questionNum = 10 : questions[1].checked ? questionNum = 30 : questionNum = 50;
  
  player1 = document.getElementById("player1").value;
  player2 = document.getElementById("player2").value;


  let timeset = document.getElementsByName("time");
  timeset[0].checked ? time = 12 :timeset[1].checked ? time = 15 : time = 20;
  let subjlist = document.getElementsByName("subjects");
  for (let i = 0; i < subjlist.length; i++){
    if (subjlist[i].checked) {subj = i};
  }
  let diff = document.getElementsByName("difficulty");
  diff[0].checked ? difficulty = 0 : diff[1].checked ? difficulty = 1 : difficulty = 2;
  let getbounce = document.getElementsByName("bounce");
  getbounce[0].checked ? bounce = true : bounce = false;
  
    console.log('game values: ' + players, questionNum, time, subj, difficulty, bounce, player1, player2);

  })
}

function play(){

  while (questionNum <= totalQuestions){

    setTorn(players, player1, player2);                      // set whose torn is it.
    fetchQuestions(questionNum, subj);                        // executes a fetch to the API.
    timerOn(time);                                           // the timer gets its value from the settings and runs.
    getAnswer();                                             // listens to the button click and shifts value of buttonPressed to stop timer.
    bouncing()                                               // runs when time is over, asking the other player to answer the same question and 
    score()                                                  // actualizes scores and rates.

  }
}

  // set whose torn is it.
function setTorn(){

}
  // display player, number of question, total of questions, and difficulty.
function fetchQuestions(){

}

function displayScreen(players, totalQuestions, subjects){

  // set active player
  // display question #/totalQuestions

  console.log(`displaying game screen. ` + players, totalQuestions, subjects);

}

function getQuestion(){

  //fetch questions
  //display question

  console.log(`The subject number is: `+ subjects[randomQuestion]);

}

function timerOn(time){

  // set interval (time/4, quarterLess)
  // when time is over, if bounce is true and bounceDone is false, bouncing.
  //if there is no bounce, show time signs and disable send button.

  function quarterLess(){
  
  // progression of timer changes: each time, a quarter is faded down or changed color.

  }

  console.log(`The time selected is: ` + time + `s`);

}

function getAnswer(){

  // addEventListener to submit button.
  // When submit is pressed, prevent default, disable button and check answer.

  console.log(`getting the answer`);
}

function bouncing(){

    // reset timerOn(time);
    //display bounce title and change active player.


  console.log(`if the time is over and there have been no bounce before, bounce`);
}

function score(){
  console.log(`sum the result to the player's score and actualize DOM`);
  questionNum ++;
}


//---------------------------------------------------

function finish(){                                          // shows the final scores on another over-screen.


  console.log(`displaying finish screen, with final results`);
}