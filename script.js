// script.js
document.addEventListener("DOMContentLoaded", function () {
    // HOVER DOS CARDS DE PORTFÓLIO
    const cards = document.querySelectorAll(".portfolio-item");

    cards.forEach(function (card) {
        card.addEventListener("mouseenter", function () {
            card.classList.add("card-hover");
        });

        card.addEventListener("mouseleave", function () {
            card.classList.remove("card-hover");
        });
    });

    // HOVER DAS HABILIDADES
    const habilidades = document.querySelectorAll(".lista-habilidades li");
    const descricaoBox = document.getElementById("habilidade-descricao");

    habilidades.forEach(function (hab) {
        hab.addEventListener("mouseenter", function () {
            // remove destaque anterior
            habilidades.forEach(function (h) {
                h.classList.remove("habilidade-ativa");
            });

            // aplica destaque na habilidade atual
            hab.classList.add("habilidade-ativa");

            // atualiza o texto da descrição
            const texto = hab.getAttribute("data-descricao") || "";
            descricaoBox.textContent = texto;
        });

        hab.addEventListener("mouseleave", function () {
            // opcional: manter última descrição; se quiser limpar, descomente:
            // hab.classList.remove("habilidade-ativa");
            // descricaoBox.textContent = "Passe o mouse sobre uma habilidade para ver mais detalhes.";
        });
    });
});
