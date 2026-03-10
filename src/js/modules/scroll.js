function scroll () {

  console.log('scroll');

  const scrollBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 600) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

document.querySelector('.btn-scroll').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


}


export default scroll;