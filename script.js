//current time at top of scheduler
var currentTime = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentTime);

//variables for current time and timeblock to change color depending on time
var timeBlock = $(".hour");
var timeNow = parseInt(moment().format("H"));

//checks each time block to determine if it is in the past, present or future
$.each(timeBlock, function () {
  var timeId = parseInt($(this).attr("id"));
  if (timeId === timeNow) {
    $(this).next().addClass("present");
  } else if (timeId < timeNow) {
    $(this).next().addClass("past");
  } else if (timeId > timeNow) {
    $(this).next().addClass("future");
  }
});