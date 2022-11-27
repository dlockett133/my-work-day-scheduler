// Returns the date/time for the present day
var today = moment();

var startTime = "09:00" // Start of work day 

// Returns the present hour
var todayHour = today.format('H');

// Selects 'currentDay' ID Element
var currentDayEl = $("#currentDay");
// Inserts today's date in currentDayEl element in (Monday, January 1st) format 
currentDayEl.text(`${today.format("dddd, MMMM Do")}`);

// Creates a 'div' element with a 'time-block' class attribute
var timeBlockEl = $("<div>").addClass("time-block")

// Appends element to the end of the 'container' class element
timeBlockEl.appendTo(".container")

var hours = 8;

for (i=0; i < hours+1; i++) {
    var time = moment(startTime, "H:mm").add(i, "h").format("h:mm A")
    var militaryTime = moment(startTime, "H:mm").add(i, "h").format("H")
    timeBlockEl.append(`
    <form class="row">
        <p class="hour">
        ${time}
        </p>
        <textarea class="description"></textarea>
        <button class="saveBtn" type="submit">Save</button>
    </form>`)

    var descriptionEl = $(".description")
    descriptionEl.each(function(){

        if (militaryTime < todayHour) {
            $(this).addClass("past")
        } else if (militaryTime > todayHour){
            $(this).addClass("future")
        } else {
            $(this).addClass("present")
        }
    })
}
