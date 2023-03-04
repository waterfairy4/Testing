// const capitalize = require('./sum');
// const sum = require('./sum');
// import Calculator  from './calculator.js';
const obj = require('./testing');
// let calc = new Calculator();
 const calculator= require('./calculator');
// first
  test('testing capitalize function',() => {
    expect(obj.capitalize("ilayda")).toBe("Ilayda");
  });
  test('testing capitalize function',() => {
    expect(obj.capitalize("bana")).toBe("Bana");
  });
  test('testing capitalize function with one letter',() => {
    expect(obj.capitalize("a")).toBe("A");
  });
  test('testing capitalize function with 1',() => {
    expect(obj.capitalize("1")).toBe("1");
  });
  test('testing capitalize function with .',() => {
    expect(obj.capitalize(".ilayda")).toBe(".ilayda");
  });
  test('testing capitalize function with space',() => {
    expect(obj.capitalize(" ")).toBe(" ");
  });
  test('testing capitalize function with none',() => {
    expect(obj.capitalize("")).toBe("");
  });
  // second
  test('testing reverseString function',() => {
    expect(obj.reverseString("ilayda")).toBe("adyali");
  });
  test('testing reverseString function',() => {
    expect(obj.reverseString("bana")).toBe("anab");
  });
  test('testing reverseString fuction with empty string',() => {
    expect(obj.reverseString("")).toBe("");
  });
  test('testing reverseString fuction with number string',() => {
    expect(obj.reverseString("12345")).toBe("54321");
  });
  test('testing reverseString fuction with complicated string',() => {
    expect(obj.reverseString(".0t")).toBe("t0.");
  });
  test('testing reverseString fuction with .',() => {
    expect(obj.reverseString(".")).toBe(".");
  });
  test('testing reverseString fuction with integers',() => {
    expect(obj.reverseString(45)).toBe("You can't enter a number ,enter a string.");
  });
//  third
  test('testing calculator add function',() => {
    expect(calculator.add(4,5)).toBe(9);
  
  });
  
  test('testing calculator substract function',() => {
    expect(calculator.substract(4,5)).toBe(-1);
  
  });
  test('testing calculator multiply function',() => {
    expect(calculator.multiply(2,1)).toBe(2);
  
  });
  test('testing calculator divide function',() => {
    expect(calculator.divide(4,5)).toBe(0.8);
  
  });
  test('testing calculator divide function',() => {
    expect(calculator.divide(4,0)).toBe("you can not divide by 0");
  
  });
// fourth
  test('testing caesarCipher',() => {
    expect(obj.caesarCipher("ilayda")).toBe("jmbzeb");
  
  });
  test('testing caesarCipher',() => {
    expect(obj.caesarCipher(".")).toBe("/");
  
  });
  test('testing caesarCipher',() => {
    expect(obj.caesarCipher("testy549.")).toBe("uftuz650/");
  
  });
  //fifth
  test('testing analyzeArray',() => {
    expect(obj.analyzeArray([4,4,3,6])).toEqual({"average": 4.25, "length": 4, "max": 6, "min": 3});
  
  });
  test('testing analyzeArray',() => {
    expect(obj.analyzeArray([4,2,4,3])).toEqual({"average": 3.25, "length": 4, "max": 4, "min": 2});
  
  });
  test('testing analyzeArray',() => {
    expect(obj.analyzeArray([7,5,6,7])).toEqual(obj.analyzeArray([7,5,6,7]));
  
  });

  test('testing analyzeArray',() => {
    expect(obj.analyzeArray([7,5,6,7])).toEqual({"average": 6.25, "length": 4, "max": 7, "min": 5});
  
  });
  



  

  
  


  





  

  
  


  
