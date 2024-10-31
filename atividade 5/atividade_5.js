// Aqui deixo a frase definida para ser escrita ao contrário
let texto = "3 pratos de trigo para 3 tigres tristes";

// Defino também uma let para transformar o texto em uma array, e depois uma array para dar push nas letras de maneira invertida
let textoArray = texto.split("")
let arrayInvertida = []

// Uso o let de base que usei nas atividades anteriores, porém de maneira invertida, não aumentando o valor de 0, mas sim diminuindo o valor total
// para pegar o valor do final da lista e puxar para o começo, assim invertendo as letras de posição
for(let i = textoArray.length - 1; i >= 0; i--) {
    arrayInvertida.push(textoArray[i])
}

// Imprimo a palavra no console usando o .join() para o texto retornar a uma string normal
console.log(arrayInvertida.join(""))