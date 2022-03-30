function plain(){
    console.log("Hello Js");
}
function withParams(name,age){
    console.log(`the name = ${name} The age will be ${age}`);
}
function withReturnType(){
    console.log("inside wilth return type function");
    return "Hello returnable function"
}
function withReturnTypeAndParams(name,age){
    console.log(`name and Age will be ${name} and ${age}`);
    return `${name} , ${age}`;
}
plain()
withParams("Ram",22);
let result = withReturnType();
console.log(`Result = ${result}`);
let result1 = withReturnTypeAndParams("Ram",12);
console.log(`Result1 = ${result1}`);
