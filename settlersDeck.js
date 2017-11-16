// Create new array of 36 deck cards

var counter;
var newArr;
var randNum;
var randArrNum;



var drawNum = document.getElementById("num");
var htmlCounter = document.getElementById("count");
var reshuffle = document.getElementById("reshuffle");
var reshuffleSubmit = document.getElementById("reshuffleSubmit");
var reshuffleNum = reshuffle.value;


function createNew() {
    newArr = [
        2, 
        3, 3, 
        4, 4, 4, 
        5, 5, 5, 5, 
        6, 6, 6, 6, 6, 
        7, 7, 7, 7, 7, 7, 
        8, 8, 8, 8, 8, 
        9, 9, 9, 9, 
        10, 10, 10, 
        11, 11, 
        12
        ]
    counter = 36;
    htmlCounter.textContent = counter - reshuffleNum;
}



createNew();
// Listen for button
document.getElementById("rollNum").addEventListener("click", function() {
    // Need to shuffle if counter is below 8
    randNum = Math.floor(Math.random() * counter);
    randArrNum = newArr.splice(randNum, 1)[0];
    drawNum.textContent = randArrNum;
    counter--;
    htmlCounter.textContent = counter - reshuffleNum;
    if (htmlCounter.textContent === "0") {
        createNew();
    }
});


reshuffleSubmit.addEventListener("click", function () {
    reshuffleNum = reshuffle.value;
    htmlCounter.textContent = counter - reshuffleNum;
    if (counter - reshuffleNum <= 0) {
        createNew();
    }
});






