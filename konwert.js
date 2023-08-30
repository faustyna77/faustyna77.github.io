const firsSpan=document.querySelector('.first-span')
const secondSpan=document.querySelector('.second-span')
const initInput=document.querySelector('.init-input')
const changeBtn=document.querySelector('.changeBtn')
const resetBtn=document.querySelector('.resetBtn')
const reverse=document.querySelector('.reverse')

const info=document.querySelector('.info')



const count=()=>
{
    const initInputValue=parseInt(initInput.value)
    if(firsSpan.textContent=='Celcjusz')
    {
       
       
        const result=initInputValue+273
        info.textContent=` Wynik w stopniach Celcjusza to ${result}`
        console.log(result)
    }else{
        const resultTwo=initInputValue-273
        console.log(resultTwo)
        info.textContent=`Wynik w stopniach Kelwina to ${resultTwo}`
    }
}


const change=()=>
{
    if(firsSpan.textContent=='Celcjusz' && secondSpan.textContent=='Kelwin')
    {
        firsSpan.textContent='Kelwin'
        secondSpan.textContent='Celcjusz'
    }else{
        firsSpan.textContent='Celcjusz'
        secondSpan.textContent='Kelwin'
    }
   
}


const resetFunction=()=>
{
    initInput.value=''
    info.textContent=''


}
changeBtn.addEventListener('click',count)
reverse.addEventListener('click',change)
resetBtn.addEventListener('click',resetFunction)