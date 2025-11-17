document.addEventListener("DOMContentLoaded", () => {
    const botaoMenu = document.getElementById("menu-toggle");
    const menu = document.querySelector(".menu-principal");
    
    if (botaoMenu && menu) {
        botaoMenu.addEventListener("click", () => {
            menu.classList.toggle("menu-aberto");
        });
        menu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                menu.classList.remove("menu-aberto");
            });
        });
    }
});
