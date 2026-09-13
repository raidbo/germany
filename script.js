



/* =========================================
AI-Hinweis öffnen / schließen
========================================= */

function toggleNotice() {

    const notice = document.getElementById("aiNotice");

    if (!notice) return;

    notice.classList.toggle("closed");

    const button = notice.querySelector(".ai-notice-toggle");
    const icon = notice.querySelector(".ai-notice-icon");

    if (notice.classList.contains("closed")) {
        button.textContent = "+";
        icon.style.display = "none";
    } else {
        button.textContent = "−";
        icon.style.display = "block";
    }

}

/* =========================================
Informationsfelder öffnen / schließen
========================================= */
function toggleInfo(header) {

    const panel = header.parentElement;
    const content = panel.querySelector(".info-panel-content");

    if (content.style.display === "block") {

        content.style.display = "none";

    } else {

        content.style.display = "block";

    }
}


/* =========================================
Text kopieren
========================================= */
function copyInfo(event, button) {

    event.stopPropagation();

    const panel = button.closest(".info-panel");

    if (!panel) return;

    const title = panel.querySelector(".info-panel-header h3");
    const content = panel.querySelector(".info-panel-content");

    if (!title || !content) return;

    const paragraphs = content.querySelectorAll("p");

    let text = title.innerText.trim() + "\n\n";

    paragraphs.forEach((p, index) => {

        text += p.innerText.trim();

        if (index < paragraphs.length - 1) {
            text += "\n\n";
        }

    });

    navigator.clipboard.writeText(text).then(() => {

        const originalText = button.innerText;

        button.innerText = "✓";

        setTimeout(() => {
            button.innerText = originalText;
        }, 1200);

    }).catch(() => {

        alert("Der Text konnte nicht kopiert werden.");

    });

}






/* =========================
NAVIGATION BETWEEN STATES
========================= */
/* =========================
NAVIGATION BETWEEN STATES
German + English
========================= */

document.addEventListener("DOMContentLoaded", function () {


const navigation = document.getElementById("state-navigation");

if (!navigation) return;

const states = [
    {
        nameDE: "Baden-Württemberg",
        nameEN: "Baden-Württemberg",
        fileDE: "baden-wuerttemberg.html",
        fileEN: "baden-wuerttemberg-en.html"
    },
    {
        nameDE: "Bayern",
        nameEN: "Bavaria",
        fileDE: "bayern.html",
        fileEN: "bayern-en.html"
    },
    {
        nameDE: "Berlin",
        nameEN: "Berlin",
        fileDE: "berlin.html",
        fileEN: "berlin-en.html"
    },
    {
        nameDE: "Brandenburg",
        nameEN: "Brandenburg",
        fileDE: "brandenburg.html",
        fileEN: "brandenburg-en.html"
    },
    {
        nameDE: "Bremen",
        nameEN: "Bremen",
        fileDE: "bremen.html",
        fileEN: "bremen-en.html"
    },
    {
        nameDE: "Hamburg",
        nameEN: "Hamburg",
        fileDE: "hamburg.html",
        fileEN: "hamburg-en.html"
    },
    {
        nameDE: "Hessen",
        nameEN: "Hesse",
        fileDE: "hessen.html",
        fileEN: "hessen-en.html"
    },
    {
        nameDE: "Mecklenburg-Vorpommern",
        nameEN: "Mecklenburg-Western Pomerania",
        fileDE: "mecklenburg-vorpommern.html",
        fileEN: "mecklenburg-vorpommern-en.html"
    },
    {
        nameDE: "Niedersachsen",
        nameEN: "Lower Saxony",
        fileDE: "niedersachsen.html",
        fileEN: "niedersachsen-en.html"
    },
    {
        nameDE: "Nordrhein-Westfalen",
        nameEN: "North Rhine-Westphalia",
        fileDE: "nordrhein-westfalen.html",
        fileEN: "nordrhein-westfalen-en.html"
    },
    {
        nameDE: "Rheinland-Pfalz",
        nameEN: "Rhineland-Palatinate",
        fileDE: "rheinland-pfalz.html",
        fileEN: "rheinland-pfalz-en.html"
    },
    {
        nameDE: "Saarland",
        nameEN: "Saarland",
        fileDE: "saarland.html",
        fileEN: "saarland-en.html"
    },
    {
        nameDE: "Sachsen",
        nameEN: "Saxony",
        fileDE: "sachsen.html",
        fileEN: "sachsen-en.html"
    },
    {
        nameDE: "Sachsen-Anhalt",
        nameEN: "Saxony-Anhalt",
        fileDE: "sachsen-anhalt.html",
        fileEN: "sachsen-anhalt-en.html"
    },
    {
        nameDE: "Schleswig-Holstein",
        nameEN: "Schleswig-Holstein",
        fileDE: "schleswig-holstein.html",
        fileEN: "schleswig-holstein-en.html"
    },
    {
        nameDE: "Thüringen",
        nameEN: "Thuringia",
        fileDE: "thueringen.html",
        fileEN: "thueringen-en.html"
    }
];


/* =========================
   DETECT LANGUAGE
========================= */

const currentFile = window.location.pathname
    .split("/")
    .pop()
    .toLowerCase();

const isEnglish = currentFile.endsWith("-en.html");


/* =========================
   FIND CURRENT STATE
========================= */

const currentIndex = states.findIndex(function (state) {

    if (isEnglish) {
        return state.fileEN.toLowerCase() === currentFile;
    }

    return state.fileDE.toLowerCase() === currentFile;
});

if (currentIndex === -1) return;


/* =========================
   PREVIOUS BUTTON
========================= */

if (currentIndex > 0) {

    const previous = states[currentIndex - 1];

    const previousLink = document.createElement("a");

    previousLink.href = isEnglish
        ? previous.fileEN
        : previous.fileDE;

    previousLink.className = "state-nav-button previous-state";

    previousLink.innerHTML = isEnglish
        ? "← " + previous.nameEN
        : "← " + previous.nameDE;

    navigation.appendChild(previousLink);
}


/* =========================
   HOME BUTTON
========================= */

const homeLink = document.createElement("a");

homeLink.href = isEnglish
    ? "index-en.html"
    : "index.html";

homeLink.className = "state-nav-button home-state";

homeLink.textContent = isEnglish
    ? "Home"
    : "Startseite";

navigation.appendChild(homeLink);


/* =========================
   NEXT BUTTON
========================= */

if (currentIndex < states.length - 1) {

    const next = states[currentIndex + 1];

    const nextLink = document.createElement("a");

    nextLink.href = isEnglish
        ? next.fileEN
        : next.fileDE;

    nextLink.className = "state-nav-button next-state";

    nextLink.innerHTML = isEnglish
        ? next.nameEN + " →"
        : next.nameDE + " →";

    navigation.appendChild(nextLink);
}


});

