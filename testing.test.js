// const capitalize = require('./sum');
// const sum = require('./sum');
const obj = require('./testing');
const calculator= require('./calculator');

 test('adds 1 + 2 to equal 3', () => {
   expect(obj.sum(1, 2)).toBe(3);
 });
  test('add 1 string + 1 number to equal NaN',() => {
  expect(obj.sum('a', 2)).toBe(NaN);
});

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
  test('testing reverseString function',() => {
    expect(obj.reverseString("ilayda")).toBe("adyali");
  });
  test('testing reverseString function',() => {
    expect(obj.reverseString("bana")).toBe("annab");
  });
  test('testing reverseString fuction with empty string',() => {
    expect(obj.reverseString("")).toBe("");
  });
  test('testing reverseString fuction with number string',() => {
    expect(obj.reverseString("12345")).toBe("65425");
  });
  test('testing reverseString fuction with complicated string',() => {
    expect(obj.reverseString(".0t")).toBe("t0.");
  });
  test('testing reverseString fuction with integers',() => {
    expect(obj.reverseString(45)).toBe(54);
  });
  test('testing reverseString fuction with integers',() => {
    expect(obj.reverseString(45)).toBe("You can't");
  });
  test('testing reverseString fuction with .',() => {
    expect(obj.reverseString(".")).toBe("You can't");
  });
  test('testing reverseString fuction with integers',() => {
    expect(obj.reverseString(45)).toBe("You can't enter a number ,enter a string.");
  });
 
  test('testing calculator add function',() => {
    expect(calculator.add(4,5)).toBe(9);
  
  });
  test('testing calculator add function',() => {
    expect(obj.caesarCipher("ilayda")).toBe("a");
  
  });
  test('testing calculator add function',() => {
    expect(obj.caesarCipher(".")).toBe(".");
  
  });
  test('testing calculator add function',() => {
    expect(obj.caesarCipher("testy549.")).toBe("");
  
  });
  // test('testing analyzeArray',() => {
  //   expect(obj.analyzeArray([4,4,3,5])).toBe("");
  
  // });
  test('testing analyzeArray',() => {
    expect(obj.analyzeArray([4,4,3,6])).toBe();
  
  });
  test('testing analyzeArray',() => {
    expect(obj.analyzeArray([4,2,4,3])).toBe();
  
  });
  test('testing analyzeArray',() => {
    expect(obj.analyzeArray([7,5,6,7])).toEqual(obj.analyzeArray([7,5,6,7]));
  
  });

  test('testing analyzeArray',() => {
    expect(obj.analyzeArray([7,5,6,7])).toEqual({"average": 6.25, "length": 4, "max": 7, "min": 5});
  
  });
  



  

  
  


  
