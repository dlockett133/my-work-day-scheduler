var today = moment(); // Returns the date/time for the present day

// Selects 'currentDay' ID Element
var currentDayEl = $("#currentDay");
// Inserts today's date in currentDayEl element in (Monday, January 1st) format 
currentDayEl.text(`${today.format("dddd, MMMM Do")}`);

// Creates a 'div' element with a 'time-block' class attribute
var timeBlockEl = $("<div>").addClass("time-block")

// Appends element to the end of the 'container' class element
timeBlockEl.appendTo(".container")

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