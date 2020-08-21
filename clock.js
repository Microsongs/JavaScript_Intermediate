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
    // 삼항 연산자를 사용하여 10이하일 떄 앞에 숫자를 넣어준다.
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${ 
    minutes < 10 ? `0${minutes}` : minutes}:${ 
    seconds<10 ? `0${seconds}` : seconds}`;
}

function init(){
    getTime();
    // setInterval(실행할 함수, 실행하고 싶은 시간
    setInterval(getTime,1000);
}

init();
