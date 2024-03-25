document.addEventListener("DOMContentLoaded", function () {
    // Encontrar todos os links de âncora dentro do menu
    var links = document.querySelectorAll("#Menu ul li a");

    // Adicionar um ouvinte de evento de clique a cada link
    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Impede o comportamento padrão de navegação

            // Obtém o valor do atributo href do link clicado
            var targetId = this.getAttribute("href").substring(1);

            // Encontrar o elemento da seção com o ID correspondente
            var targetElement = document.getElementById(targetId);

            // Adicionar ou remover classes para destacar a seção ativa (opcional)
            links.forEach(function (otherLink) {
                otherLink.classList.remove("active");
            });
            this.classList.add("active");

            // Exibir ou ocultar a seção conforme necessário
            document.querySelectorAll(".page").forEach(function (section) {
                section.style.display = "none";
            });
            targetElement.style.display = "block";
        });
    });
});