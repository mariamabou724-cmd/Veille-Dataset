// Liens du menu
const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", () => {

        links.forEach(l => l.classList.remove("active"));

        link.classList.add("active");

    });

});

// Bouton retour en haut
const topBtn = document.getElementById("top");

// Défilement
window.addEventListener("scroll", () => {

    // Barre de progression
    let scrollTop = document.documentElement.scrollTop;

    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let progress = (scrollTop / height) * 100;

    document.getElementById("progress-bar").style.width = progress + "%";

    // Afficher ou masquer le bouton
    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

// Retour en haut
topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});