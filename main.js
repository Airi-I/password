'use strict';

{

  function showpassword(){

    const result = document.getElementById('result');
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbersCheckbox = document.getElementById('numbers-checkbox');
    const symbolsCheckbox = document.getElementById('symbols-checkbox');
 
    const numbers = '01234567889';
    const symbols = '!#$%&()';
    let password = '';
    let seed = letters + letters.toUpperCase();
 
    if(numbersCheckbox.checked){
     seed += numbers;
 
    }
 
    if(symbolsCheckbox.checked){
     seed += symbols;
 
    }
 
    for(let i = 0; i < slider.value; i++){
     password += seed[Math.floor(Math.random() * seed.length)];
    }
 
 
    result.textContent = password; 
  }

   const slider = document.getElementById('slider');
   const btn = document.getElementById('btn');
   

   slider.addEventListener('input',()=>{
    const passwordLength = document.getElementById('password-length');
    

    passwordLength.textContent = slider.value;

   });

   btn.addEventListener('click',() =>{
    showpassword();

   });

   showpassword();

  }
