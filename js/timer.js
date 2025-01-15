// timer
const timeEnd = '2026-12-09';
function getTimeRemaining(endtime){
    const t = Date.parse(endtime) - Date.parse(new Date()),
    days = Math.floor(t / (1000 * 60 * 60 * 24)),
    hours = Math.floor(t / (1000 * 60 * 60) % 24),
    minutes = Math.floor((t / 1000 / 60) % 60),
    seconds = Math.floor((t / 1000) % 60);
    return{
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}
function setClock(selector, endtime){
    const timer = document.querySelector(selector),
    days = document.querySelector('#days1'),
    hours = document.querySelector('#hours1'),
    minutes = document.querySelector('#minutes1'),
    seconds = document.querySelector('#seconds1'),
    timeInterval = setInterval(updateClock, 1000);
    updateClock()
     function updateClock(){
        const t = getTimeRemaining(endtime);
        days.innerHTML = t.days;
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;
       if(t.total<=0){
            clearInterval(timeInterval);
        }
    }
}
setClock('.countdown', timeEnd);
