function handleForgotPasswordSubmit(event) {
    event.preventDefault();

    const emailOrPhone = document.getElementById("forgotEmailPhone").value.trim();
    
    if (!emailOrPhone) {
        showPopup("Please enter your email or phone number.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (emailRegex.test(emailOrPhone)) {
        showPopup("A password reset link has been sent to your email.");
    } else if (phoneRegex.test(emailOrPhone)) {
        showPopup("A password reset code has been sent to your phone.");
    } else {
        showPopup("Please enter a valid email or phone number.");
    }
}

function showPopup(message) {
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popupMessage");
    
    popupMessage.textContent = message;
    popup.classList.remove("hidden");
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("hidden");
}
