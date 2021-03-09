let contactSubmitBtn = document.querySelector('.comments__submit');
contactSubmitBtn.addEventListener('click', ()=> {
  let message = document.querySelector('.comments__input');
  let form = document.querySelector('.comment__form');

  if (checkForNull(message)){
        form.submit();
  }
})