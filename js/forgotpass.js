const MDCRipple = mdc.ripple.MDCRipple;
const MDCTextField = mdc.textField.MDCTextField;
const MDCDialog = mdc.dialog.MDCDialog;

const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));
const homeBtn = new MDCRipple(document.querySelector('.home-btn'));
const email = new MDCTextField(document.querySelector('.email'));

document.querySelector(".home-btn").addEventListener("click", function() {
    window.location.href = "/index.html";
});

document.querySelector(".back-btn").addEventListener("click", function() {
    window.location.href = "/login.html";
});

function forgotPass() {
    document.querySelector("#email-address").innerText = email.value;
    setTimeout(() => dialog.open(), 400);
    return false;
}