document.addEventListener("DOMContentLoaded", () => {
    const sections = {
        home: document.getElementById("home-section"),
        contact: document.getElementById("contact-section"),
        about: document.getElementById("about-section")
    };

    function showSection(section) {
        // Esconde todas as seções
        for (let key in sections) {
            sections[key].classList.add("hidden");
        }
        // Mostra a seção escolhida
        sections[section].classList.remove("hidden");
    }

    // Navegação por links
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const sectionId = link.getAttribute("href").substring(1);
            showSection(sectionId);
            window.history.pushState(null, "", `#${sectionId}`);
        });
    });

    // Exibe a seção correta com base no hash da URL
    const hash = window.location.hash.substring(1);
    if (sections[hash]) {
        showSection(hash);
    } else {
        showSection("home"); // Mostra "Home" como padrão
    }

    // Para lidar com botões de navegação do navegador (voltar/avançar)
    window.addEventListener("popstate", () => {
        const hash = window.location.hash.substring(1);
        if (sections[hash]) {
            showSection(hash);
        } else {
            showSection("home");
        }
    });

    // Manipulação do formulário de contato
    const form = document.getElementById("contact-form");
    const table = document.getElementById("contact-table");
    const tableBody = document.getElementById("table-body");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Objeto literal com os dados do formulário
        const contato = {
            nome: document.getElementById("name").value,
            email: document.getElementById("email").value,
            telefone: document.getElementById("phone").value
        };

        // Criação de uma nova linha na tabela com os dados
        const row = document.createElement("tr");
        row.innerHTML = `<td>${contato.nome}</td><td>${contato.email}</td><td>${contato.telefone}</td>`;
        tableBody.appendChild(row);

        // Mostra a tabela após adicionar o contato
        table.classList.remove("hidden");

        // Limpa o formulário
        form.reset();
    });
});
