const requestURL = 'towndata.json';
fetch(requestURL)
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw new ERROR('Network response was not ok');
    })
    .then(function (jsonObject) {
        const info = jsonObject['towns'];
             console.log(jsonObject);  // temporary checking for valid response and data parsing
             for (let i = 0, x = info.length; i < x; i++) {

                if (info[i].name == "Preston" || info[i].name == "Soda Springs" || info[i].name == "Fish Haven")
                {

                let card = document.createElement('section');
                card.setAttribute('class','town');
                let article = document.createElement('article')
                let h2 = document.createElement('h2');
                let h4 = document.createElement('h4');
                let p = document.createElement('p');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let image = document.createElement('img')
                
                

                h2.textContent = info[i].name;
                h4.textContent = info[i].motto;
                p.textContent = "Year Founded: " + info[i].yearFounded;
                p1.textContent = "Population: " + info[i].currentPopulation;
                p2.textContent = "Annual Rain Fall: " + info[i].averageRainfall;
                image.setAttribute('src', info[i].photo);
                image.setAttribute('alt', info[i].name +'image');


                article.appendChild(h2);
                article.appendChild(h4);
                article.appendChild(p);
                article.appendChild(p1);
                article.appendChild(p2);
                card.appendChild(image)
                card.appendChild(article);

                document.querySelector('div.card').append(card);
                
                }
                
     } })

        .catch(function (error) {
            console.log('Fetch error: ', error.message);
        })

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

// eat pancake
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
