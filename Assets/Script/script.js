var timeDisplayEl = $("#currentDay")


function displayTime() {
    var rightNow = moment().format("MMM DD, YYYY");
    timeDisplayEl.text(rightNow);
};
displayTime();

function colorSwap() {
    // grabbing the current hours from moment.js
    var presentTime = moment().hours();
    // loop through time blocks to compare with presentTime variable
    $('.time-block').each(function() {
        var hourBlock = parseInt($(this).attr('id'))

        // if statement to compare present time in hour block
        if(presentTime > hourBlock) {
            $(this).addClass('past')
        } else if(presentTime === hourBlock) {
            $(this).removeClass('past')
            $(this).addClass('present')
        }else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')

        }
    })
}

colorSwap();

// create our document ready function to make sure nothing runs before we load the page
$(document).ready(function () {
    $('.saveBtn').on('click', saveText)
})

// function to save entered text to local storage
function saveText() {
    // variable to grab entered text
    var plan = $(this).siblings('.description').val();
    // variable to store which block text was entered into
    var time = $(this).parent().attr('id');

    localStorage.setItem(plan, time);
}
