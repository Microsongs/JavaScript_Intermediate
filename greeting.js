// 첫 번째 js-form 클래스를 가져와서 그 클래스의 input태그를 가져옴
// localStorage -> 작은 저장값
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

// 이름을 저장하는 함수
function saveName(text){
    // localStorage에 text를 set한다
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    // event가 발생하면 root에서 일어나고 form에서 일어남 -> event는 bubble
    // event의 기본 동작을 막아 새로고침 방지 -> preventDefault()
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    // 데이터를 저장하는 함수 호출
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting (text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // user is not
        askForName();
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