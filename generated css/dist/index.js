const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const insmall = document.getElementById("gapinsm");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("translate-x-full");
  sidebar.classList.toggle("z-50");
});

const menuItems = document.querySelectorAll('ul li a');

function clearActiveClasses() {
    menuItems.forEach(item => {
        item.classList.remove('text-green-600');
    });
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        clearActiveClasses(); 
        item.classList.add('text-green-600');
    });
});

function toggleSection(sectionId) {
    
    window.scrollTo({top: 0,
    behavior: 'smooth' });

    const sections = document.querySelectorAll("section"); 
    let isSectionActive = false;
    sections.forEach(section => {
        if (section.id === sectionId) {
            if (!section.classList.contains("hidden")) {
                isSectionActive = true; 
            } else {
                section.classList.remove("hidden");
            }
        } else {
            section.classList.add("hidden");
        }
    });

    if (isSectionActive) {
        return;
    }
}

function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    const button = input.nextElementSibling; 
    if (input.type === 'password') {
        input.type = 'text'; 
        button.textContent = 'Hide';
    } else {
        input.type = 'password'; 
        button.textContent = 'Show'; 
    }
  }
  
  function toggleLogoutPopup() {
    const logoutPopup = document.getElementById("logoutPopup");
    logoutPopup.classList.toggle("hidden");
  }

const logoutbutn=document.querySelector("#logoutPopup")
logoutbutn.addEventListener("click",()=>{
    toggleLogoutPopup()
})


  
