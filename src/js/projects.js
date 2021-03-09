const body = document.querySelector('body');
const projectsBlock = document.querySelector('.projects');
projectsBlock.addEventListener('click', (e)=> {
    let currentEl = e.target.parentElement;
    if (!currentEl.classList.contains('projects__item')) {
      return;
    }
    else {
      let projectsArr = document.querySelectorAll('.projects__item');
      if (currentEl.classList.contains('active')) {
        Array.from(projectsArr)
        .filter(item => item.classList.contains("active"))
        .map(item => item.classList.remove("active"));
        body.style.overflowY = 'auto';
      }
      else {
        currentEl.classList.add('active');
        body.style.overflowY = 'hidden';
      }
    }
  })