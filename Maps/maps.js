//similar to object but not same
var myMap= new Map();
myMap.set(1,"One");
myMap.set(2,"Two");
myMap.set(3,"Three");
myMap.set(4,"Four");

console.log(myMap);

for(let key of myMap.keys()){
    console.log(`key is ${key}`);
}

for(let value of myMap.values()){
    console.log(`value is ${value}`);
}

for(let [key,value] of myMap){
    console.log(` key is:${key} and value is:${value}`);
}

//forEach gives the value first,
myMap.forEach((value)=>console.log(value));

myMap.forEach((v,k)=>console.log(` ${v} and ${k}`));

myMap.delete(3);
console.log(myMap);