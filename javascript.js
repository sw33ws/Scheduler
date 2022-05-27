var headerTimeEl = $("#header-time");

var e1 = document.getElementById("9AM");
var e2 = document.getElementById("10AM");
var e3 = document.getElementById("11AM");
var e4 = document.getElementById("12PM");
var e5 = document.getElementById("1PM");
var e6 = document.getElementById("2PM");
var e7 = document.getElementById("3PM");
var e8 = document.getElementById("4PM");
var e9 = document.getElementById("5PM");

// setting the date at the top of the page
function headerTime() {
    var timenow = moment().format("dddd MMM Do");  
    console.log(timenow);
    headerTimeEl.text(timenow);
}

// changing the colors depending on the time
function hourTime() {
    var hourNow = moment().format("h"); 
    console.log(hourNow);
    if (hourNow == 9) {
        e1.classList.add("currentTime");
        e2.classList.add("futureTime");
        e3.classList.add("futureTime");
        e4.classList.add("futureTime");
        e5.classList.add("futureTime");
        e6.classList.add("futureTime");
        e7.classList.add("futureTime");
        e8.classList.add("futureTime");
        e9.classList.add("futureTime");
    }
    if (hourNow == 10) {
        e1.classList.add("pastTime");
        e2.classList.add("currentTime");
        e3.classList.add("futureTime");
        e4.classList.add("futureTime");
        e5.classList.add("futureTime");
        e6.classList.add("futureTime");
        e7.classList.add("futureTime");
        e8.classList.add("futureTime");
        e9.classList.add("futureTime");
    }
    if (hourNow == 11) {
        e1.classList.add("pastTime");
        e2.classList.add("pastTime");
        e3.classList.add("currentTime");
        e4.classList.add("futureTime");
        e5.classList.add("futureTime");
        e6.classList.add("futureTime");
        e7.classList.add("futureTime");
        e8.classList.add("futureTime");
        e9.classList.add("futureTime");
    }
    if (hourNow == 12) {
        e1.classList.add("pastTime");
        e2.classList.add("pastTime");
        e3.classList.add("pastTime");
        e4.classList.add("currentTime");
        e5.classList.add("futureTime");
        e6.classList.add("futureTime");
        e7.classList.add("futureTime");
        e8.classList.add("futureTime");
        e9.classList.add("futureTime");
    }
    if (hourNow == 1) {
        e1.classList.add("pastTime");
        e2.classList.add("pastTime");
        e3.classList.add("pastTime");
        e4.classList.add("pastTime");
        e5.classList.add("currentTime");
        e6.classList.add("futureTime");
        e7.classList.add("futureTime");
        e8.classList.add("futureTime");
        e9.classList.add("futureTime");
    }
    if (hourNow == 2) {
        e1.classList.add("pastTime");
        e2.classList.add("pastTime");
        e3.classList.add("pastTime");
        e4.classList.add("pastTime");
        e5.classList.add("pastTime");
        e6.classList.add("currentTime");
        e7.classList.add("futureTime");
        e8.classList.add("futureTime");
        e9.classList.add("futureTime");
    }
    if (hourNow == 3) {
        e1.classList.add("pastTime");
        e2.classList.add("pastTime");
        e3.classList.add("pastTime");
        e4.classList.add("pastTime");
        e5.classList.add("pastTime");
        e6.classList.add("pastTime");
        e7.classList.add("currentTime");
        e8.classList.add("futureTime");
        e9.classList.add("futureTime");
    }
    if (hourNow == 4) {
        e1.classList.add("pastTime");
        e2.classList.add("pastTime");
        e3.classList.add("pastTime");
        e4.classList.add("pastTime");
        e5.classList.add("pastTime");
        e6.classList.add("pastTime");
        e7.classList.add("pastTime");
        e8.classList.add("currentTime");
        e9.classList.add("futureTime");
    }
    if (hourNow == 5) {
        e1.classList.add("pastTime");
        e2.classList.add("pastTime");
        e3.classList.add("pastTime");
        e4.classList.add("pastTime");
        e5.classList.add("pastTime");
        e6.classList.add("pastTime");
        e7.classList.add("pastTime");
        e8.classList.add("pastTime");
        e9.classList.add("currentTime");
    }
}

var ImgSave1 = document.getElementById("save-local1");
var ImgSave2 = document.getElementById("save-local2");
var ImgSave3 = document.getElementById("save-local3");
var ImgSave4 = document.getElementById("save-local4");
var ImgSave5 = document.getElementById("save-local5");
var ImgSave6 = document.getElementById("save-local6");
var ImgSave7 = document.getElementById("save-local7");
var ImgSave8 = document.getElementById("save-local8");
var ImgSave9 = document.getElementById("save-local9");

e1.innerHTML = localStorage['9AM'] || '';
ImgSave1.addEventListener("click", function(){
    localStorage['9AM'] = e1.innerHTML;
});

e2.innerHTML = localStorage['10AM'] || '';
ImgSave2.addEventListener("click", function(){
    localStorage['10AM'] = e2.innerHTML;
});

e3.innerHTML = localStorage['11AM'] || '';
ImgSave3.addEventListener("click", function(){
    localStorage['11AM'] = e3.innerHTML;
});

e4.innerHTML = localStorage['12PM'] || '';
ImgSave4.addEventListener("click", function(){
    localStorage['12PM'] = e4.innerHTML;
});

e5.innerHTML = localStorage['1PM'] || '';
ImgSave5.addEventListener("click", function(){
    localStorage['1PM'] = e5.innerHTML;
});

e6.innerHTML = localStorage['2PM'] || '';
ImgSave6.addEventListener("click", function(){
    localStorage['2PM'] = e6.innerHTML;
});

e7.innerHTML = localStorage['3PM'] || '';
ImgSave7.addEventListener("click", function(){
    localStorage['3PM'] = e7.innerHTML;
});

e8.innerHTML = localStorage['4PM'] || '';
ImgSave8.addEventListener("click", function(){
    localStorage['4PM'] = e8.innerHTML;
});

e9.innerHTML = localStorage['5PM'] || '';
ImgSave9.addEventListener("click", function(){
    localStorage['5PM'] = e9.innerHTML;
});

setInterval(hourTime, 1000);
window.onload = headerTime;
