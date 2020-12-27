function initiate () {
    console.log("Running initiate");
    title = document.getElementById("title");
    text = document.getElementById("text");
    button = document.getElementById("button");
    html = document.getElementById("html");
    count = 0;

    button.addEventListener("click", testReaction);

}

//Changing html and adding listener for click
function testReaction () {
    console.log("Running testReaction");

    //Styling HTML
    document.body.style.backgroundColor = '#ed4545';
    title.innerHTML = "Click Anywhere When the Screen Turns Green!";
    text.innerHTML = "Try Again?";
    button.innerHTML = "Retry";
    text.style.visibility = "hidden";
    button.style.visibility = "hidden";

    timeInt = Math.floor(Math.random() * 7000) + 1000;  
    startTime = new Date().getTime() + 1;
    console.log(`Start Time is ${startTime}`);
    console.log(`Time int is ${timeInt} ms`);

    setTimeout(addClickListener, 1);
    count++;
    setTimeout(changeBackground, timeInt);    

}

//Checking reaction time when click is registered
function checkReaction () {
    console.log("You clicked!");

    count--;
    html.removeEventListener("click", checkReaction);
    clickTime = new Date().getTime() - startTime;
    console.log(`Reaction time is ${clickTime}`);
    
    if (clickTime < timeInt) {
        title.innerHTML = "You Clicked Too Soon!";
        text.style.visibility = "visible";
        button.style.visibility = "visible";
    } else {
        reactionTime = clickTime - timeInt;
        console.log(`Reaction time is ${reactionTime}`);
        title.innerHTML = reactionTime + " Milliseconds";
        text.style.visibility = "visible";
        button.style.visibility = "visible";
    }
    
}

// Adding a click listener to entire html
function addClickListener() {
    html.addEventListener("click", checkReaction);
}

// Changing Background
function changeBackground () {
    if (count == 1) {
        document.body.style.backgroundColor = '#37de64';
    }
}