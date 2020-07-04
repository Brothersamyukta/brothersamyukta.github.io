const imagesToLoad = document.querySelectorAll("img[data-src]");

function preloadImage(img) {
  const src= img.getAttribute("data-src");
  if(!src) {
    return;
  }
  img.src = src;
}

const imageOptions = {
  threshold:1,
  rootMargin: "0px 0px 20px 0px"
};

const imgObserver = new IntersectionObserver((entries,imgObserver) => {
  entries.forEach(entry => {

    if(!entry.isIntersecting) {
     return;
   }
    else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
},imageOptions);

imagesToLoad.forEach(image =>  {
  imgObserver.observe(image);
});
  
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