// menu toggle
let toggle = document.getElementById("menu");
let navigation = document.querySelector(".nav-list");
let main = document.querySelector(".main");

const navList = document.getElementsByClassName("nav-list");
const allService = document.getElementById("all-services");
const strategy = document.getElementById("strategy");
const investment = document.getElementById("investments");
const business = document.getElementById("business");

// console.log(toggle)

allService.addEventListener('click', () =>{
    document.getElementById("strateg").style.display = 'none';
    document.getElementById("invest").style.display = 'none';
    document.getElementById("busines").style.display = 'none';
    document.getElementById("photo").style.display = 'block';
    
})
strategy.addEventListener('click', () =>{
    document.getElementById("photo").style.display = 'none';
    document.getElementById("invest").style.display = 'none';
    document.getElementById("busines").style.display = 'none';
    document.getElementById("strateg").style.display = 'flex';
    
})
investment.addEventListener('click', () =>{
    document.getElementById("photo").style.display = 'none';
    document.getElementById("strateg").style.display = 'none';
    document.getElementById("busines").style.display = 'none';
    document.getElementById("invest").style.display = 'flex';
    
})
business.addEventListener('click', () =>{
    document.getElementById("photo").style.display = 'none';
    document.getElementById("strateg").style.display = 'none';
    document.getElementById("invest").style.display = 'none';
    document.getElementById("busines").style.display = 'flex';
    
})



toggle.addEventListener('click', () =>{
    document.getElementById("list").style.display = 'block';
    console.log(document.getElementById("list"));
});

navList.addEventListener("click", (event) =>{
    if (event.target.hasAttribute("data-toggle")) {
        console.log("false");
    }
});



(() =>{

    const openNavMenu = document.querySelector(".open-nav-menu"),
    closeNavMenu = document.querySelector(".close-nav-menu"),
    navMenu = document.querySelector(".nav-menu"),
    menuOverlay = document.querySelector(".menu-overlay"),
    mediaSize = 991;

    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    // close the navMenu by clicking outside
    menuOverlay.addEventListener("click", toggleNav);

    function toggleNav() {
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
    }
    navMenu.addEventListener("click", (event) =>{
        if(event.target.hasAttribute("data-toggle") && 
            window.innerWidth <= mediaSize){
            // prevent default anchor click behavior
            event.preventDefault();
            const menuItemHasChildren = event.target.parentElement;
          // if menuItemHasChildren is already expanded, collapse it
        if(menuItemHasChildren.classList.contains("active")){
            collapseSubMenu();
        }
        else{
            // collapse existing expanded menuItemHasChildren
            if(navMenu.querySelector(".menu-item-has-children.active")){
                collapseSubMenu();
            }
            // expand new menuItemHasChildren
            menuItemHasChildren.classList.add("active");
            const subMenu = menuItemHasChildren.querySelector(".sub-menu");
            subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
        }
    });
    function collapseSubMenu(){
        navMenu.querySelector(".menu-item-has-children.active .sub-menu")
        .removeAttribute("style");
        navMenu.querySelector(".menu-item-has-children.active")
        .classList.remove("active");
    }
    function resizeFix(){
         // if navMenu is open ,close it
        if(navMenu.classList.contains("open")){
            toggleNav();
        }
         // if menuItemHasChildren is expanded , collapse it
            if(navMenu.querySelector(".menu-item-has-children.active")){
                collapseSubMenu();
        }
    }
  
    window.addEventListener("resize", function(){
        if(this.innerWidth > mediaSize){
            resizeFix();
        }
    });
})();

