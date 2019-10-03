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
        questions:      "What's the name of this special Pokemon Game?",
        choices:        ["Pokemon Electric", "Pokemon Yellow", "Pokemon Pikachu Edition", "Pokemon Friends"],
        correctAnswer:  "Pokemon yellow"
    },
    {
        questions:      "Who is this guy",
        choices:        ["Goku", "Naruto", "Ash", "Brock"],
        correctAnswer:  "Ash"

    }
];

//List of values
var counter = 30;
var currentQuestion = 0;
var score = 0;
var lost = 0;
var timer;

//Display the questions and choices

//creating a function to pick the current question and load

function loadQuestion() {
    const question = quizQuestions[currentQuestion].questions;
    const choices =  quizQuestions[currentQuestion].choices;
    
    $("#time").html("Time Remaining: " + counter);
    $("#game").html(`
        
        <h4>${question}</h4> 
        ${loadChoices(choices)}
    
    `);
    
}    


function loadChoices(choices) {
    var result = " ";

    for (var i = 0; i < choices.length; i++); {
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
    }
    return result;

}

loadQuestion();