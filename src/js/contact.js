let submitBtn = document.querySelector('.contact__submit');
  let form = document.querySelector('.contact__form');

  function validateEmail(obj) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(obj.value).toLowerCase())) {
      obj.style.borderColor = '#868686';
      return true;
    }
    else {
      obj.style.borderColor = '#ff0000';
    }
}

  submitBtn.addEventListener('click', ()=> {
    let fullName = document.querySelector('#full_name');
    let email = document.querySelector('#email');
    let subject = document.querySelector('#subject');
    let message = document.querySelector('#message'); 

    if (checkForNull(fullName) 
        && validateEmail(email) 
        && checkForNull(subject) 
        && checkForNull(message)){
          form.submit();
    }
  })