let nameCard = document.querySelector('.cardDetailsName');
let nameInput = document.querySelector('#cardHolder');
let errorName = document.querySelector('.errorCardHolder');
//interaccion Carta Name
nameInput.addEventListener('input', ()=>{
    if(nameInput.value == ''){
        nameCard.innerText = 'JANE APPLESEED'
    }else{
        nameCard.innerText = nameInput.value;
       
    }
    let regExp = /[0-9/\W/]/g;
    if(regExp.test(nameInput.value)){
        errorName.innerText= 'Wrong format, letters only';
        nameInput.style.borderColor = 'red';
    }else{
        errorName.innerText = '';
        nameInput.style.borderColor = 'hsl(270, 3%, 87%)';
    }
    
})
//interaccion Carta Numbers
let numberCard = document.querySelector('.cardNumber');
let numberInput = document.querySelector('#cardNumber');
let errorNumber = document.querySelector('.errorCardNumber');


numberInput.addEventListener('input', (event)=>{
    numberCard.innerText= numberInput.value;
    let regExp = /[A-z/]/g; 
        if(regExp.test(numberInput.value)){
        errorNumber.innerText = 'Wrong format, numbers only';
        numberInput.style.borderColor = 'red';
      
        // }if(regExp.test(numberInput.value) == false) {
        //    errorNumber.innerText =' ';
        // }
        }else{
            errorNumber.innerText ='';  
            numberInput.style.borderColor = 'hsl(270, 3%, 87%)';
            
        }   numberInput.value = event.target.value.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
        if(numberInput.value == ''){
            numberCard.innerText = '0000 0000 0000 0000'; 
        
    }
        
})
//interacion Carta Month
let monthCard = document.querySelector('.cardMonth');
let monthInput= document.querySelector('#month');
let errorMonth= document.querySelector('.errorMM');

monthInput.addEventListener('input', ()=>{
    monthCard.innerText = monthInput.value;
    if(monthInput.value== ''){
         monthCard.innerText = '00';

    }
    if (isNaN(monthInput.value.trim())) {
        errorMonth.innerText = 'Only Number';
        monthInput.style.borderColor = 'red';
    }else{
    errorMonth.innerText= '';
     monthInput.style.borderColor = 'hsl(270, 3%, 87%)';
  }
})

//interaccion carta Year

let yearCard = document.querySelector('.cardYear');
let yearInput = document.querySelector('#years');
let yearError = document.querySelector('.errorYY');

yearInput.addEventListener('input', ()=>{
    yearCard.innerText = yearInput.value;
    if(yearInput.value == ''){
        yearCard.innerText = '00';
    }
    
    if (isNaN(yearInput.value.trim())) {
        yearError.innerText = 'Only Number';
        yearInput.style.borderColor = 'red';
    }else{
     yearError.innerText= '';
     yearInput.style.borderColor = 'hsl(270, 3%, 87%)';
  }

})

//interaccion carta cvc

let cvcCard = document.querySelector('.numberBack');
let cvcInput = document.querySelector('.inputCvc');
let cvcError = document.querySelector('.errorCvc');

cvcInput.addEventListener('input', ()=>{
    cvcCard.innerText = cvcInput.value;
    if(cvcInput.value == ''){
        cvcCard.innerText = '000';
    }

    if (isNaN(cvcInput.value.trim())) {
           cvcError.innerText = 'Only Number';
           cvcInput.style.borderColor = 'red';
     }else{
        cvcError.innerText= '';
        cvcInput.style.borderColor = 'hsl(270, 3%, 87%)';
     }
    
})
let containerinfo = document.querySelector('.containerInfo');
let thankYou = document.querySelector('.thankYou');
let button = document.querySelector('.buttonSend');
 button.addEventListener('click', (e)=>{
    e.preventDefault()
            console.log('click');
    if(nameInput.value && numberInput.value && monthInput.value && yearInput.value && cvcInput.value) {
        containerinfo.style.display="none"
        thankYou.style.display="block"
    }

 })

 //funtion error
//  function showError(inputDiv, errorDiv,msgDiv) {
//     if(errorDiv.innerText==msgDiv) { 
//         return inputDiv.style.borderColor='red';   
//         }else{


//         }
//     }
 