const MDCRipple = mdc.ripple.MDCRipple;
const MDCTextField = mdc.textField.MDCTextField;

// const ripple = new MDCRipple(document.querySelector('.foo-button'));
const homeBtn = new MDCRipple(document.querySelector('.home-btn'));

const username = new MDCTextField(document.querySelector('.username'));
const email = new MDCTextField(document.querySelector('.email'));
const password = new MDCTextField(document.querySelector('.password'));
const confirmPass = new MDCTextField(document.querySelector('.confirm-password'));

for (const rootElem of [password, confirmPass]) {
    rootElem.root.querySelector("i").addEventListener("click", function(elem) {
        const currState = rootElem.input_.type === "password";
        rootElem.input_.type = currState ? "text" : "password";
        elem.target.innerText = currState ? "visibility_off" : "visibility";
    });
}

document.querySelector(".home-btn").addEventListener("click", function() {
    window.location.href = "/index.html";
});

document.querySelector(".cancel").addEventListener("click", function() {
    window.location.href = "/login.html";
});

document.querySelector(".forgot-pass").addEventListener("click", function() {
    window.location.href = "/forgotpass.html";
});


function validatePasses() {
    return confirmPass.input_.value === password.input_.value;
}

confirmPass.useNativeValidation = false;

confirmPass.input_.addEventListener("change", function(event) {
    if (!validatePasses()) {
        setTimeout(() => {
            confirmPass.helperTextContent = "De wachtwoorden komen niet overeen.";
            confirmPass.valid = false;
        }, 0);
    }
    // console.log(event.target.value);
});

confirmPass.input_.addEventListener("input", function(event) {
    if (validatePasses()) {
        setTimeout(() => {
            confirmPass.valid = true;
            confirmPass.helperTextContent = "";
        }, 0);
    }
})


document.querySelector(".create-account").addEventListener("click", function(event) {
    if (!validatePasses()) {
        event.preventDefault();
        return;
    }
    localStorage.setItem("username", username.value);
});

// document.querySelector(".password-msg").addEventListener("")