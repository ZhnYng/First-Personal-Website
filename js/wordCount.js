function countWords() {
    // Get the input text value
    var text = document.getElementById("comments").value;

    // Initialize the word counter
    var numWords = 0;

    // Split the string into an array of words at each spacing
    textSplit = text.split(' ');

    // Checks for repeated spacing
    while(textSplit[textSplit.length - 1] == '' && textSplit[textSplit.length-2] == ''){
        textSplit.pop();
    }

    //Length of arr is the num of words
    for(const word of textSplit){
        if(word.length != 0){
            numWords += 1;
        }
    }

    // Check if number of words is singular or plural
    var plural = false;
    if(numWords == 1){
        plural = false;
    }else{
        plural = true;
    }

    document.getElementById("word-count").innerHTML = numWords + `${plural ? " words" : " word"}`;
}

setInterval(countWords, 500);