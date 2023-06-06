const search=document.querySelector('.search')
const li=document.querySelectorAll('li')



    const searchEngine = e => {
        const text = e.target.value.toLowerCase();
    
        li.forEach(el => {
            if (el.textContent.toLowerCase().indexOf(text) !== -1) {
                el.style.display = 'block'
            } else {
                el.style.display = 'none'
            }
        })
    };
   

search.addEventListener('keyup',searchEngine)