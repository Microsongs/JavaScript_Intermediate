// todoForm = js.todoForm input = js.toDoForm의 toDoInput
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

// dd
const TODOS_LS = "toDos";

const toDos = [];

function saveToDos(){
    // js의 localStorage는 전부 string으로 저장하려고 하므로 JSON.stringify로 object를 string화
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

// 텍스트를 색칠
function paintToDo(text){
    // HTML에 생성하는 것
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerHTML= "✘";
    span.innerText = text;
    // father element를 넣는 것
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    // ID생성 ㅣㅇ유 -> locatlStorage에도 저장하기 위해
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    // toDos배열에 푸쉬 후 저장
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

// 로컬 스토리지에서 아이템 가져옴
function loadToDos(){
    const loadToDos = localStorage.getItem(TODOS_LS);
    // null 이면 아무것도 안함 -> 이 form은 항상 보여질 것이기 때문
    if( loadToDos !== null){  
        // string -> object 파싱
        const parsedToDos = JSON.parse(loadToDos);
        // 모든 parsedToDos에 paintToDo 실행
        parsedToDos.forEach((toDo) => paintToDo(toDo.text));
    }
}

// 생성자
function init(){
    loadToDos();
    // 이벤트 추가 -> submit할 때 handleSubmit 호출
    toDoForm.addEventListener("submit",handleSubmit);
}

init();