//List of questions, choices, and answere



var quizQuestions = [  

    { 
        questions:      "What's the most effective Poke Ball in the game?",
        choices:        ["Ultra Ball", "Poke Ball", "Great Ball", "Master Ball"],
        correctAnswer:  "Master Ball"
    },
    {
        questions:      "How many Gym Badges must a trainer collect before challenging the Elite Four?",
        choices:        ["6","4","3","8"],
        correctAnswer:   "8"
        

    },
    {
        questions:      "If you need to buy supplies in the Pokemon world, where do you go?",
        choices:        ["Pokemon Center", "Gym", "Poke Store", "Poke Mart"],
        correctAnswer:  "Poke Mart"
        
    },
    {
        questions:      "What type of Pokemon is Mewtwo?",
        choices:        ["Fighting", "Fairy", "Psychic", "Dark"],
        correctAnswer:  "Psychic"
    },
    {
        questions:      "Who is the main character?",
        choices:        ["Goku", "Naruto", "Ash", "Brock"],
        correctAnswer:  "Ash"

    }
];

//List of values
var counter = 8;
var currentQuestion = 0;
var score = 0;
var lost = 0;
var timer;

//creating a function that goes to the next question
function nextQuestion(){
    var isQuestionOver= (quizQuestions.length - 1) === currentQuestion;
    if (isQuestionOver){
        console.log("game is over");
        displayResult();
    }   
    
    else{
        currentQuestion++;
        loadQuestion();
    }
    
}



//Creating a function that prevents timer to keep going down
function timeReset() {
    clearInterval(timer);
    lost++;
    nextQuestion();
}


//Creating a timer for user to choose an answer to each question
function countDown() {
    counter--;
    $("#time").html("Timer: " + counter);

    if (counter === 0) {
        timeReset();
        
        


    }
}


//Display the questions,choices and creating a function to pick the current question and load

function loadQuestion() {
    counter = 8;
    timer = setInterval(countDown, 1000);


    const question = quizQuestions[currentQuestion].questions;
    const choices =  quizQuestions[currentQuestion].choices;
    
    $("#time").html("Time Remaining: " + counter);
   
    //Displaying the question and function that has the choices
    $("#game").html(`
        
        <h4>${question}</h4> 
        ${loadChoices(choices)}
        ${loadRemainingQuestion()}
        


    
    `);
    
}    


function loadChoices(choices) {
    var result = " ";

    // created a loop that will go over the choices till theres no more
    for (var i = 0; i < choices.length; i++) {
    //setting a data answer with every value of choices and also displaying them 
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
    }
    return result;

}

$(document).on("click", ".choice",function() {
    clearInterval(timer);
    var selectedAnswer = $(this).attr("data-answer");
    var correctAnswer = quizQuestions[currentQuestion].correctAnswer;
    if (correctAnswer===selectedAnswer){
        score++;
        nextQuestion();
        console.log("wins");
    }
    else{
        lost++;
        nextQuestion();
        console.log("loss");
    }
    
});;

function displayResult() {
    var result = `
    <p>You get ${score} questions(s) right </p.>
    <p>You missed ${lost} questions(s) right </p.>
    <p>Total questions ${quizQuestions.length} questions(s) right </p.>
    <button class="btn btn-primary" id="reset">Reset Game </button>
    `;
    $("#game").html(result);

};

//reset button after they complete the game
$(document).on("click","#reset", function(){
    counter = 5;
    currentQuestion = 0;
    score = 0;
    lost = 0;
    timer = null;
    loadQuestion();
});

function loadRemainingQuestion() {
    var remainingQuestion = quizQuestions.length - ( currentQuestion + 1);
    var totalQuestion = quizQuestions.length;

    return `Remaining Question: ${remainingQuestion}/${totalQuestion}`;
}


$("#start").click(function() {
        $("#start").remove();
        $("#start").html(counter);
        loadQuestion();

});;
