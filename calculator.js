    function add(num1,num2){
     return num1+num2;
    }
   function substract(num1,num2){
     return num1-num2;
    }

    function multiply(num1,num2){
     return num1*num2;
    }
    function divide(num1,num2){
        if(num2==0){
         return "you can not divide by 0"
        }
     return num1/num2;
    }
    module.exports.add=add;
    module.exports.substract=substract;
    module.exports.multiply=multiply;
    module.exports.divide=divide;
    
    
    
 
    
    