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
(function() {

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }

    function init() {
      const botaoDark = document.getElementById("toggle-dark");
      const botaoContrast = document.getElementById("toggle-contrast");

      document.body.classList.remove("dark-mode", "high-contrast");

      try { localStorage.removeItem("site-theme"); } catch (e) {   }


      function setPressed(button, pressed) {
        if (!button) return;
        button.setAttribute("aria-pressed", pressed ? "true" : "false");
      }

      if (botaoDark) {
        botaoDark.addEventListener("click", () => {
          const active = document.body.classList.toggle("dark-mode");

          document.body.classList.remove("high-contrast");

          setPressed(botaoDark, active);
          setPressed(botaoContrast, false);
        });
      }

      if (botaoContrast) {
        botaoContrast.addEventListener("click", () => {
          const active = document.body.classList.toggle("high-contrast");
        
          document.body.classList.remove("dark-mode");
          setPressed(botaoContrast, active);
          setPressed(botaoDark, false);
        });
      }
    }
  })();
});