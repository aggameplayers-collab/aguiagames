// Pequena animação de fade-in ao carregar
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "0.6s";
        document.body.style.opacity = 1;
    }, 100);
});
