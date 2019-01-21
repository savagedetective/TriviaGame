/* This is just here so the file commits */

$(document).ready(function () {

/* holds correct, incorrect, unanswered */

var correct = 0;
var incorrect = 0;
var unanswered = 0;

/* holds trivia questions */

var triviaQuestions = [
    {
        question: "The ancient Egyptian symbol Ouroboros depicts a serpent eating what?",
        options: ["An Apple", "It's own tail", "A Small Child", "The Moon"],
        answer: "It's own tail"

    },

    {
        question: "A blunderbuss is an obsolete type of what?",
        options: ["Firearm", "Sword", "Web Game", "Shark"],
        answer: "Firearm"
    },

    {
        question: "Who was the first U.S. president that was born a citizen of the United States?",
        options: ["George Washington", "George Washington Carver", "Martin Van Buren", "Frankenstein's Monster"],
        answer: "Martin Van Buren"
    },

    {
        question: "A standard 7-inch vinyl single is usually played at what rpm?",
        options: ["7 rpm", "12 rpm", "33 rpm", "45 rpm"],
        answer: "45 rpm"
    },

    {
        question: "A Shakespearean sonnet consists of how many lines?",
        options: ["Seven", "Twelve", "Thirty Three", "Fourteen"],
        answer: "Fourteen"
    },

    {
        question: "Olympia is the capital city of which U.S. state?",
        options: ["Arizona", "South Carolina", "Washington", "Alabama"],
        answer: "Washington"
    },

    {
        question: "Which bird has eyes that are larger than its brain?",
        options: ["Ostrich", "Penguin", "Finch", "Big Bird"],
        answer: "Ostrich"
    },

    {
        question: "How many electrons does a hydrogen atom have?",
        options: ["One", "Two", "Three", "Six"],
        answer: "One"
    }

];

/* dynamically adds start button */


$(".game-content").empty();

var $start = $("<button>").text("START").addClass("btn btn-default").attr("id","start-game");
    $(".game-content").append($start);



/* starts the game on button press*/

$start.click(function() {

    startsTheGame();

});

                                                                /* HERE IS THE MAIN GAME LOGIC */

function startsTheGame() {
    /* clears main content */
    $(".game-content").empty();

    /*holds variables */
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    var gameTime = 60; //seconds

    /* displays timer */
    var $counterText = $("<p>").attr("id", "counter-text");
    $counterText.text("You have " + gameTime + " seconds left.");
    $(".game-content").append($counterText);

    /*starts timer and counts down */
    var counter = setInterval( function() {
        if (gameTime > 0) {
            gameTime--;
            console.log(gameTime);
            $counterText.text("You have " + gameTime + " seconds left.");
        }

        else {
            clearInterval(counter);
            endGame();
        }
        
    }, 1000);

    /*Generates questions and answers, adds them to DOM*/

    for (var qNum = 0; qNum < triviaQuestions.length; qNum++) {
        $(".game-content").append("<p>" + triviaQuestions[qNum].question + "</p>");

        for (var aNum = 0; aNum < triviaQuestions[qNum].options.length; aNum++) {
            $(".game-content").append('<input type="radio" class = "radio-button" id = "position' + qNum + aNum + '" name="question' + qNum + '" value="' + triviaQuestions[qNum].options[aNum] + '">');
            $(".game-content").append('<label for = "position' + qNum + aNum + '" class = "radio-label">' + triviaQuestions[qNum].options[aNum] + '</label>');
        }
    }
    /* Generates Done button */

    var $Done = $("<button>").text("DONE?").addClass("btn btn-default").attr("id", "done-with-game")
    $(".game-content").append($Done);

    $Done.click(function() {
        clearInterval(counter);
        endGame();

    });

    }

/* Timer ends, calculates and displays final score */

function endGame() {

    for (var qNum = 0; qNum < triviaQuestions.length; qNum++) {
        if ($('input[name="question' + qNum + '"]:checked').val() === triviaQuestions[qNum].answer) {
            correct++;
        }

        else if (!$('input[name="question' + qNum + '"]:checked').val()) {
            unanswered++;
        }

        else {
            incorrect++;
        }
    }

    $(".game-content").empty();
    
    var $endGameText = $("<p>");
    $(".game-content").append($endGameText);
    $endGameText.append("<br/>Answers correct: " + correct).append("<br/>Answers incorrect: " + incorrect).append("<br/>Questions unanswered: " + unanswered);

    var $tryAgain = $("<button>").text("TRY AGAIN?").addClass("btn btn-default").attr("id", "start-game-again");
    $(".game-content").append($tryAgain);

/* Restarts the game after END screen */

    $tryAgain.click(function() {

    startsTheGame();

        });

}

/* the very last bracket. Don't lose track of it */
});