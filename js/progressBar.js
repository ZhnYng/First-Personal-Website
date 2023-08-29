// Progress Bar function
window.onload = function() {progress()}; // Call on load
window.onscroll = function() {progress()}; // Call on scroll

function progress() {
    var winScroll = document.documentElement.scrollTop; // number of pixels scrolled from the top of html element
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Height of whole page
    var scrolled = (winScroll / height) * 100; // percentage of winScroll compared to whole page height 
    if(scrolled == undefined || scrolled == 0){ // Hide progress bar when at the top of page
        document.getElementById("progress").style.display = "none";
    }else{ // Else show
        document.getElementById("progress").style.display = "flex";
    }
    document.getElementById("progress-bar").style.width = scrolled + "%"; // Change width of highlighted part of progress bar
}