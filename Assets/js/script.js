// Returns the date/time for the present day
var today = moment();

var startTime = "09:00" // Start of work day 


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
    timeBlockEl.append(`
    <form class="row">
        <p class="hour">
        ${moment(startTime, "H:mm").add(i, "h").format("h:mm A")}
        </p>
        <textarea class="description"></textarea>
        <button class="saveBtn" type="submit">Save</button>
    </form>`)
}
