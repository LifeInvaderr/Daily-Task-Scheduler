$(document).ready(function () {
  // Current day is displayed at the top
  var time = moment().format("dddd MMM Do, h:mm a");
  $("#currentDay").text(time);

  // Save button to local storage
  $(".saveBtn").on("click", function () {
    var hour = $(this).parent().attr("id");
    var content = $(this).siblings("textarea").val();
    localStorage.setItem(hour, JSON.stringify(content));
  });

  // Localstorage keys
  const timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  timeArray.forEach((time) => {
    $(`#${time}`)
      .children("textarea")
      .val(JSON.parse(localStorage.getItem(`${time}`)));

    if (moment().isBefore(moment({ hour: time, minute: 0 }))) {
      $(`#${time}`).children("textarea").addClass("bg-success");
      $(`#${time}`).children("textarea").removeClass("bg-danger");
      $(`#${time}`).children("textarea").removeClass("bg-secondary");
    }
    if (moment().isAfter(moment({ hour: time, minute: 0 }))) {
      $(`#${time}`).children("textarea").addClass("bg-danger");
      $(`#${time}`).children("textarea").removeClass("bg-success");
      $(`#${time}`).children("textarea").removeClass("bg-secondary");
    }
    if (moment().isAfter(moment({ hour: time + 1, minute: 0 }))) {
      $(`#${time}`).children("textarea").addClass("bg-secondary");
      $(`#${time}`).children("textarea").removeClass("bg-danger");
      $(`#${time}`).children("textarea").removeClass("bg-success");
    }
  });
});