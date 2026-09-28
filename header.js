document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("site-header");
    if (!headerContainer) return;

    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            headerContainer.innerHTML = data;

            // Détection de la page active pour ajouter la classe .active
            const currentPath = window.location.pathname.split("/").pop() || "index.html";
            const navLinks = headerContainer.querySelectorAll("a");

            navLinks.forEach(link => {
                const href = link.getAttribute("href");
                if (href === currentPath) {
                    link.classList.add("active");
                }
            });
        })
        .catch(error => console.error("Erreur lors du chargement du header :", error));
});
