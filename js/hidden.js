// Hidden section for intership countdown

const password = "password";
let inputBox = document.getElementById('hidden');
let internship = document.getElementById("internship");
let message = document.getElementById('message');

internship.style.display = "none";

inputBox.addEventListener("keydown", function (e){
    if(e.code === "Enter"){ // Run when enter key is pressed
        e.preventDefault(); // Prevent refresh
        if(e.target.value === password){ // Check password match
            internship.style.display = "block"; // Change display 'none' to 'block'
            window.scrollBy(0, 400); // Scrolls down 400px to indicate new area
        }else{
            message.innerText = "Try again." // Wrong password
        }
    }
})