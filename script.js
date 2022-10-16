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

//arrays for ids on timeblocks
timeArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
varTimeId = ["#nineAm", "#tenAm", "#elevenAm", "#twelvePm", "#onePm", "#twoPm", "#threePm", "#fourPm", "#fivePm"];
varLS = [nineAm, tenAm, elevenAm, twelvePm, onePm,  twoPm, threePm, fourPm, fivePm];
arrayPos = 0;

//save button for local storage
$(".saveBtn").on("click", function (event) {
  var schedulerItem = event.target.parentElement.previousElementSibling.children[0].value;
  localStorage.setItem(event.target.attributes[0].value, schedulerItem);
});

//detemines which block the text input saves to using ids
$(document).ready(function () {
  for (let i = 0; i < timeArray.length; i++) {
      if (localStorage[timeArray[arrayPos]] !== null && localStorage[timeArray[arrayPos]] !== undefined) {
          varLS[arrayPos] = $("<p>" + localStorage[timeArray[arrayPos]] + "</p>");
          $(varTimeId[arrayPos]).append((varLS[arrayPos])[0].innerText);
          arrayPos++;
        } else {
          ("");
          arrayPos++;
        }        
    }
});