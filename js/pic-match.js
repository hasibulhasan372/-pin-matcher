// Generate random 4 number pin for the matching  
// step: 1 create a function for generate pin 
// Step: 2 Math.round for make the rounded number without decimal  
// step : 3 Math.random()*10000 for getting 4 number in a row
// Step : 4 adding a empty string for getting the length of the number  

function generatePin(){
    const pin = Math.round(Math.random()*10000) + '';
    if(pin.length === 4){
        return pin;
    } 
    else{
        return generatePin();
    }
    
};

document.getElementById('get-pin').addEventListener('click', function(){
    const inputPin = document.getElementById('display-pin');
     inputPin.value = generatePin();
 
    
});

document.getElementById('calculator').addEventListener('click', function(event){
    const numbers = event.target.innerText;
    const matchInput = document.getElementById('match-input');
    const previousNumber =  matchInput.value;
    
    

   if(isNaN(numbers)){
    if(numbers === "C"){
        matchInput.value = '';
    }
    else if(numbers === "<"){
        const getNumberArray = previousNumber.split('');
        getNumberArray.pop();
        matchInput.value = getNumberArray.join('');
    }
   }
   else{
    const newNumber = previousNumber + numbers;
    matchInput.value = newNumber;
   };
});

document.getElementById('verify-btn').addEventListener('click', function(){
    const pinGetInput = document.getElementById('display-pin');
    const pinString = pinGetInput.value;

    const typeInput = document.getElementById('match-input');
    const typePinString = typeInput.value;

    const validMessage = document.getElementById('valid-message');
    const invalidMessage = document.getElementById('invalid-message');

    if(pinString === typePinString){
        validMessage.style.display = 'block';
        invalidMessage.style.display = 'none';
        typeInput.value = '';
           
    }
    else{
        invalidMessage.style.display = 'block'; 
        validMessage.style.display = 'none'; 
        typeInput.value = ''
    }

});