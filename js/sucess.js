const email = sessionStorage.getItem('email');

const textCard = document.querySelector(".add_email");
textCard.textContent = email;

const dismissBtn = document.getElementById("dismiss_btn");
dismissBtn.addEventListener('click', function() {
    window.location.href = "/index.html";
})