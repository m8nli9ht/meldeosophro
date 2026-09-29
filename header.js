document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("site-header");
    if (!headerContainer) return;

    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            headerContainer.innerHTML = data;

            // Détection de la page active
            const currentPath = window.location.pathname.split("/").pop() || "index.html";
            const navLinks = headerContainer.querySelectorAll(".nav-links a");

            navLinks.forEach(link => {
                const href = link.getAttribute("href");
                if (href === currentPath) {
                    link.classList.add("active");
                }
            });

            // Gestion du menu burger mobile
            const navToggle = headerContainer.querySelector(".nav-toggle");
            const navMenu = headerContainer.querySelector(".nav-links");

            if (navToggle && navMenu) {
                navToggle.addEventListener("click", () => {
                    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
                    navToggle.setAttribute("aria-expanded", !isExpanded);
                    navToggle.classList.toggle("open");
                    navMenu.classList.toggle("open");
                });

                // Fermeture au clic sur un lien
                navLinks.forEach(link => {
                    link.addEventListener("click", () => {
                        navToggle.setAttribute("aria-expanded", "false");
                        navToggle.classList.remove("open");
                        navMenu.classList.remove("open");
                    });
                });
            }
        })
        .catch(error => console.error("Erreur lors du chargement du header :", error));
});
