
console.log(MinhaListaDePessoasComponente(data))

const data = [
    { nome: "Daniel", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "João", idade: 40 }
]

const MinhaListaDePessoasComponente = (data) => {
    return data.map(item => {
        return (
            `<li>${item.nome}</li>`
        )
    }).join("")
}
