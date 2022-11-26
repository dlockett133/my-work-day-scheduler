var today = moment(); // Returns the date/time for the present day

// Selects 'currentDay' ID Element
var currentDayEl = $("#currentDay");

// Inserts today's date in currentDayEl element in (Monday, January 1st) format 
currentDayEl.text(`${today.format("dddd, MMMM Do")}`);