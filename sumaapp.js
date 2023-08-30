const firstInput=document.querySelector('#first-number')
const secondInput=document.querySelector('#second-number')
const btn=document.querySelector('.btn')
const result=document.querySelector('.result')




const count=()=>
{
    const firstInputValue=parseInt(firstInput.value)
const secondInputValue=parseInt(secondInput.value)

    let tab1=[firstInputValue,secondInputValue]
    let sum=0
let sum2=0
if (tab1[0]<tab1[1])
{
    for(let i=tab1[0];i<=tab1[1];i++)
    {
        sum += i
   
    }
   return sum
}else if(tab1[0]>tab1[1])
{
    for(let y=tab1[0];y>=tab1[1];y--)
    {

        sum2+=y
    }
  return sum2
}


      
}


const answerForResult=()=>
{
    result.innerHTML=`Suma wynosi ${count()}`
}

btn.addEventListener('click',answerForResult)


