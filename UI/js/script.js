 
const form = document.getElementById('details-case');

const btn = document.getElementById('form-cancel-btn');
const mealCase = document.querySelectorAll('.process-case')
for (let i = 0; i < mealCase.length; i++) {
    mealCase[i].addEventListener('click', ()=>{
        form.style.display='block'; });
}
 
const closeBtn =  ()=>{
    form.style.display='none'; 
}

const closeForm = (event) => {
    if (event.target == form) {
        form.style.display = "none";
    }
}

window.addEventListener('click', closeForm);
btn. addEventListener("click",  closeBtn);
