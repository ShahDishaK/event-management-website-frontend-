
var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 40,
    modifier: 2,
    slideShadows: true,
  },
  loop:true,
  autoplay:{
delay:3000,
disableOnInteraction:false,
  }
});
// let color=document.getElementById("color-picker");

// function updateColor(){
// document.getElementById("display-color").style.backgroundColor=color.value;
// }

// let themeToggler=document.querySelector('.theme-toggler');
// toggleBtn=document.querySelector('.toggle-button');
// toggleBtn.onclick=()=>{
//   themeToggler.classList.toggle('active');
// }

// window.onscroll=()=>{
//   navbar.classList.remove('active');
//   themeToggler.classList.remove('active');

// }

// document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
//   btn.click=()=>{

//   }
// })


  
function f1() {
  c = document.getElementById("bgc");
  let computedStyle = window.getComputedStyle(c);
  let backgroundValue = computedStyle.getPropertyValue('background');
  dc=document.getElementsByClassName("dc");

  if (backgroundValue.includes('linear-gradient')) {
      c.style.background = 'black';
      for(i=0;i<dc.length;i++){
        dc[i].style.color='white';
        
      }
  } else {
      c.style.background = "linear-gradient(to right, white, #e8dcfc)";
      for(i=0;i<dc.length;i++){
        dc[i].style.color='black';
       
      }
  }
}



