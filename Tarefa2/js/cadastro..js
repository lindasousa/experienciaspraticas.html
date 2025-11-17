document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const toast = document.getElementById("toast-cadastro");
    const closeBtn = toast.querySelector(".toast-close-btn");

    if (!form || !toast) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 
        
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    });

    closeBtn.addEventListener("click", () => {
        toast.classList.remove("show");
    });
});
