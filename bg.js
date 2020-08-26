const body = document.querySelector("body");

const IMG_NUMBER = 7;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/image${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);

}

// 랜덤 숫자 반환
function genRandom(){
    // Math.floor -> 내림 Math.ceil -> 올림
    const number = Math.ceil(Math.random() * IMG_NUMBER); 
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();