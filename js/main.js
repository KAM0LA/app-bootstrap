// Loader

window.addEventListener('DOMContentLoaded', () =>{

    const loader = document.querySelector('.loader')
    
    setTimeout(() =>{
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none'
        }, 500)
    }, 2000)
    
    })

function openNavbar() {
    document.getElementById("navbar-responsive").style.right = "0";
    document.body.classList.toggle("opacity");
  }
  function closeNavbar() {
    document.getElementById("navbar-responsive").style.right = "-100%";
  }
  
  document.getElementById("navbar-open").addEventListener("click", openNavbar);
  document.getElementById("navbar-close").addEventListener("click", closeNavbar);

  // BACKTOP function
window.addEventListener("scroll", function () {
    toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backtop.style.bottom = "50px";
    } else {
        backtop.style.bottom = "-50px";
    }
}

// Navbar Shrink
window.addEventListener("scroll", function () {
    shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
    if (scrollY > 100) {
        navbar.classList.add("navbar-shrink");
    } else {
        navbar.classList.remove("navbar-shrink");
    }
}

// Aos function
AOS.init({
    duration: 1000
});

