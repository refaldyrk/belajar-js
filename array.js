const myArray = ["Aulia", "Fatimatu", "Zahro", 17, 15, 30, true];
console.log(myArray.length);
myArray.push("Efal");
console.log(myArray);
myArray.pop();
console.log(myArray.length);
let flt = myArray.filter(a => typeof a === "number");
console.log(flt);
