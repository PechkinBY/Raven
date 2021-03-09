const blogElements = document.querySelectorAll(".blog__item");
blogElements[1].addEventListener('click', () => {
  document.location.href = './blog-single.html'
});