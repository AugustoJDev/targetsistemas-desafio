// Aqui eu defini a empresa como uma constante, já que os valores não serão alterados e obterei tudo da pasta "valores.json"
const { empresa } = require("./valores.json");
// Usarei um Object.values() para colocar os valores dentro de uma array
// E em seguida um flat map para misturar todos dentro da mesma array, já que não é necessário separá-los por semana
const todosValores = Object.values(empresa)
    .flatMap(semanasArray => Object.values(semanasArray));

// Deixo as lets já definidas para usarmos os valores dentro do loop let, até todos os valores serem verificados e somados a media
let valoresArray = [];
let media = 0,
    skiped = 0,
    maioresMedia = 0;

// Faço uma simples verificação com if, para pular os números 0, somar os outros na média e criar uma nova array com os valores diferentes de 0
for(let numero in todosValores) {

    if(todosValores[numero] == 0) {
        continue;
    };
    valoresArray.push(todosValores[numero]);

    media += valoresArray[skiped];
    skiped++;
}

// Separo o menor e maior valor da array usando Math.min e Math.max
const menorValor = Math.min(...valoresArray);
const maiorValor = Math.max(...valoresArray);

// Calculo a média, dividindo o valor total da soma de todos os valores pela quantidade dos mesmos na array
media = media / valoresArray.length;

// Aqui é a função que tratará de filtrar quantos valores estão acima da média mensal
maioresMedia = valoresArray.filter(day => day > media).length;

// Retornará todos os valores requisitados pelo desafio no console
console.log(`
Maior Valor: ${maiorValor}
Menor Valor: ${menorValor}
Valor Médio: ${media}
Quantidade de dias que tem valores acima da média: ${maioresMedia}
`);