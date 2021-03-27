const MDCRipple = mdc.ripple.MDCRipple;
const MDCTextField = mdc.textField.MDCTextField;
const MDCDialog = mdc.dialog.MDCDialog;

const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));

// const ripple = new MDCRipple(document.querySelector('.foo-button'));
const homeBtn = new MDCRipple(document.querySelector('.home-btn'));

const username = new MDCTextField(document.querySelector('.username'));
const password = new MDCTextField(document.querySelector('.password'));

document.querySelector("#toggle-pass-vis").addEventListener("click", function(elem) {
    const currState = password.input_.type === "password";
    password.input_.type = currState ? "text" : "password";
    elem.target.innerText = currState ? "visibility_off" : "visibility";
});

document.querySelector(".home-btn").addEventListener("click", function() {
    window.location.href = "/index.html";
});

document.querySelector(".register-btn").addEventListener("click", function() {
    window.location.href = "/register.html";
});

document.querySelector(".login-btn").addEventListener("click", function(event) {
    if (password.value !== "wachtwoord") { // fake authentication
        event.preventDefault();
        setTimeout(() => dialog.open(), 400)
        return;
    }
    localStorage.setItem("username", username.value);
});

document.querySelector(".forgot-pass").addEventListener("click", function() {
    window.location.href = "/forgotpass.html";
});