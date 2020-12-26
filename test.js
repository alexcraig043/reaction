let title = document.getElementById("title");
let text = document.getElementById("text");
let button = document.getElementById("button");


function initiate () {
    console.log("Successfully Initiated");
    text.style.visibility = "hidden";
    button.style.visibility = "hidden";
    timeInt = Math.floor(Math.random() * 6000) + 1000;  
    startTime = new Date().getTime();
    console.log(`Start Time is ${startTime}`);
    console.log(`${timeInt} ms`);


    setTimeout(changeBackground, timeInt);    

}

function checkReaction () {
    clickTime = new Date().getTime() - startTime;
    console.log(`Reaction time is ${clickTime}`);

    if (clickTime < timeInt) {
        title.innerHTML = "You Clicked Too Soon!";
        text.style.visibility = "visible";
        button.style.visibility = "visible";
    } else {
        let reactionTime = clickTime - timeInt;
        console.log(`Reaction time is ${reactionTime}`);
        title.innerHTML = reactionTime + " Milliseconds";
        text.style.visibility = "visible";
        button.style.visibility = "visible";
    }

}

function changeBackground () {
    document.body.style.backgroundColor = '#37de64';
}

function retry () {
    window.location.href = 'test.html';
}