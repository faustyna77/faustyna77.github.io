const firstOption=document.querySelector('.first-option')
const secondOption=document.querySelector('.second-option')
const checkbox1=document.querySelector('.checkbox1')
const checkbox2=document.querySelector('.checkbox2')
const checkbox3=document.querySelector('.checbox3')
const checkbox4=document.querySelector('.checbox4')
const checkbox5=document.querySelector('.checbox5')
const TimeHalfSecond=document.querySelector('.TimeHalfSecond')
const timeend=document.querySelector('.timeend')
const NOsecond=document.querySelector('.NOsecond')
const halfTime=document.querySelector('.halfTime')

const NO=document.querySelector('.NO')
const NT=document.querySelector('.NT')
const newBtn=document.querySelector('.newBtn')
const resultDiv=document.querySelector('.div-third')

const thirdOption=document.querySelector('.third-option')
const timetrhitd=document.querySelector('.timethird')
const NOthird=document.querySelector('.NOthird')
const NTthird=document.querySelector('.NTthird')
const secondAnswer=document.querySelector('.secondAnswer')
const divFour=document.querySelector('.div-four')
const timeendfour=document.querySelector('.timeendfour')
const TimeHalfFour=document.querySelector('.TimeHalfFour')
const finallyMass=document.querySelector('.finallyMass')
const newBtn2=document.querySelector('.newBtn2')
const secondOptionResult=document.querySelector('.secondOptionResult')
const thirdAnswer=document.querySelector('.thirdAnswer')
const newBtn3=document.querySelector('.newBtn3')
const fourAnswer=document.querySelector('.fourAnswer')
const newBtn4=document.querySelector('.newBtn4')
const ReturnResult=()=>
{
    let NTVal=parseFloat(NT.value)
let NOVal=parseFloat(NO.value)
let halfTimeValue=parseFloat(halfTime.value)
    let timeVal=(-halfTimeValue)*(Math.log(NTVal/NOVal)/Math.log(2))
    
    const resultDiv=document.querySelector('.div-third')
    const resultContent=document.createElement('p')
    resultContent.textContent=`czas zaniku wynosi ${timeVal}`
    resultDiv.appendChild(resultContent)
    
   //resultDiv.textContent=`wynik czasu to ${timeVal}`
   
    
   

}
const ReturnSecondResult=()=>
{
   // let secondMass=(parseFloat(NOsecond.value))*(Math.pow(0.5,((parseFloat(timeend.value))/(parseFloat(TimeHalfSecond.value)))))
    //secondOptionResult.textContent=`wynik końcowa po czasie ${timeend.value} wynosi ${secondMass}`


  
        const initialMass = parseFloat(NOsecond.value);
        const elapsedTime = parseFloat(timeend.value);
        const halfLife = parseFloat(TimeHalfSecond.value);
    
        // Oblicz liczbę jąder po danym czasie
        const remainingNuclei = initialMass * Math.pow(0.5, elapsedTime / halfLife);
    
        secondOptionResult.textContent = `Liczba jąder po ${elapsedTime} jednostkach czasu wynosi: ${remainingNuclei}`;
    
    
}

const ReturnThirdResult=()=>
{
    

    
        const initialNuclei = parseFloat(NOthird.value);
        const finalNuclei = parseFloat(NTthird.value);
        const elapsedTime = parseFloat(timetrhitd.value);
    
        // Oblicz okres połowicznego rozpadu
        const halfLifeThird = elapsedTime / (Math.log(finalNuclei / initialNuclei) / Math.log(0.5));
    
        thirdAnswer.textContent = `Okres połowicznego rozpadu wynosi: ${halfLifeThird} jednostek czasu`;
    
    
    
}
const ReturnFourResult=()=>
{


       



        const TimeHalfFournew = parseFloat(TimeHalfFour.value);
const finallyMassnew = parseFloat(finallyMass.value);
const timeendfournew = parseFloat(timeendfour.value);

// Oblicz początkową masę substancji
const initialMass = finallyMassnew * (Math.pow(0.5, timeendfournew / TimeHalfFournew));

fourAnswer.textContent = `Początkowa masa substancji wynosi: ${initialMass} jednostek masy`;

    
    

}
const functionCheck=()=>
{
    if(checkbox1.checked)
    {
        firstOption.style. display='block'
    }else
    {
        firstOption.style.display='none'
    }
}
const functionSecondChecbox=()=>
{
    if(checkbox2.checked)
    {
        secondOption.style.display='block'
    }else{
        secondOption.style.display='none'
    }
}
const functionThirdChecbox=()=>
{
    if(checkbox3.checked)
    {
        thirdOption.style.display='block'
    }else{
        thirdOption.style.display='none'
    }

}


const funvtionFourCheckbox=()=>
{
    if(checkbox4.checked)
    {
        divFour.style.display='block'
    }else{
        divFour.style.display='none'
    }
}
checkbox1.addEventListener('change',functionCheck)
checkbox2.addEventListener('change',functionSecondChecbox)
checkbox3.addEventListener('change',functionThirdChecbox)
checkbox4.addEventListener('change',funvtionFourCheckbox)
newBtn.addEventListener('click', ReturnResult)
newBtn2.addEventListener('click',ReturnSecondResult)
newBtn3.addEventListener('click',ReturnThirdResult)
newBtn4.addEventListener('click',ReturnFourResult)