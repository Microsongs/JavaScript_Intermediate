function three(){
    console.log("I love Js");
    throw error("omg");
}
function two(){
    three();
}
function one(){
    two();
}
function zero(){
    one();
    
}

zero();