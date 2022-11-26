// Returns the date/time for the present day
var today = moment();

var start = "09:00" // Start of work day 

// Formats string to 9:00 AM
var startTime = moment(start, "H:mm").add(0, "h").format("h:mm A")

// Selects 'currentDay' ID Element
var currentDayEl = $("#currentDay");
// Inserts today's date in currentDayEl element in (Monday, January 1st) format 
currentDayEl.text(`${today.format("dddd, MMMM Do")}`);

// Creates a 'div' element with a 'time-block' class attribute
var timeBlockEl = $("<div>").addClass("time-block")

// Appends element to the end of the 'container' class element
timeBlockEl.appendTo(".container")

var hours = 8;

for (i=0; i<hours; i++) {
    timeBlockEl.append(`
    <form class="row">
        <p class="hour"></p>
        <textarea class="description"></textarea>
        <button class="saveBtn" type="submit">Save</button>
  </form>`)
}
/* <div class="time-block">
        <form class="row">
            <p class="hour">9am</p>
            <textarea class="description present" style="
    flex: 1;
"></textarea>
            <button class="saveBtn" type="submit" style="
">Save the date</button>
        </form>
    </div>
    </div> */