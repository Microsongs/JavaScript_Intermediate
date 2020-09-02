// String
console.log("Hello " + typeof("Hello"))
// number
console.log(10.25 + " " + typeof(10.25));
//boolean
console.log(true + " " + typeof(true));

let hello;
// 결과값 : undefined -> 정의를 안했기 때문
console.log(hello);
console.log(hello === undefined);
console.log(hello === null);
hello = null
// 결과값 : null -> 값이 존재하지 않는다고 정의함
console.log(hello);
console.log(hello === undefined);
console.log(hello === null);

//NaN -> Not a Number
console.log(Math.pow(5,"hello"));