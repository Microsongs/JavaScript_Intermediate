// 첫 번째 js-form 클래스를 가져와서 그 클래스의 input태그를 가져옴
// localStorage -> 작은 저장값
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function paintGreeting (text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // user is not

    }
    // 유저가 있을 경우 -> 
    else{
        // user is
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();