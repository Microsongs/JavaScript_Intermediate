const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

// const date = new Date()
// date를 하면 날짜를 알려줌
// date.getDay()를 하면 요일(曜日)을 반환
// date.getDate()를 하면 일(日)을 반환
// date객체를 생성한 시간으로 생성된다 -> 현재를 불러오기 위한 방법
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
    
}

function init(){
    getTime();
}

init();
