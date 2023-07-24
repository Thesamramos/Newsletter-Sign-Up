const form = document.getElementById("form");
const btn = document.querySelector(".btn");
const inputEmail = document.getElementById("email");
const erro = document.querySelector(".erro");

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const emailValue = inputEmail.value.trim();

    if (emailValue === '' || !isValidEmail(emailValue)) {
        inputEmail.style.border = "solid 1px red";
        erro.style.display = "block";
    } else {
        inputEmail.style.border = "solid 1px var(--Grey)";
        erro.style.display = "none";
        sessionStorage.setItem('email', emailValue);
        window.location.href = "./html/success.html";
    }
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
