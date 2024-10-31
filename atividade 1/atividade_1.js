// Começo criando uma variável para salvar os valores do indice e soma para serem usados no loop do resultado

let indice = 13,
soma = 0

// Vou usar um for let para obter o resultado de maneira simples, dando o valor inicial do K de 0, e enquanto ele for menor que o indice, dado pelo sinal de <, o K irá aumentar 1 unidade
for(let k = 0; k < indice; k++) {
    soma += k
    console.log(soma)
}

// O resultado final será o valor 78