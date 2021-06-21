// set event listener for clicking on h1
$("h1").click(function(){
    $("h1").css("color", "purple");
})

// set event listener for clicking on button
$("button").click(function(){ // no need for a for-loop using jQuery
    $("h1").css("color", "purple");
})

// set event listener for keystroke on page
$(document).keypress(function(event){
    $("h1").text(event.key);
})

// set event listener for anything (Most generic, mouse over in this case)
$("h1").on("mouseover", function(){
    $("h1").css("color", "green");
})