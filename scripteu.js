const modulon=document.querySelector('#modulon')
const numberofmodulo=document.querySelector('#numberofmodulo')
const answer=document.querySelector('.answer')
const button=document.querySelector('.button')

const overview=document.querySelector('.overview')
const yournumber=document.querySelector('.yournumber')
const n=document.querySelector('.n')
const countModulo=()=>
{
   

    let moduloValue = parseInt(modulon.value);
    const numberofmoduloValue = parseInt(numberofmodulo.value);
  
  
  if(moduloValue===''&& numberofmodulo==='')
  {

    answer.innerHTML="Nie podałeś liczb!"
  }
   
    if(moduloValue<numberofmoduloValue)
    {
       
        while(moduloValue<numberofmoduloValue)
        {
            moduloValue+=numberofmoduloValue

        }
       
    }
    modulon.value=moduloValue
    console.log(moduloValue);
    const result = moduloValue/numberofmoduloValue;
    const reszt=moduloValue-((Math.floor(result))*numberofmoduloValue)
    
   
    if(numberofmodulo.value==='' && modulon.value==='')
    {
        overview.value=''
        answer.innerHTML=''

    }else{
        overviewFunction();
        answer.innerHTML = 'Wynik to ' + reszt;
    }
}

const overviewFunction=()=>
{
    yournumber.innerHTML=modulon.value;
    n.innerHTML=numberofmodulo.value;
    overview.innerHTML='Twoja operacja'+' to '+yournumber.innerHTML+' modulo '+n.innerHTML

}

button.addEventListener('click',countModulo)