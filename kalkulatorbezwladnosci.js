const masa = document.querySelector('#masa');
const promien= document.querySelector('#promien');
const distance = document.querySelector('#tip');
const error = document.querySelector('.error');
const countBtn = document.querySelector('.count');
const resultInfo = document.querySelector('.result');
const Info = document.querySelector('.cost');
const cialo=document.querySelector('#cialo')


const showBill = () => {
    if (masa.value == '' || promien.value == '' || tip.value == 0) {
        error.textContent = 'Uzupełnij wszystkie pola!';
        resulttInfo.style.display = 'none'; 
    } else {
        error.textContent = '';
        countMass();
    }
};
const countBall= () => {
    const newMasa = parseFloat(masa.value);
    const newPromien = parseFloat(promien.value);
    const newDistance = parseFloat(distance.value);
    const wynik = (2/5)*newMasa*newPromien^2+newMasa*newDistance^2

    resultInfo.style.display = 'block';
    Info.textContent = wynik.toFixed(10);
    error.textContent=wynik.toFixed(10);
};

const  countRoller1=()=>
{
    const newMasa= parseFloat(masa.value);
    const newPromien = parseFloat(promien.value);
    const neeDistance = parseFloat(distance.value);
    const wynik = 0.5*newMasa*newPromien^2+newMasa*newDistance^2

    resultInfo.style.display = 'block';
    Info.textContent = wynik.toFixed(10);

}


const  countRoller=()=>
{
    const newMasa= parseFloat(masa.value);
    const newPromien = parseFloat(promien.value);
    const newDistance = parseFloat(distance.value);
    const wynik = 0.5*newMasa*newPromien^2+newMasa*newDistance^2

    resultInfo.style.display = 'block';
    Info.textContent = wynik.toFixed(10);

}


const countMass=()=>
{
    if(cialo.value=='kula')
    {
            countBall();
    }else{
        error.textContent="knjbjbjb"
    }
}


countBtn.addEventListener('click', countMass);