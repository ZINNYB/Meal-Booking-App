
const form = document.getElementById('form-container');
const btn = document.getElementById('form-cancel-btn');

const closeBtn =  ()=>{
   return form.style.display='none'; 
}

const closeForm = (event) => {
    if (event.target == form) {
        form.style.display = "none";
    }
}
window.addEventListener('click', closeForm)
btn. addEventListener("click",  closeBtn);