// Defino uma constante para organizar os estados e seus valores
const estados = {
    "sp": 67836.43,
    "rj": 36678.66,
    "mg": 29229.88,
    "es": 27165.48,
    "outros": 19849.53
};

// Vou adicionar todos os valores dentro de uma array, para facilitar a soma total dos mesmos
const totalEstados = Object.values(estados)

let somaEstados = 0;


// Crio um pequeno loop para somar todos os valores dentro da array
for(let numero in totalEstados) {
    somaEstados += totalEstados[numero]
}

// Essa constante vai obter o nome dos estados desejados e calcular a porcentagem deles
const porcentagem = (estado) =>  {
    let final = (estados[estado] / somaEstados) * 100
        final = final.toFixed(2)

    return `${final}%`
}

// Os resultados serão retornados no console de acordo com o requisitado pelo desafio
console.log(`Porcentagem de cada Estado de acordo com o valor total.

Valor Total: R$${somaEstados}

SP - ${porcentagem("sp")}
RJ - ${porcentagem("rj")}
MG - ${porcentagem("mg")}
ES - ${porcentagem("es")}
Outros - ${porcentagem("outros")}
`)