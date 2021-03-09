const phoneDescriptionBtn = document.querySelector('#phone__description');
  const phoneCommentsBtn = document.querySelector('#phone__comments');
  const phoneStatsTabs = document.querySelectorAll('.stats__content');
  
  const openCommentSection = () => {
    if (!phoneCommentsBtn.classList.contains('stats__btn_active')) {
      phoneDescriptionBtn.classList.toggle('stats__btn_active');
      phoneCommentsBtn.classList.toggle('stats__btn_active');
      phoneStatsTabs[0].style.display = 'none';
      phoneStatsTabs[1].style.display = 'block';
    }
  }
  const openDescriptionSection = () => {
    if (!phoneDescriptionBtn.classList.contains('stats__btn_active')) {
      phoneDescriptionBtn.classList.toggle('stats__btn_active');
      phoneCommentsBtn.classList.toggle('stats__btn_active');
      phoneStatsTabs[1].style.display = 'none';
      phoneStatsTabs[0].style.display = 'block';
    }
  }
  phoneCommentsBtn.addEventListener('click', openCommentSection);
  phoneDescriptionBtn.addEventListener('click', openDescriptionSection);