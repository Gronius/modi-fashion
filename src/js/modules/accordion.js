function accordion () {



  const btns = document.querySelectorAll('.mobile-links__parent-btn');

  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      console.log('Click');

      const content = btn.nextElementSibling; // вибираємо наступний блок де прихований контент

      console.log('content');


     
      // const isOpen = content.classList.toggle('mobile-sub--open');// фіксуємо активність

      const isOpen = btn.classList.toggle('active'); // через кнопку щоб розвертати

      if (isOpen) {
          content.style.maxHeight = content.scrollHeight + 'px'; //висота в залежності від контенту
      } else {
        content.style.maxHeight = '0px';
      }

      // content.style.maxHeight = '200px';
    
    })
  })

}


export default accordion;