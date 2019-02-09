
const form = document.getElementById('form-container');

const btn = document.getElementById('form-cancel-btn');

const formCase =document.getElementsByClassName('allforms-bg')[0];
const mealCase = document.querySelectorAll('.process-case')[0]

const closeBtn =  ()=>{
   return form.style.display='none'; 
}

const closeForm = (event) => {
    if (event.target == form) {
        form.style.display = "none";
    }
}
const foodInfo = ()=>{
return formCase.style.display='block';
}

mealCase.addEventListener('click', foodInfo );
window.addEventListener('click', closeForm);
btn. addEventListener("click",  closeBtn);
