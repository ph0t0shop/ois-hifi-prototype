const MDCRipple = mdc.ripple.MDCRipple;
const MDCTopAppBar = mdc.topAppBar.MDCTopAppBar;
const MDCMenu = mdc.menu.MDCMenu;
const MDCDialog = mdc.dialog.MDCDialog;
const MDCSelect = mdc.select.MDCSelect;
const MDCTextField = mdc.textField.MDCTextField;
const MDCList = mdc.list.MDCList;

const MDCTooltip = mdc.tooltip.MDCTooltip;
const MDCIconButtonToggle = mdc.iconButton.MDCIconButtonToggle;


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

const MDCSnackbar = mdc.snackbar.MDCSnackbar;
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

const locationSelect = new MDCSelect(document.querySelector('.location-select'));
const homeBtn = new MDCRipple(document.querySelector('.home-btn'));
homeBtn.root.addEventListener("click", () => {window.location.href = "./index.html"});

for (const option of ["Antwerp (city)", "Artois", "Bergen Op Zoom", "Brabant", "Brabantse steden (Leuven etc)", "Chiny & Luxembourg", "Deventer (Gelderland)", "Drenthe", "Flanders", "Friesland", "Gelderland", "Groningen", "Groningen (stad)", "Groningen ende Ommelande", "Habsburg Netherlands (all)", "Hainaut", "Holland", "Holland en Zeeland", "Lille", "Low Countries", "Luxembourg en Chiny", "Namur", "Overijssel", "Roermond (BovenGelder)", "Southern Netherlands", "Staats-Brabant", "Tiel", "Utrecht", "Vlaanderen", "Zeeland"]) {
    const liElem = document.createElement("li");
    liElem.className = "mdc-list-item";
    liElem.setAttribute("aria-selected", "false");
    liElem.dataset.value = option;
    liElem.setAttribute("role", "option");
    liElem.innerHTML = `<span class="mdc-list-item__ripple"></span>
    <span class="mdc-list-item__text">
        ${option}
    </span>`;
    locationSelect.root.querySelector(".mdc-list").appendChild(liElem);
}

locationSelect.layoutOptions();

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

const onderwerpSelect = new MDCSelect(document.querySelector('.onderwerp-select'));
const subjects = ["Bedelmonniken", "Bedel brief", "Bedel verbod", "Festivals / feestdagen", "Alcoholconsumption", "Introductie van festivals", "Religieuze spellen", "Naar de mis gaan", "markt", "processies", "reizen", "Zondagsarbeid", "Spelen", "dansen", "Plezier", "reductie", "Arbeidsverplichtingen", "bedevaart", "geestelijkheid", "Ambtsuitoefening", "administratie", "Werkbepalingen", "toezicht", "Opleiding", "Bestraffing", "controle", "Levenswijze", "Prediking", "kwalificaties", "Collectes/ donaties", "Toezicht/ controle", "Misdrijf", "Gedrag", "toelating", "Godslastering", "tolerantie", "omstander", "overheid", "God", "kerk", "Moeder van Christus en heiligen", "Vloeken en vloeken", "Geboorte verschillen", "Kerkelijk bestuur", "heffing", "constructie", "dienaar", "gebouw", "Bevoegdheid van de kerk", "Kerkboeken", "Collecte", "Voorganger-positie bezetting", "boekhouding", "????", "Activa/ vermogen", "visitatie", "Kerkelijke discipline", "onbekwaamheid", "kerkgebouw", "intimidatie", "Geestelijke boete", "Naleving van sacramenten", "Ontheiliging van de Godsdienst", "Ontheiliging van Plaatsen", "Vasten", "Gebedsverplichting", "Negeren van een ban", "kloosters", "asiel", "toezicht", "toewijzingen", "ingang", "economie", "Crimineel geweld", "ban", "Geloof", "Buitenlands lidmaatschap", "beperking", "toegeeflijkheid", "religieuze bekering", "Uitoefening van religie", "tolerantie", "ban", "toelating", "Religieuze opvoeding", "Bijbel", "gebed", "kerkdienst", "preek", "Religieuze educatie", "zondagsschool", "Sekten / ketterij", "Verbod op verblijf", "Vreemden", "Missieverbod", "Doper", "controle", "Samenkomstverbod", "Veld-predikant", "Sabbat houden", "Alcoholconsumption", "Naar de kerk gaan", "markt", "reizend", "zondag Work", "Spelen", "dansen", "Pleasures", "Bevolking, standen en overheid", "Heffingen en belastingen", "Verblijf", "Adel", "Arbeiders", "buitenlanders", "Voorwaarden", "accommodatie", "bedienden / dienaren", "knechten", "verdrijving", "Lijfeigene", "Meid", "Meldingsplicht", "Dagloners", "Onderdanen", "Verbod", "Voordelen", "Emigratie", "aftrek van geld", "Naheffing van belasting", "aansporing", "beperkingen", "Oorlogsgevaar", "machtiging", "Controle", "terugkeer", "ban", "Vermogen", "Vermogenstransfer", "Recruiter", "Stedelingen", "InternalMigration", "aftrek van geld", "Beperking", "Oorlogsgevaar", "Reservist", "burgerrechten", "eed van burgerschap", "acquisitie", "CouncilElections", "Verlies", "Immigratie", "Arbeider", "Bepalingen", "bedienden / dienaren", "Handworkers", "knechten", "Lijfeigenen", "fabrikanten", "soldaten", "Dagloners", "Voordelen", "Front services / officiële taken", "boeren", "????", "Vrijstelling", "burgers", "Looncompensatie", "?????", "registratie", "Crediten", "Plaatselijke overheid", "heffing", "Ambten", "Herders", "Smid", "Toelating", "burgemeester", "Hoofd van de gemeenschap", "Kwalificatie", "verkiezingen", "taken"];

