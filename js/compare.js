const MDCRipple = mdc.ripple.MDCRipple;
const MDCTopAppBar = mdc.topAppBar.MDCTopAppBar;
const MDCMenu = mdc.menu.MDCMenu;
const MDCDialog = mdc.dialog.MDCDialog;
const MDCSelect = mdc.select.MDCSelect;
const MDCTextField = mdc.textField.MDCTextField;
const MDCList = mdc.list.MDCList;
const MDCSnackbar = mdc.snackbar.MDCSnackbar;
const MDCTooltip = mdc.tooltip.MDCTooltip;
const MDCIconButtonToggle = mdc.iconButton.MDCIconButtonToggle;
const MDCDataTable = mdc.dataTable.MDCDataTable;


const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));
const dialogText = document.querySelector(".mdc-dialog__content");
const dialogTitle = document.querySelector(".mdc-dialog__title");

function displayDialog(html, title) {
    if (title) {
        dialogTitle.innerHTML = title;
        dialogTitle.style.height = null;
    } else {
        dialogTitle.innerHTML = "";
        dialogTitle.style.height = "1em";
    }
    dialogText.innerHTML = html;
    dialog.open();
}

const confirmationDialog = new MDCDialog(document.querySelector('#confirm-dialog'));
const confirmationDialogText = confirmationDialog.root.querySelector(".mdc-dialog__content");
const confirmationDialogTitle = confirmationDialog.root.querySelector(".mdc-dialog__title");

function displayConfirmationDialog(html, title) {
    if (title) {
        confirmationDialogTitle.innerHTML = title;
        confirmationDialogTitle.style.height = null;
    } else {
        confirmationDialogTitle.innerHTML = "";
        confirmationDialogTitle.style.height = "1em";
    }
    confirmationDialogText.innerHTML = html;
    confirmationDialog.open();
}

const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
const snackbarText = document.querySelector(".mdc-snackbar__label");

function displaySnackbar(text) {
    snackbarText.innerText = text;
    snackbar.open();
}

const selector = '.mdc-card__actions .mdc-icon-button';
const iconButtonToggles = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCIconButtonToggle(el);
});

// document.querySelectorAll(".mdc-tooltip").forEach((elem) => {
//     new MDCTooltip(elem);
// });

const homeBtn = new MDCRipple(document.querySelector('.home-btn'));
homeBtn.root.addEventListener("click", () => {window.location.href = "./index.html"});

const accountMenu = new MDCMenu(document.querySelector('.account-menu'));
accountMenu.setAnchorCorner(mdc.menu.Corner.BOTTOM_LEFT);

document.querySelector(".account-btn").addEventListener("click", function (event) {
    if (event.target.classList.contains("mdc-list-item") || event.target.parentNode.classList.contains("mdc-list-item")) {
    } else {
        accountMenu.open = true;
    }
});

const accountList = document.querySelector(".account-list");
if (localStorage.getItem("username")) { // ingelogd
    document.querySelector(".login-text").innerText = `Welkom terug, ${localStorage.getItem("username")}!`;
    accountList.innerHTML += `<li class="mdc-list-item" role="menuitem" onclick="lists();">
        <span class="mdc-list-item__ripple"></span>
        <span class="mdc-list-item__text">Mijn lijsten</span>
    </li>
    <li class="mdc-list-item" role="menuitem" onclick="logout();">
        <span class="mdc-list-item__ripple"></span>
        <span class="mdc-list-item__text">Uitloggen</span>
    </li>`;
} else {
    document.querySelector(".login-text").innerText = "U bent niet ingelogd.";
    accountList.innerHTML += `<li class="mdc-list-item" role="menuitem" onclick="login();">
        <span class="mdc-list-item__ripple"></span>
        <span class="mdc-list-item__text">Inloggen</span>
    </li>
    <li class="mdc-list-item" role="menuitem" onclick="register();">
        <span class="mdc-list-item__ripple"></span>
        <span class="mdc-list-item__text">Aanmelden</span>
    </li>`;
}
// accountMenu.layoutOptions();

function login() {
    window.location.href = "./login.html";
}

function logout() {
    localStorage.removeItem("username");
    window.location.reload();
}

function register() {
    window.location.href = "./register.html";
}

function lists() {
    window.location.href = "./lists.html";
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


document.querySelectorAll(".book-content-wrapper").forEach((elem) => {
    elem.addEventListener("scroll", function(event) {
        const pageCounter = elem.parentElement.querySelector(".page-number");
        const numPages = pageCounter.innerText.split("/")[1];
        pageCounter.innerText = `${Math.round(elem.scrollTop / elem.clientHeight) + 1}/${numPages}`;
    });
});

document.querySelectorAll(".btn-prev-page").forEach((elem) => {
    elem.addEventListener("click", function(event) {
        const contentWrapper = elem.parentElement.parentElement.querySelector(".book-content-wrapper");
        contentWrapper.scrollTop -= contentWrapper.clientHeight;
    });
});

document.querySelectorAll(".btn-next-page").forEach((elem) => {
    elem.addEventListener("click", function(event) {
        const contentWrapper = elem.parentElement.parentElement.querySelector(".book-content-wrapper");
        contentWrapper.scrollTop += contentWrapper.clientHeight;
    });
});



document.querySelectorAll(".btn-swap-transcription").forEach((elem) => {
    elem.addEventListener("click", function(event) {
        const contentWrapper = elem.parentElement.parentElement.querySelector(".book-content-wrapper");
        console.log(contentWrapper.children[1]);
        const dispScans = contentWrapper.children[1].style.display === "none";
        contentWrapper.children[0].style.display = dispScans ? "none" : "block";
        contentWrapper.children[1].style.display = dispScans ? "block" : "none";
    });
});

const compareCount = parseInt(localStorage.getItem("compareCount"));
if (compareCount < 3) {
    document.querySelector(".book-3").style.display = "none";
}
if (compareCount == 1) {
    document.querySelectorAll(".btn-swap-transcription")[1].click();
}