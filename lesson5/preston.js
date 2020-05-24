function toggleMenu () {
    (document.getElementById("primaryNav").classList.toggle("hide"));
}
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
