$(function(){
  /**************************************************************************
   *                               Intro                                    *
   **************************************************************************/
  let introPagination = document.getElementsByClassName('intro-pagination-dot');
  let introItems = document.getElementsByClassName('intro-list-item');
  let indexActiveIntro = 1;
  for(let i = 0; i < introPagination.length; i++){
    introPagination[i].addEventListener('click', ()=>{
      introPagination[indexActiveIntro].classList.add('intro-pagination-not-active-dot');
      introItems[indexActiveIntro].classList.add('hidden');

      indexActiveIntro = i;
      introPagination[i].classList.remove('intro-pagination-not-active-dot');
      introItems[i].classList.remove('hidden'); 
    })
  }

  let btnPreviousIntro = document.getElementById('btn-to-previous-intro');
  btnPreviousIntro.addEventListener('click', ()=>{
    if(indexActiveIntro !== 0){
      introPagination[indexActiveIntro].classList.add('intro-pagination-not-active-dot');
      introItems[indexActiveIntro].classList.add('hidden');
      indexActiveIntro--;
      introPagination[indexActiveIntro].classList.remove('intro-pagination-not-active-dot');
      introItems[indexActiveIntro].classList.remove('hidden');           
    }
  })

  let btnNextIntro = document.getElementById('btn-to-next-intro');
  btnNextIntro.addEventListener('click', ()=>{
    if(indexActiveIntro !== introPagination.length-1){
      introPagination[indexActiveIntro].classList.add('intro-pagination-not-active-dot');
      introItems[indexActiveIntro].classList.add('hidden');
      indexActiveIntro++;
      introPagination[indexActiveIntro].classList.remove('intro-pagination-not-active-dot');
      introItems[indexActiveIntro].classList.remove('hidden');           
    }
  })
  /**************************************************************************
   *                         Testimonial                                    *
   **************************************************************************/
  let testimonialPagination = document.getElementsByClassName('testimonial-pagination-dot');
  let testimonial = document.getElementsByClassName('testimonial-list-item');
  let indexActiveTestimonial = 1;

  for(let i = 0; i < testimonialPagination.length; i++){
    testimonialPagination[i].addEventListener('click', ()=>{
      testimonial[indexActiveTestimonial].classList.remove('active-review');
      testimonialPagination[indexActiveTestimonial].classList.remove('active-dot');
      indexActiveTestimonial = i;
      testimonial[i].classList.add('active-review');
      testimonialPagination[i].classList.add('active-dot');
    })
  }
});