for (const option of subjects) {
    const liElem = document.createElement("li");
    liElem.className = "mdc-list-item";
    liElem.setAttribute("aria-selected", "false");
    liElem.setAttribute("data-value", option);
    liElem.setAttribute("role", "option");
    liElem.innerHTML = `<span class="mdc-list-item__ripple"></span>
    <span class="mdc-list-item__text">
        ${option}
    </span>`;
    onderwerpSelect.root.querySelector(".mdc-list").appendChild(liElem);
}

onderwerpSelect.layoutOptions();

const sidebarList = new MDCList(document.querySelector('.sidebar-list'));
const sidebarRipples = sidebarList.listElements.map((listItemEl) => new MDCRipple(listItemEl));

onderwerpSelect.listen('MDCSelect:change', () => {
    // alert(`Selected option at index ${onderwerpSelect.selectedIndex} with value "${onderwerpSelect.value}"`);
});



const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);


const searchBar = new MDCTextField(document.querySelector('.search-bar'));
const startDate = new MDCTextField(document.querySelector('.start-date'));
const endDate = new MDCTextField(document.querySelector('.end-date'));
const pathMap = {};

document.querySelectorAll("area").forEach((elem) => {
    const path = elem.getAttribute("coords").split(",");
    let odd = false;
    const res = [];
    for (const elem of path) {
        odd = !odd;
        res.push(elem);
        if (odd) {
            res.push(",");
        } else {
            res.push(" ");
        }
    }
    pathMap[elem.getAttribute("title")] = res.join("");
});

imageMapResize();

const mapPoly = document.querySelector("#mapPoly");
const selectedPoly = document.querySelector("#selectedPoly");

let hoverCounter = 0;

function mapHover(elem) {
    hoverCounter++;
    mapPoly.setAttribute("points", pathMap[elem.getAttribute("title")]);
}

function mapMouseOut(elem) {
    hoverCounter--;
    if (hoverCounter <= 0) {
        mapPoly.setAttribute("points", "");
    }
}

