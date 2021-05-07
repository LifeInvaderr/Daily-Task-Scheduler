$(document).ready(function () {

    // Current day is displayed at the top 
    var time = moment().format("dddd MMM Do, h:mm a");
    $("#currentDay").text(time);


    // This is to make the function register the time blocks as soon as page is loaded
    window.onload = function() {
        checkTime();
      };

    // This is set to go through the function every 5 minutes, in case if someone wants to leave this tab open
    setInterval(function () {
        checkTime()
    }, 1000 * 60 * 5);
    // One second multiplied by 60 to make a minute then last number is to set timer to amount of mins. Just for ease of changing code.

    function checkTime() {
        console.log("bruh")


        // Color coded time blocks
        // 9am
        if (moment().isBefore(moment({ hour: 9, minute: 0 }))) {
            $("#9").children("textarea").addClass("bg-success")
            $("#9").children("textarea").removeClass("bg-danger")
            $("#9").children("textarea").removeClass("bg-secondary")
        };
        if (moment().isAfter(moment({ hour: 9, minute: 0 }))) {
            $("#9").children("textarea").addClass("bg-danger")
            $("#9").children("textarea").removeClass("bg-success")
            $("#9").children("textarea").removeClass("bg-secondary")
        };
        if (moment().isAfter(moment({ hour: 10, minute: 0 }))) {
            $("#9").children("textarea").addClass("bg-secondary")
            $("#9").children("textarea").removeClass("bg-danger")
            $("#9").children("textarea").removeClass("bg-success")
        };

        // 10am
        if (moment().isBefore(moment({ hour: 10, minute: 0 }))) {
            $("#10").children("textarea").addClass("bg-success")
            $("#10").children("textarea").removeClass("bg-danger")
            $("#10").children("textarea").removeClass("bg-secondary")
        };
        if (moment().isAfter(moment({ hour: 10, minute: 0 }))) {
            $("#10").children("textarea").addClass("bg-danger")
            $("#10").children("textarea").removeClass("bg-success")
            $("#10").children("textarea").removeClass("bg-secondary")
        };
        if (moment().isAfter(moment({ hour: 11, minute: 0 }))) {
            $("#10").children("textarea").addClass("bg-secondary")
            $("#10").children("textarea").removeClass("bg-danger")
            $("#10").children("textarea").removeClass("bg-success")
        };

        // 11am
        if (moment().isBefore(moment({ hour: 11, minute: 0 }))) {
            $("#11").children("textarea").addClass("bg-success")
            $("#11").children("textarea").removeClass("bg-danger")
            $("#11").children("textarea").removeClass("bg-secondary")
        };
        if (moment().isAfter(moment({ hour: 11, minute: 0 }))) {
            $("#11").children("textarea").addClass("bg-danger")
            $("#11").children("textarea").removeClass("bg-success")
            $("#11").children("textarea").removeClass("bg-secondary")
        };
        if (moment().isAfter(moment({ hour: 12, minute: 0 }))) {
            $("#11").children("textarea").addClass("bg-secondary")
            $("#11").children("textarea").removeClass("bg-danger")
            $("#11").children("textarea").removeClass("bg-success")
        };

        // 12pm
        if (moment().isBefore(moment({ hour: 12, minute: 0 }))) {
            $("#12").children("textarea").addClass("bg-success")
            $("#12").children("textarea").removeClass("bg-danger")
            $("#12").children("textarea").removeClass("bg-secondary")
        };
        if (moment().isAfter(moment({ hour: 12, minute: 0 }))) {
            $("#12").children("textarea").addClass("bg-danger")
            $("#12").children("textarea").removeClass("bg-success")
            $("#12").children("textarea").removeClass("bg-secondary")
        };
        if (moment().isAfter(moment({ hour: 13, minute: 0 }))) {
            $("#12").children("textarea").addClass("bg-secondary")
            $("#12").children("textarea").removeClass("bg-danger")
            $("#12").children("textarea").removeClass("bg-success")
        };

        // 1pm
        if (moment().isBefore(moment({ hour: 13, minute: 0 }))) {
            $("#1").children("textarea").addClass("bg-success")
            $("#1").children("textarea").removeClass("bg-danger")
            $("#1").children("textarea").removeClass("bg-secondary")
        };
        if (moment().isAfter(moment({ hour: 13, minute: 0 }))) {
            $("#1").children("textarea").addClass("bg-danger")
            $("#1").children("textarea").removeClass("bg-success")
            $("#1").children("textarea").removeClass("bg-secondary")
        };
        if (moment().isAfter(moment({ hour: 14, minute: 0 }))) {
            $("#1").children("textarea").addClass("bg-secondary")
            $("#1").children("textarea").removeClass("bg-danger")
            $("#1").children("textarea").removeClass("bg-success")
        };

        // 2pm
        if (moment().isBefore(moment({ hour: 14, minute: 0 }))) {
            $("#2").children("textarea").addClass("bg-success")
            $("#2").children("textarea").removeClass("bg-danger")
            $("#2").children("textarea").removeClass("bg-secondary")
        };
        if (moment().isAfter(moment({ hour: 14, minute: 0 }))) {
            $("#2").children("textarea").addClass("bg-danger")
            $("#2").children("textarea").removeClass("bg-success")
            $("#2").children("textarea").removeClass("bg-secondary")
        };
        if (moment().isAfter(moment({ hour: 15, minute: 0 }))) {
            $("#2").children("textarea").addClass("bg-secondary")
            $("#2").children("textarea").removeClass("bg-danger")
            $("#2").children("textarea").removeClass("bg-success")
        };

        // 3pm
        if (moment().isBefore(moment({ hour: 15, minute: 0 }))) {
            $("#3").children("textarea").addClass("bg-success")
            $("#3").children("textarea").removeClass("bg-danger")
            $("#3").children("textarea").removeClass("bg-secondary")
        };
        if (moment().isAfter(moment({ hour: 15, minute: 0 }))) {
            $("#3").children("textarea").addClass("bg-danger")
            $("#3").children("textarea").removeClass("bg-success")
            $("#3").children("textarea").removeClass("bg-secondary")
        };
        if (moment().isAfter(moment({ hour: 16, minute: 0 }))) {
            $("#3").children("textarea").addClass("bg-secondary")
            $("#3").children("textarea").removeClass("bg-danger")
            $("#3").children("textarea").removeClass("bg-success")
        };

        // 4pm
        if (moment().isBefore(moment({ hour: 17, minute: 0 }))) {
            $("#4").children("textarea").addClass("bg-success")
            $("#4").children("textarea").removeClass("bg-danger")
            $("#4").children("textarea").removeClass("bg-secondary")
        };
        if (moment().isAfter(moment({ hour: 17, minute: 0 }))) {
            $("#4").children("textarea").addClass("bg-danger")
            $("#4").children("textarea").removeClass("bg-success")
            $("#4").children("textarea").removeClass("bg-secondary")
        };
        if (moment().isAfter(moment({ hour: 18, minute: 0 }))) {
            $("#4").children("textarea").addClass("bg-secondary")
            $("#4").children("textarea").removeClass("bg-danger")
            $("#4").children("textarea").removeClass("bg-success")
        };

        // 5pm
        if (moment().isBefore(moment({ hour: 18, minute: 0 }))) {
            $("#5").children("textarea").addClass("bg-success")
            $("#5").children("textarea").removeClass("bg-danger")
            $("#5").children("textarea").removeClass("bg-secondary")
        };
        if (moment().isAfter(moment({ hour: 18, minute: 0 }))) {
            $("#5").children("textarea").addClass("bg-danger")
            $("#5").children("textarea").removeClass("bg-success")
            $("#5").children("textarea").removeClass("bg-secondary")
        };
        if (moment().isAfter(moment({ hour: 19, minute: 0 }))) {
            $("#5").children("textarea").addClass("bg-secondary")
            $("#5").children("textarea").removeClass("bg-danger")
            $("#5").children("textarea").removeClass("bg-success")
        };
    };


    // Save button to local storage
    $(".saveBtn").on("click", function () {
        // console.log($(this).parent().attr("id"))
        var hour = $(this).parent().attr("id")
        var content = $(this).siblings("textarea").val()
        // console.log($(this).siblings("textarea").val())

        localStorage.setItem(hour, JSON.stringify(content))
    })

    // Localstorage keys
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

