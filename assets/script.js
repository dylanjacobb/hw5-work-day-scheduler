var timeBlock = document.querySelector('.time-block')
var currentHour = new Date().getHours();
var input = document.querySelector('col-sm-9')

console.log(currentHour);

// added this because I couldn't figure out for the life of me how to add a text input field directly to the div block 
$('.col-sm-9').append('<input type="text" width= "50px"/>');


// created a time function that allows the colors of the blocls to change with the passing hours
function addTheTime() {

    if (currentHour > 9) {
        $('.middle-9').addClass('past');
    } else if (currentHour === 9) {
        $('.middle-9').addClass('present');
    } else if (currentHour < 9) {
        $('.middle-9').addClass('future');
        // had to add a second 'past' here because it keept looping through so in every scenario the past would still be considered the future. I couldn't figure out how to change that so I added that temporary else statement in its place
    } else (currentHour > 17); {
        $('.middle-9').addClass('past')
    }

    if (currentHour > 10) {
        $('.middle-10').addClass('past');
    } else if (currentHour === 10) {
        $('.middle-10').addClass('present');
    } else if (currentHour < 10) {
        $('.middle-10').addClass('future');
    } else (currentHour > 17); {
        $('.middle-10').addClass('past')
    }

    if (currentHour > 11) {
        $('.middle-11').addClass('past');
    } else if (currentHour === 11) {
        $('.middle-11').addClass('present');
    } else if (currentHour < 11) {
        $('.middle-11').addClass('future');
    } else (currentHour > 17); {
        $('.middle-11').addClass('past')
    }

    if (currentHour > 12) {
        $('.middle-12').addClass('past');
    } else if (currentHour === 12) {
        $('.middle-12').addClass('present');
    } else if (currentHour < 12) {
        $('.middle-12').addClass('future');
    } else (currentHour > 17); {
        $('.middle-12').addClass('past')
    }

    if (currentHour > 13) {
        $('.middle-13').addClass('past');
    } else if (currentHour === 13) {
        $('.middle-13').addClass('present');
    } else if (currentHour < 13) {
        $('.middle-13').addClass('future');
    } else (currentHour > 17); {
        $('.middle-13').addClass('past')
    }

    if (currentHour > 14) {
        $('.middle-14').addClass('past');
    } else if (currentHour === 14) {
        $('.middle-14').addClass('present');
    } else if (currentHour < 14) {
        $('.middle-14').addClass('future');
    } else (currentHour > 17); {
        $('.middle-14').addClass('past')
    }

    if (currentHour > 15) {
        $('.middle-15').addClass('past');
    } else if (currentHour === 15) {
        $('.middle-15').addClass('present');
    } else if (currentHour < 15) {
        $('.middle-15').addClass('future');
    } else (currentHour > 17); {
        $('.middle-15').addClass('past')
    }

    if (currentHour > 16) {
        $('.middle-16').addClass('past');
    } else if (currentHour === 16) {
        $('.middle-16').addClass('present');
    } else if (currentHour < 16) {
        $('.middle-16').addClass('future');
    } else (currentHour > 17); {
        $('.middle-16').addClass('past')
    }

    if (currentHour > 17) {
        $('.middle-17').addClass('past');
    } else if (currentHour === 17) {
        $('.middle-17').addClass('present');
    } else if (currentHour < 17) {
        $('.middle-17').addClass('future');
    } else (currentHour > 17); {
        $('.middle-17').addClass('past')
    }

}
addTheTime();




// here I created a button that when clicked will save the typed info the local storage (didn't get it finished)
var saveButton = document.querySelector(".button");

$('button').on('click', function (event) {
    event.preventDefault();
})


