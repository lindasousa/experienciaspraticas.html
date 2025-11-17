const templates = {
    sobre: `
        <section id="missao" class="card col-12">
            <h2>Missão</h2>
            <p>Somos a organização Patapet Feliz, lutando pelos direitos dos animais...</p>
            <img src="img/imagemdepet1.jpg" alt="Cachorro Feliz" class="imagem-ilustrativa">
        </section>
        <section id="visao" class="card col-12">
            <h2>Visão</h2>
            <p>Conseguir ajudar o maior número de animais em abandono.</p>
            <img src="img/imagemdepet2.jpg" alt="Cachorro Feliz" class="imagem-ilustrativa">
        </section>
        <section id="valores" class="card col-12">
            <h2>Valores</h2>
            <p>Atuamos na proteção e resgate dos animais oferecendo tratamentos e cuidados...</p>
            <img src="img/imagemdepet3.jpg" alt="Gato Feliz" class="imagem-ilustrativa">
        </section>
        <section class="localizacao">
            <h2>Localização</h2>
            <iframe 
                width="400" 
                height="250" 
                style="border:0;" 
                loading="lazy" 
                allowfullscreen
                src="https://www.openstreetmap.org/export/embed.html?bbox=-46.646,-23.560,-46.626,-23.540&layer=mapnik">
            </iframe>
        </section>
    `,

    contato: `
        <section id="contato" class="contato">
            <h2>Contato</h2>
            <address>
                <p>Email: <a href="mailto:exemplo@exemplo.com">exemplo@exemplo.com</a></p>
                <p>Telefone: (00) 00000-0000</p>
            </address>
        </section>
    `,

    cadastro: `
        <section id="cadastro" class="formulario-moderno">
            <h2>Cadastro</h2>
            <form id="form-cadastro">
                <fieldset>
                    <legend>Informações Pessoais</legend>

                    <label for="nome">Nome Completo:</label>
                    <input type="text" id="nome" name="nome" required minlength="3">

                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" pattern="^\\(\\d{2}\\)\\s?\\d{5}-?\\d{4}$">

                    <button type="submit" class="btn">Enviar</button>
                </fieldset>
            </form>
        </section>
    `,

    projetos: `
        <section id="voluntariado" class="card card-destacado col-12">
            <h2>Voluntariado</h2>
            <img src="img/voluntariado.png" alt="Voluntariado" class="imagem-ilustrativa"> 
            <p>Ser voluntário é doar carinho, tempo e cuidado aos animais.</p>
            <p><a href="cadastro">Cadastre-se para ser voluntário</a></p>
        </section>

        <section id="como-doar" class="card card-destacado col-12">
            <h2>Como doar</h2>
            <p>Cada contribuição mantém nossos resgates, vacinas e cuidados com os animais.</p>
            <a href="pix-link-aqui" class="badge badge-urgente">Ajude Agora</a>
        </section>
    `
};
document.addEventListener("DOMContentLoaded", () => {

    const main = document.querySelector("main");
    const links = document.querySelectorAll(".menu-principal a, .dropdown-content a, .alert-link");

    function loadTemplate(page, hash = null) {

        if (!templates[page]) page = "sobre";

        main.innerHTML = templates[page];

        if (page === "cadastro") {
            ativarValidacaoFormulario();
        }

        if (hash) {
            const section = document.getElementById(hash);
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: "smooth" });
                }, 50);
            }
        }
    }

    links.forEach(link => {
        link.addEventListener("click", e => {
            const href = link.getAttribute("href");
            if (!href) return;

            if (href.startsWith("http") || href.startsWith("mailto")) return;

            e.preventDefault();

            const [page, hash] = href.split("#");
            loadTemplate(page, hash);

            history.pushState({ page, hash }, "", href);
        });
    });

    window.addEventListener("popstate", e => {
        const page = e.state?.page || "sobre";
        const hash = e.state?.hash || null;
        loadTemplate(page, hash);
    });

    loadTemplate("sobre");
});
function ativarValidacaoFormulario() {

    const form = document.getElementById("form-cadastro");
    if (!form) return;

    form.addEventListener("submit", e => {
        e.preventDefault();

        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const telefone = document.getElementById("telefone");

        let erros = [];

        if (nome.value.trim().length < 3) {
            erros.push("O nome deve ter no mínimo 3 caracteres.");
        }

        if (!email.value.includes("@") || !email.value.includes(".")) {
            erros.push("E-mail inválido.");
        }

        const telRegex = /^\(\d{2}\)\s?\d{5}-?\d{4}$/;
        if (telefone.value && !telRegex.test(telefone.value)) {
            erros.push("Telefone no formato incorreto. Exemplo: (11) 91234-5678.");
        }

        if (erros.length > 0) {
            alert(erros.join("\n"));
            return;
        }

        alert("Cadastro enviado com sucesso!");
        form.reset();
    });
}
