const numberA=document.querySelector('.numberA')
const numberB=document.querySelector('.numberB')
const btncount=document.querySelector('.btncount')
const results=document.querySelector('.results')

const input=document.querySelector('input')

function euclideanAlgorithm(a, b) {
    // Make sure a and b are positive integers
    a = Math.abs(a);
    b = Math.abs(b);
  
    while (b !== 0) {
      const remainder = a % b;
      a = b;
      b = remainder;
    }
  
    return a;
  }
  
const funccheck=()=>
{
   let numbera=numberA.value  
   let numberb=numberB.value
   const respond=euclideanAlgorithm(numbera,numberb)
   if(numbera!=='' && numberb!=='')
   {
   results.textContent=`Największy wspólny dzielnik liczba ${numbera} i ${numberb} to ${respond}`
   numberA.style.borderColor="white"
   numberB.style.borderColor='white'
   }else if(numbera==='' && numberb==='') 
   {
    results.textContent='Podaj liczby dla, których chcesz wyznaczyć NWD'
    numberA.style.borderColor="red"
    numberB.style.borderColor='red'
   }

};



btncount.addEventListener('click', funccheck);
