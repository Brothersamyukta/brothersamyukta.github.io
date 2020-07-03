const requestURL = 'towndata.json'
fetch(requestURL)
    .then(function(response){
        if(response.ok) {
            return response.json();
        }
        throw new ERROR('Network response was not ok');
    })

    .then(function(jsonObject){
        console.log(jsonObject);
      let upcomingEvent = document.getElementById('events'); 
      jsonObject.towns.forEach(event => {
        if(event.name === "Fish Haven") {
          
          event.events.forEach(data=> {
            let smallInfo = document.createElement('p');
            smallInfo.setAttribute('class','event-info');
            smallInfo.textContent = data;
            upcomingEvent.append(smallInfo);
          })
         
        }
      })

    })

function toggleMenu () {
    (document.getElementsByClassName("navigation")[0].classList.toggle("responsive"));
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



function buildWC(speed,temp) {
    
      // Compute the windchill
      let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
      console.log(wc);
    
      //Round the answer down to integer
      wc = Math.floor(wc);
    
      //If chill is greater than temp, return the temp
      wc = (wc > temp) ? temp: wc;
    
      //Display the windchill
      console.log(wc);
      
      //wcTemp.innerHTML = wc;
      return wc;
       }

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=6bfa38a5c2a349e9ca7233d67d045cb8";
fetch(apiURL)
       .then (response=> {
           if(response.ok) {
               return response.json();
           }
           throw new Error('Network response was not ok');
       })

       .then(jsObject=> {
        console.log(jsObject);
        document.querySelector('#summary-info').textContent = jsObject.weather[0].main;
        document.querySelector('#summary-temp').textContent = jsObject.main.temp;
        document.querySelector('#summary-speed').textContent = jsObject.wind.speed;
        document.querySelector('#summary-humid').textContent = jsObject.main.humidity;

        let temp = jsObject.main.temp;
        let speed = jsObject.wind.speed;
        let wind = document.getElementById('summary-wind');
        wind.innerHTML= Math.round(buildWC(speed, temp));
      })
    

      const url ="https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=6bfa38a5c2a349e9ca7233d67d045cb8";
      fetch(url) 
        .then(response => {
          if(response.ok) {
            return response.json();
          }
          throw new ERROR('Network response was not ok');
        })
      
        .then(jsData => {
          console.log(jsData);
          let forecastTable = document.getElementById('forecastTable');
          let dayForeCast = document.getElementById('forecastDays');
          jsData.list.forEach(element => {
              if(element.dt_txt.includes('18:00:00')) {
                let title = document.createElement('th');
                let tableData = document.createElement('td');
                let img = document.createElement("img");
                let temp = document.createElement("div");
                let description = document.createElement("div");
      
                img.setAttribute('src','https://openweathermap.org/img/w/' + element.weather[0].icon + '.png');
                img.setAttribute('alt',element.weather[0].description);
              
                temp.textContent = Math.round(element.main.temp) + ' °F';  
                description.textContent = element.weather[0].description;
                temp.append(description);
                tableData.append(img,temp);
                forecastTable.appendChild(tableData);
      
                title.textContent = checkDayOfWeek(element.dt_txt);
                dayForeCast.append(title);
              }       
        }) 
      
      });

function checkDayOfWeek(day) {
    let dayName = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
 ];
 let date = new Date(day);
 let daysName = dayName[date.getDay()];
 let nameDay = `${daysName}`;
 return nameDay;
}