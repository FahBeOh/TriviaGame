


// Variables
var time = 30
var correctAnswers = 0;
var wrongAnswers = 0;

// Countdown timer
function countdown(){
    if(time === -1){
        clearTimeout(timerId);
        $("#content").empty();
        results();
        console.log(correctAnswers);
    } else{
    $("#col-logo").html("Remaining Time: " + time);
    time--;
    }
}

// Submit button maker
function btnmkr(){
    var btnDiv = $("<div class='col col-12 text-center' id='submitBtn'>")
    var btnn = $("<button type='button' class='btn btn-primary btn-lg' id='startButton'>Submit</button>")
    $("#buttonspace").append(btnDiv);
    btnDiv.append(btnn);
}

// Questions and radio buttons
var a1= $("<div class='form-check form-check-inline'> <input class='form-check-input' type='radio' name='question1' value='a'> <label class='form-check-label'> Cheddar </label>");
var a2= $("<div class='form-check form-check-inline'> <input class='form-check-input' type='radio' name='question1' value='b'> <label class='form-check-label'> Gouda </label>");
var a3= $("<div class='form-check form-check-inline'> <input class='form-check-input' type='radio' name='question1' value='c'> <label class='form-check-label'> Swiss </label>");
var a4= $("<div class='form-check form-check-inline'> <input class='form-check-input' type='radio' name='question1' value='d'> <label class='form-check-label'> Provolone </label>");

var b1= $("<div class='form-check form-check-inline'> <input class='form-check-input' type='radio' name='question2' value='c'> <label class='form-check-label'> Beef Jerky </label>");
var b2= $("<div class='form-check form-check-inline'> <input class='form-check-input' type='radio' name='question2' value='b'> <label class='form-check-label'> Cocoa Nibs </label>");
var b3= $("<div class='form-check form-check-inline'> <input class='form-check-input' type='radio' name='question2' value='a'> <label class='form-check-label'> Yogurt </label>");
var b4= $("<div class='form-check form-check-inline'> <input class='form-check-input' type='radio' name='question2' value='d'> <label class='form-check-label'> Pie </label>");

var c1= $("<div class='form-check form-check-inline'> <input class='form-check-input' type='radio' name='question3' value='b'> <label class='form-check-label'> Nicolas </label>");
var c2= $("<div class='form-check form-check-inline'> <input class='form-check-input' type='radio' name='question3' value='a'> <label class='form-check-label'> Nikolaj </label>");
var c3= $("<div class='form-check form-check-inline'> <input class='form-check-input' type='radio' name='question3' value='c'> <label class='form-check-label'> Nick </label>");
var c4= $("<div class='form-check form-check-inline'> <input class='form-check-input' type='radio' name='question3' value='d'> <label class='form-check-label'> Nancy </label>");

var d1= $("<div class='form-check form-check-inline'> <input class='form-check-input' type='radio' name='question4' value='d'> <label class='form-check-label'> It's fireproof! </label>");
var d2= $("<div class='form-check form-check-inline'> <input class='form-check-input' type='radio' name='question4' value='b'> <label class='form-check-label'> Magic </label>");
var d3= $("<div class='form-check form-check-inline'> <input class='form-check-input' type='radio' name='question4' value='c'> <label class='form-check-label'> Nobody Knows </label>");
var d4= $("<div class='form-check form-check-inline'> <input class='form-check-input' type='radio' name='question4' value='a'> <label class='form-check-label'> It never fully dries </label>");


// Functions for questions and radio button answers
function q1(){
    a1;
    a2;
    a3;
    a4;
    $("#buttonspace").append("<h4>What is the name of Captain Holt's dog?</h4>");
    $("#buttonspace").append(a1);
    $("#buttonspace").append(a2);
    $("#buttonspace").append(a3);
    $("#buttonspace").append(a4);
}

function q2(){
    b1;
    b2;
    b3;
    b4;
    $("#buttonspace").append("<h4>What is Terry's favorite snack?</h4>");
    $("#buttonspace").append(b1);
    $("#buttonspace").append(b2);
    $("#buttonspace").append(b3);
    $("#buttonspace").append(b4);
}

function q3(){
    c1;
    c2;
    c3;
    c4;
    $("#buttonspace").append("<h4>What is the name of Charles son?</h4>");
    $("#buttonspace").append(c1);
    $("#buttonspace").append(c2);
    $("#buttonspace").append(c3);
    $("#buttonspace").append(c4);
}

function q4(){
    d1;
    d2;
    d3;
    d4;
    $("#buttonspace").append("<h4>Why won't Jake's towel catch on fire?</h4>");
    $("#buttonspace").append(d1);
    $("#buttonspace").append(d2);
    $("#buttonspace").append(d3);
    $("#buttonspace").append(d4);
}

// function for final page
function results(){
    var correctDiv = $("<div class='col col-12 text-center' id='correct'>");
    var wrongDiv = $("<div class='col col-12 text-center' id='wrong'>");
    var picDiv = $("<div class='col col-12 text-center' id='pic'>");
    correctDiv.append('Correct Asnwers: ' + correctAnswers);
    wrongDiv.append('Wrong Answers: ' + wrongAnswers);
    picDiv.html("<img src='assets/images/brooklyn-nine-nine-fyc-event-arrivals.jpg' id='terry' class='img-fluid' alt='terry crews picture'>");
    $("#content").append(correctDiv, wrongDiv, picDiv);
}



// Game setup
$("#startButton").click(function(){
    $("#buttonspace").empty();
    countdown();
    q1();
    q2();
    q3();
    q4();
    btnmkr();
    $('.form-check input').on('click', function() {
        if($(this).val() === 'a'){
            correctAnswers++
            console.log(correctAnswers);
        } else{
            wrongAnswers++
            console.log(wrongAnswers);
        }
     });
    
    timerId = setInterval(countdown, 1000);
    var submit = $("#submitBtn").click(function(){
        clearTimeout(timerId);
        $("#content").empty();
        results();
        console.log(correctAnswers);
    })
})
