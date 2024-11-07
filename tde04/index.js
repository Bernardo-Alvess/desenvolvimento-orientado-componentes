const data = [
    { nome: "Daniel", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "João", idade: 22 },
    { nome: "Ana", idade: 28 }
];

function renderizarListaDePessoas() {
    const ul = document.getElementById("listaPessoas");

    const lista = data.map(item => {
        return `<li>${item.nome} - ${item.idade} anos</li>`;
    }).join('');

    ul.innerHTML = lista;
}

renderizarListaDePessoas();

const ola = mensagem => {
    console.log(mensagem)
}

ola('oi')