function mapClick(elem) {
    locationSelect.value = elem.getAttribute("title");
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

locationSelect.listen('MDCSelect:change', () => {
    if (pathMap.hasOwnProperty(locationSelect.value)) {
        selectedPoly.setAttribute("points", pathMap[locationSelect.value]);
    } else {
        const keys = Object.keys(pathMap);
        selectedPoly.setAttribute("points", pathMap[keys[getRandomInt(keys.length)]]);
    }
});

const cardBtn = new MDCRipple(document.querySelector('.show-card-btn'));
const sidebar = document.querySelector(".sidebar");
const nlKaart = document.querySelector(".nl-kaart");
const otherInfo = document.querySelector(".other-info");
let sidebarExpand = false;
cardBtn.root.addEventListener("click", () => {
    sidebarExpand = !sidebarExpand;
    if (sidebarExpand) {
        otherInfo.style.display = "none";
        const mainHeight = sidebar.clientHeight - 20;
        const ratio = mainHeight / nlKaart.clientHeight;
        sidebar.style.width = Math.round((250 * ratio)) + "px";
    } else {
        sidebar.style.width = "250px";
    }
});

sidebar.addEventListener('transitionend', () => {
    if (!sidebarExpand && sidebar.clientWidth <= 275) {
        otherInfo.style.display = "block";
    }
    window.dispatchEvent(new Event('resize'));
});

document.querySelectorAll(".mdc-card").forEach((elem) => {
    elem.addEventListener("click", (event) => {
        displayDialog("Link: <a href=\"https://books.google.nl/books?id=6P1YAAAAcAAJ&pg=RA1-PT16&source=gbs_selected_pages&cad=3#v=onepage&q&f=false\">https://books.google.nl/books?id=6P1YAAAAcAAJ&pg=RA1-PT16&source=gbs_selected_pages&cad=3#v=onepage&q&f=false</a><br>Publicatiejaar: 1681<br>Locatie: Holland", "Metadata")
    });
});

document.querySelectorAll(".location-btn").forEach((elem) => {
    elem.addEventListener("click", (event) => {
        event.stopPropagation();
        locationSelect.value = elem.children[2].textContent;
    });
    elem.addEventListener("mouseover", (event) => {
        mapPoly.setAttribute("points", pathMap[elem.children[2].textContent]);
    });
    elem.addEventListener("mouseout", (event) => {
        mapPoly.setAttribute("points", "");
    });
});

document.querySelectorAll(".bookmark-btn").forEach((elem) => {
    elem.addEventListener("click", (event) => {
        event.stopPropagation();
        if (!localStorage.getItem("username")) {
            displayDialog("U bent niet ingelogd. Om teksten te kunnen opslaan, moet u eerst inoggen.");
            return;
        }
        if (elem.classList.contains("mdc-icon-button--on")) {
            displaySnackbar("Toegevoegd aan mijn lijsten!");
        } else {
            displaySnackbar("Weggehaald uit mijn lijsten.");
        }
    });
});

let compareCount = 0;

document.querySelectorAll(".add-compare-btn").forEach((elem) => {
    elem.addEventListener("click", (event) => {
        event.stopPropagation();
        if (elem.classList.contains("mdc-icon-button--on")) {
            compareCount++;
            displaySnackbar("Toegevoegd aan vergelijking. Druk op \"Start vergelijking\" om te vergelijken.");
        } else {
            compareCount--;
            displaySnackbar("Weggehaald uit vergelijking.");
        }
    });
});

document.querySelector(".btn-start-comparison").addEventListener("click", function(event) {
    if (compareCount <= 0) {
        displayDialog("U moet minstens één tekst selecteren om te kunnen vergelijken.");
        return;
    }
    localStorage.setItem("compareCount", compareCount);
    window.location.href = "./compare.html";
});

const fields = [searchBar, startDate, endDate, locationSelect, onderwerpSelect];
const keys = ["query", "startDate", "endDate", "location", "subject"];
for (let i = 0; i < keys.length; i++) {
    const value = localStorage.getItem(keys[i]);
    if (value) fields[i].value = value;
} 

const searchBtn = new MDCRipple(document.querySelector(".search-btn"));
searchBtn.root.addEventListener("click", () => {
    const values = [searchBar.value, startDate.value, endDate.value, locationSelect.value, onderwerpSelect.value];
    if (!values.some((val) => !!val)) {
        displayDialog("Voer minstens één zoekterm in.");
        return;
    }
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = values[i];
        localStorage.removeItem(key);
        if (value) localStorage.setItem(key, value);
    }
    window.location.href = "./search.html";
});