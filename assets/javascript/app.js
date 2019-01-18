/* This is just here so the file commits */

$(document).ready(function () {

/* holds correct, incorrect, unanswered */

var correct = 0;
var incorrect = 0;
var unanswered = 0; 

/* dynamically adds start button */

startButton();

function startButton() {

    var start = $("<button>").text("START").addClass("btn btn-default").attr("id","start-game");
    $(".game-content").append(start);

}

/*starts the game */

$("#start-game").click(function() {

    $(".game-content").empty();
    

});


function resetCommand() {

incorrect = 0;
unanswered = 0;

}

/* the very last bracket. Don't lose track of it */
});