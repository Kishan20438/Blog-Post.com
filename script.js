const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-Link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

// btnPopup.addEventListener('click', ()=> {
//     wrapper.classList.add('active-popup');
// });

// iconClose.addEventListener('click', ()=> {
//     wrapper.classList.remove('active-popup');
// });

// function auth() {
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     if (email== "kishan@gmail.com" && password=="1234") {
//         window.location.assign("index.html");
//         alert("Login sucessfully");
        
//     } else {
//         alert("Invalid Information");
        
//     }
// }


