//toggle menu
function toggleMenu () {
    (document.getElementsByClassName("navigation")[0].classList.toggle("responsive"));
}
//current date 
let daysNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
  
let date = new Date(document.lastModified);
let dayName = daysNames[date.getDay()];
let monthName = months[date.getMonth()];
let year = date.getFullYear();
let fullDate = dayName + ', '+ date.getDate() +" " + monthName + " "+ year;
  
document.getElementById('lastUpdated').textContent = fullDate;
function checkAd() {
    let dayName = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    let date = new Date();
    let checkDay = dayName[date.getDay()];
    if(checkDay === 'Friday') {
      document.getElementById('checkAds').style.display = "block";
      document.getElementById('toggleMenu').style.top = "6.5em";
    } else {
      document.getElementById('checkAds').style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {
  let temp = document.getElementById('highTemp').innerHTML;
  let speed = document.getElementById('windSpeed').innerHTML;
  let wind = document.getElementById('windChill');
  wind.innerHTML = buildWC(speed, temp);
});


// Calculate the Windchill
function buildWC(speed,temp) {

//let wcTemp = document.getElementById('windchill');

  // Compute the windchill
  let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
  console.log(wc);

  //Round the answer down to integer
  wc = Math.floor(wc);

  //If chill is greater than temp, return the temp
  wc = (wc > temp) ? temp: wc;

  //Display the windchill
  console.log(wc);
  // wc = wc+'°F';
  // wcTemp.innerHTML = wc;
  //  }
  
  //wcTemp.innerHTML = wc;
  return wc;
   }