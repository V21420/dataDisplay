function arrayDemo(){
    let numbers = [1,2,3,4,5,6];
    // console.log(`numbers = ${numbers[0]}`);
    // console.log(`numbers = ${numbers[1]}`);
    // console.log(`numbers = ${numbers[2]}`);
    // console.log(`numbers = ${numbers[3]}`);
    // console.log(`numbers = ${numbers[4]}`);
    // console.log(`numbers = ${numbers[5]}`);
    for(i=0;i<numbers.length;i++){
        console.log(`numbers = ${numbers[i]}`);
    }

    numbers.forEach(number =>{
        console.log("the number = ",number*2)
    })

    let myNumber = numbers.map(number => number*2);
    console.log(`The arrays are = ${myNumber}`);

    let names = ["Ram","check","Hello","Bye"];

    names.push("Deepak");

    console.log(`Names = ${names}`);
    let newArray = names.filter(name => (name.charAt(0)==='D' || name.charAt(0)==="R"));
    console.log("The new Array = ",newArray);

}