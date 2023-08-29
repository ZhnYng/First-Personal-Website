// Countdown to Year 3 internship
function updateCountdown(){
    let internshipDate = new Date('September 12 2024'); // Date based on 2022 expected internship date
    let currentDate = new Date();
    
    var days = (internshipDate.getTime() - currentDate.getTime())/(1000 * 3600 * 24); // getTime returns the number of miliseconds, so multiply by 1000 to get seconds, then 3600 for hours then 24 for days
    var hours = (days - Math.floor(days)) * 24; // Remainder of days is converted to hrs
    var mins = (hours - Math.floor(hours)) * 60; // Remainder of hours in converted to mins
    var secs = (mins - Math.floor(mins)) * 60; // Remainder of mins is converted to secs
    
    document.getElementById('num-days').innerText = Math.floor(days); // Round down
    document.getElementById('num-hours').innerText = Math.floor(hours);
    document.getElementById('num-mins').innerText = Math.floor(mins);
    document.getElementById('num-secs').innerText = Math.floor(secs);
}

setInterval(updateCountdown, 1000) // Update counter per second