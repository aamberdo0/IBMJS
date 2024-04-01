let amount = document.getElementById('amount'); 
document.getElementById("header").innerHTML = 'Money conversion'; 
document.getElementById("description").innerHTML = 'Use this to convert your money';
let answer = document.getElementById('answer'); 
let conversion = document.getElementsByName('convert'); 

document.getElementById('button').addEventListener("click", function(){
   answer.textContent = `Your new payment is $${getConversion(conversion, amount.value)}`;
})

function getConversion(conversion,amount){
  let value = ""; 
  let result = 0; 
   for(let i = 0; i<conversion.length; i++){
    if(conversion[i].checked){
        value = conversion[i].value;
        result = calculate(value,amount); 
    }
   }
   return result; 
}

function calculate(value,amount){
    return value ==="US" ? amount * 0.74 : amount * 18;
}