// Comecei definindo os valores como uma "let" para alterar os mesmos dentro do loop while

let primeiro = 0,
    segundo = 1,
    soma = 0;

// O valor pode ser alterado para qualquer número que desejar

let valor = 13;

while (true) {
    // A soma dos resultados será o valor do primeiro número da ordem e do segundo
    soma = primeiro + segundo;

    // Após a soma feita, transformo o primeiro da lista no segundo, para a ordem continuar do número que estaria na frente e do que vem após, por ex.: 1 > 2 > 3 > 5 ...
    primeiro = segundo;
    // Já o segundo número terá que ser a soma dos 2 anteriores, pois o número que fica na frente é a soma dos 2 anteriores, e o primeiro é o segundo valor dos anteriores
    segundo = soma;

    // Criei 2 ifs, um que identificará se o valor desejado é o mesmo da soma, assim identificado se o mesmo está dentro da sequência, e caso ele não esteja, o outro if retornará no console a mensagem
    if(valor == soma) {
        console.log(`O valor está dentro da sequência de Fibonacci. \nCálculo: ${segundo - primeiro} + ${primeiro} = ${soma}`);
        return;
    } else if (soma > valor) {
        console.log("O valor não está dentro da sequência de Fibonacci.");
        return;
    };
};