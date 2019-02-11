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
  