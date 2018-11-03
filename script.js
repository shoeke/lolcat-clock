var time = new Date().getHours();

var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var napTime = lunchTime + 2;

var partyTime = 20;
var messageText = "";
var timeEvent = document.getElementById('timeEvent');
var lolcat = document.getElementById('lolcat');
var image;

//wrap updateClock function here//

var updateClock = function() {
  if (time < 6) {
	messageText = "Why up so early?";
	image = "http://images.onlyfatrabbit.com/uploads/2013/09/tumblr_msxdr8aQxy1rkk59qo1_1280.jpg";
  }
	else if (time == wakeupTime){
	messageText ="Good Morning and GET UP!";
	image = "https://avatars.mds.yandex.net/get-zen_doc/112656/pub_5ab01947a815f1776af99f69_5ab019668c8be33aca056b23/scale_1200";
	}
    else if (time == lunchTime){
	messageText ="Eat Lunch!";
	image = "https://st-listas.20minutos.es/images/2013-07/365302/4100757_640px.jpg?1374103719";
	}
    else if (time == napTime){
	messageText ="You Must Nap!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
	}
    else if (time == partyTime){
  messageText = "Whoop it Up!!";
  image = "http://www.letssmiletoday.com/uploads/images/15591-Its_A_Party_Now_23.08.2012.jpg"
  }
    else if (time > 20){
	messageText = "Go to Bed!!";
	image = "https://farm6.static.flickr.com/5005/5200827726_00a3ac9ac5_b.jpg"
	}
	else {
	messageText ="Good Day!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
	}

timeEvent.innerText = messageText;
lolcat.src = image;

//paste showCurrentTime function

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= 12)
    {
        meridian = "PM";
    }
    if (hours > 12)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};
showCurrentTime();
};
updateClock();

var oneSecond = 1000;
setInterval( updateClock, oneSecond);

// PartyTime button
var partyTimeButton = document.getElementById("partyTimeButton");
var lolcat = document.getElementById('lolcat');

// set isPartyTime to false

var isPartyTime = false;


var partyEvent = function() {

   //check isPartyTime
   if (isPartyTime === false){
        // if isPartyTime is false, change it to true
        //so we know the button has been clicked
        isPartyTime = true;
        // set time to partyTime so the lolCat clock
        //image and message update to the partyTime image and message
        time = 20;
        document.getElementById("clock").innerText = "PARTY!";
        partyTimeButton.innerText = "PARTY TIME!";
        partyTimeButton.style.background = "#5af3d6";
        lolcat.style.border =  "20px dotted #5af3d6";
        setInterval( updateClock, hour);

    } else {
        // if isPartyTime is true, change it to false to end the party
        isPartyTime = false;
        // set time back to the current time
        time = new Date().getHours();
        partyTimeButton.innerText = "PARTY OVER!";
        partyTimeButton.style.background = "#0a8dab";
        lolcat.style.border =  "10px solid #222";
    }

};
partyTimeButton.addEventListener("click", partyEvent);



//Wake Up Time Selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function() {

wakeupTime = wakeUpTimeSelector.value;

};
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);




//Lunch Time Selector
var lunchTimeSelector = document.getElementById('lunchTimeSelector');
var lunchTimeEvent = function()
{
    lunchTime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener('change', lunchTimeEvent);




//Wake Up Time Selector
var napTimeSelector = document.getElementById("napTimeSelector");

var napTimeEvent = function() {

napTime = napTimeSelector.value;

};
napTimeSelector.addEventListener("change", napTimeEvent);
