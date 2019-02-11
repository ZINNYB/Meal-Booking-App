const form = document.getElementById('details-case');
const btn = document.getElementById('form-cancel-btn');
const mealCase = document.querySelectorAll('.process-case');


const formCase =document.getElementsByClassName('allforms-bg')[0];
// const mealCase = document.getElementsByClassName('process-case')[0];
// const form = document.getElementById('details-case');

// const btn = document.getElementById('form-cancel-btn');
// const mealCase = document.querySelectorAll('.process-case')


for (let i = 0; i < mealCase.length; i++) {
    mealCase[i].addEventListener('click', ()=>{
    form.style.display='block';});
}

const closeBtn =  ()=>{
	return form.style.display='none'; 
}

const closeForm = (event) => {
	if (event.target == form) {
	   form.style.display = "none";
	}
}
const foodInfo = (event)=>{
    if( event.target === mealCase )
	return formCase.style.display = 'btn';
}

for (let i = 0; i < mealCase.length; i++) {
    mealCase[i].addEventListener('click', ()=>{
        form.style.display='block'; });
}

window.addEventListener('click', closeForm);
if (btn) {
  btn. addEventListener("click",  closeBtn);
}


/* Modal Box */
const modalBox = function(modalBox, btnModalBoxOpen, btnModalBoxClose) {

  if (btnModalBoxOpen) {
    btnModalBoxOpen.addEventListener('click', () => {
      modalBox.style.display = 'block';
    });
  }

  if (btnModalBoxClose) {
    btnModalBoxClose.addEventListener('click', () => {
      if (btnModalBoxClose && modalBox) {
        modalBox.style.display = 'none';
      }
    });
  }
}

const loginFormWrapper = document.getElementById('login-form-wrapper');
const loginOpen = document.getElementById('login-open');
const loginClose = document.getElementById('login-close');
modalBox(loginFormWrapper, loginOpen, loginClose);
