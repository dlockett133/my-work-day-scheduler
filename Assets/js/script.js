// Returns the date/time for the present day
var today = moment();

// Starting 'hour' of calendar/ Can change to whatever start-time you like
var startTime = "09:00"

// Returns the present hour
var presentHour = Number(today.format('H'));

// Selects 'currentDay' ID Element
var currentDayEl = $("#currentDay");

// Inserts a "LIVE" display of today's date and time in the 'currentDayEl' element 
setInterval(()=> {
    currentDayEl.text(`${moment().format("dddd, MMMM Do YYYY, h:mm:ss A")}`);
},1000)

// Creates a 'div' element with a 'time-block' class attribute
var timeBlockEl = $("<div>").addClass("time-block")

// Appends element to the end of the 'container' class element
timeBlockEl.appendTo(".container")

// The amount of hours you want to schedule for
var hours = 8;

// Creates a time-block(s) equivalent to the value of the 'hours' variable
for (i=0; i < hours+1; i++) {
    var time = moment(startTime, "H:mm").add(i, "h").format("h:mm A")
    //Appends time-block and all its tags and attributes to the DOM
    timeBlockEl.append(`
    <form class="row">
        <p class="hour">
        ${time}
        </p>
        <textarea type="text" class="description" id="${i}" placeholder="Enter Event Details Here"></textarea>
        <button class="saveBtn" type="submit"><ion-icon name="save-outline"></ion-icon></button>
    </form>`)
}

function changeColor() {
    // Selects all of the textarea elements that contain the 'description' class and returns them in an array
    var descriptionEl = $(".description")
    // Changes format of time to be an integer (number data type)
    var militaryTime = Number(moment(startTime, "H:mm").format("h"))

    // Loops through each element and adds the corresponding class, based of the condition
    descriptionEl.each(function(){
        if (militaryTime < presentHour) {
            $(this).addClass("past")
            militaryTime++
        } else if (militaryTime > presentHour){
            $(this).addClass("future")
            militaryTime++
        } else if(militaryTime === presentHour) {
            $(this).addClass("present")
            militaryTime++
        }
    })
}

changeColor();
// Selects all of the elements the 'row' class and returns them in an array
var rowEl = $(".row")

// Loops through each 'rowEL' and adds an event listener for "submit"
rowEl.each(function() {
    $(this).submit(function(event) {
        // Stores the value of the textarea element that was submitted
        var value = $(this).find("textarea").val()
        // Stores/selects the 'id' of the textarea element
        var key = $(this).find("textarea").attr('id')
        // Appends the value submitted of the textarea element into the DOM
        $(this).find("textarea").text(value)
        // Saves the value of the submitted form in to Local Storage
        window.localStorage.setItem(key, value)
        event.preventDefault();
    })
})

// Loops through each 'rowEL' and inserts the values of each key in the Local Storage
rowEl.each(function(){
    // Stores/selects the 'id' of the textarea element
    var key = $(this).find("textarea").attr('id')
    // Retrieves/Grabs each key in the Local Storage
    var value = window.localStorage.getItem(key)
    // Appends the value of each key in to the DOM
    $(this).find("textarea").text(value)
})

