// Returns the date/time for the present day
var today = moment();

// Starting 'hour' of calendar/ Can change to whatever start-time you like
var startTime = "09:00"

// Returns the present hour
var presentHour = Number(today.format('H'));

// Selects 'currentDay' ID Element
var currentDayEl = $("#currentDay");
// Inserts today's date in currentDayEl element in (Monday, January 1st) format 
currentDayEl.text(`${today.format("dddd, MMMM Do")}`);

// Creates a 'div' element with a 'time-block' class attribute
var timeBlockEl = $("<div>").addClass("time-block")

// Appends element to the end of the 'container' class element
timeBlockEl.appendTo(".container")

// The amount of hours you want to schedule for
var hours = 8;

// Creates a time-block(s) equivalent to the value of the 'hours' variable
for (i=0; i < hours+1; i++) {
    var time = moment(startTime, "H:mm").add(i, "h").format("h:mm A")
    var militaryTime = Number(moment(startTime, "H:mm").add(i, "h").format("H"))
    //Appends time-block and all its tags and attributes to the DOM
    timeBlockEl.append(`
    <form class="row">
        <p class="hour">
        ${time}
        </p>
        <textarea class="description" id="${i}"></textarea>
        <button class="saveBtn" type="submit">Save</button>
    </form>`)

    // Selects all of the textarea elements that contain the 'description' class and returns them in an array
    var descriptionEl = $(".description")
    
    // Loops through each element and adds the corresponding class, based of the condition
    descriptionEl.each(function(){
        if (militaryTime < presentHour) {
            $(this).addClass("past")
        } else if (militaryTime > presentHour){
            $(this).addClass("future")
        } else if(militaryTime === presentHour) {
            $(this).addClass("present")
        }
    })
}

 var rowEl = $(".row")
    rowEl.each(function() {
        $(this).submit(function(event) {
            var value = $(this).find("textarea").val()
            var key = $(this).find("textarea").attr('id')
            $(this).find("textarea").text(value)
            window.localStorage.setItem(key, value)
            event.preventDefault();
        })
    })

    rowEl.each(function(){
        var key = $(this).find("textarea").attr('id')
        var value = window.localStorage.getItem(key)
        $(this).find("textarea").text(value)
    })
// function updateEvent() {
// var 
// }
// Use localStorage() function to save events
