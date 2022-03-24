// portfolio name space
const portfolio = {};

portfolio.init = () => {
  portfolio.mobileNav();
  portfolio.resize();
  portfolio.skillsAnimate();
}

// function for mobile navigation
portfolio.mobileNav = () => {
  const menu = document.querySelector('#nav-icon');
  const dropdown = document.querySelector('.top-nav');

  menu.addEventListener('click', function() {
    menu.classList.toggle('open');
    dropdown.classList.toggle('expand');
    if (dropdown.style.opacity === '' || dropdown.style.opacity === '0') {
      dropdown.style.opacity = '1';
    } else if (dropdown.style.opacity === '1') {
      dropdown.style.opacity = '0';
    }
  });
}

// window resize event
portfolio.resize = () => {
  const dropdown = document.querySelector('.top-nav');

  window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
      dropdown.style.opacity = '1';  
    } else if (window.innerWidth <= 768) {
      dropdown.style.opacity = '0';
    }
  });   
}

// zoom effect
portfolio.skillsAnimate = () => {
  const attr = {
    "data-aos": "fade-up",
    "data-aos-duration":"400",
    "data-aos-easing": "ease-in-quad"
  }

  const skillIcons = document.querySelectorAll(".skills-icons li");

  skillIcons.forEach((icon) => {
        for(let key in attr) {
        icon.setAttribute(key, attr[key]);
      }
  })
}

portfolio.init();
AOS.init();