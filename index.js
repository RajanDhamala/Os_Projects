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

function togglePassword(fieldId, button) {
    const passwordField = document.getElementById(fieldId);
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        button.innerHTML = 'hide';
    } else {
        passwordField.type = 'password';
        button.innerHTML = 'show'; 
    }
}
