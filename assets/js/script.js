$(document).ready(function(){

// Current day is displayed at the top 
var time = moment().format('dddd MMM Do');
$("#currentDay").text(time);


// Color coded time blocks




// Save button
$(".saveBtn").on("click", function(){
    // console.log($(this).parent().attr("id"))
    var hour = $(this).parent().attr("id")
    var content = $(this).siblings("textarea").val()
    // console.log($(this).siblings("textarea").val())

    localStorage.setItem(hour, JSON.stringify(content))
})

$("#9").children("textarea").val(JSON.parse(localStorage.getItem("9")))
$("#10").children("textarea").val(JSON.parse(localStorage.getItem("10")))
$("#11").children("textarea").val(JSON.parse(localStorage.getItem("11")))
$("#12").children("textarea").val(JSON.parse(localStorage.getItem("12")))
$("#1").children("textarea").val(JSON.parse(localStorage.getItem("1")))
$("#2").children("textarea").val(JSON.parse(localStorage.getItem("2")))
$("#3").children("textarea").val(JSON.parse(localStorage.getItem("3")))
$("#4").children("textarea").val(JSON.parse(localStorage.getItem("4")))
$("#5").children("textarea").val(JSON.parse(localStorage.getItem("5")))

})

