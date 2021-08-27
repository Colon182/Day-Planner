var timeDisplayEl = $("#currentDay")
var nineAM = $("#hour-9");
var tenAM = $("#hour-10");
var elevenAM = $("#hour-11");
var twelvePM = $("#hour-12");
var onePM = $("#hour-1");
var twoPM = $("#hour-2");
var threePM = $("#hour-3");
var fourPM = $("#hour-4");
var fivePM = $("#hour-5");


function displayTime() {
    var rightNow = moment().format("MMM DD, YYYY");
    timeDisplayEl.text(rightNow);
};
displayTime();


