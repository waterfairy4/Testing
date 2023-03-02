  module.exports.sum=sum;
  module.exports.capitalize=capitalize;
 module.exports.reverseString=reverseString;
 module.exports.caesarCipher=caesarCipher;
 module.exports.analyzeArray=analyzeArray;
 function sum(a, b) {
   return a + b;
   }
function capitalize (string){  
  try {
    const str = string.charAt(0).toUpperCase() + string.slice(1);
     return str;
  } catch (error) {
    return "You can't enter a "+typeof string+" ,enter a string."; 
  }
   
}
function reverseString(str) {
  try {
    if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
  } catch (error) {
    return "You can't enter a "+typeof str+" ,enter a string."; 
  }
 
}


  
function mod(n, p) {
  return n - p * Math.floor(n / p);
}

function caesarCipher(msg) {
  let encMsg = "";
  const key=1;

  for (let i = 0; i < msg.length; i++) {
    let code = msg.charCodeAt(i);

    if (code >= 65 && code <= 65 + 26 - 1) {
      code -= 65;
      code = mod(code + key, 26);
      code += 65;
    }
    if (code >= 97 && code <= 97 + 26 - 1) {
      code -= 97;
      code = mod(code + key, 26);
      code += 97;
    }
    if(code>=33 && code <=33 + 15-1){
      code-=33;
      code = mod(code + key, 15);
      code += 33;
    }
    if(code>=48 && code <=48 + 10-1){
      code-=48;
      code = mod(code + key, 10);
      code += 48;
    }

    encMsg += String.fromCharCode(code);
  }

  return encMsg;
}
function analyzeArray(array){
   object={
    average:average(array),
     min:min(array),
    max:max(array),
   length:length(array)
  }
  return object;
}
 
function average(array) {
  let number;
  let sum=0;
  let size=array.length;
  for (let i = 0; i < size; i++) {
     number = array[i];
     sum+=number;
  }
  return sum/(size);
}
function min(array) {
  let min=array[0];
  let size=array.length;
  for (let i = 0; i < size; i++) {
    if(min>array[i]){
      min = array[i];
    }
  }
  return min;
}
function max(array) {
  let max=array[0];
  let size=array.length;
  for (let i = 0; i < size; i++) {
    if(max<array[i]){
      max = array[i];
    }
  }
  return max;
}
function length(array) {
 return array.length;
}
// console.log(object.average);
// console.log(object.min);
// console.log(object.max);
// console.log(object.length);
// console.log(object);








