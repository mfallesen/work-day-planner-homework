let now = moment();
let container = $(".container")
const workHours = ["9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm",];

console.log(now.format());
console.log(workHours);

console.log(now.format("h A"));
function printWorkDay(hour) {

    for (var i = 0; i < hour.length; i++) {

        let hourRow = $("<div></div>");
        let workHour = $("<div></div>");
        let tasks = $("<textarea>");
        let save = $("<button>")

        hourRow.attr("class", "row time-block");
        workHour.attr("class", "col-md-2 hour");
        workHour.text(hour[i]);
        tasks.attr("class", "col-md-8 past");
        save.attr("class", "col-md-2 saveBtn");

        container.append(hourRow);
        hourRow.append(workHour, tasks, save);
    }
    // IF statement for the tense changes
    
}

printWorkDay(workHours);

function currentDay() {
    $("#currentDay").text(now.format("LLLL"));
}

currentDay();


// TODO: function pastCheck() {
//     if (workHour.text() >= )
// }

// TODO: How can I compare the hours of my rows, to the current time? (Use moment.js get the current time and compare to the time that is being assigned to the row)

// TODO:  give the elements the classes that they need e.g using an if statment we can check using monet.js to see if the hour that we're looping ove is past the current hour if so give the text area the class of past
ƒ
// TODO: Create click event listener for my buttons 

// TODO:  Grab the value of the text are and save it to a var (I nedd to be able to save the text from the text area that is in the same row as my button)

// TODO: using localStorage.setItem save the text to local storage

// TODO: retrieve the data from local storage using localStorage.getItem and show them back on the text area that they belong to (How can i know what text from local storage goes to what text area?)

// localStorage.setItem("test", "My first note" )
// localStorage.setItem("test1", "My second note" )


// var text1FromLocalStorage= localStorage.getItem("test")
// $(".first").text(text1FromLocalStorage)

// var text2FromLocalStorage= localStorage.getItem("test1")

// $(".second").text(text2FromLocalStorage)
