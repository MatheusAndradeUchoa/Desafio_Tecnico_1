const readline = require('readline');

// Cria uma interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função que recebe o número do usuário e executa a lógica
function somatorioDivisiveis3e5(numero) {
    let somatorio = 0;

    for (let i = 1; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            somatorio += i;
        }
    }

    return somatorio;
}

// Pergunta ao usuário
rl.question('Digite um numero inteiro positivo: ', (numero) => {
    // Converte a entrada do usuário para um número inteiro
    numero = parseInt(numero);

    // Verifica se o número é válido
    if (!isNaN(numero) && numero > 0) {
        const resultado = somatorioDivisiveis3e5(numero);
        console.log(`O somatorio dos valores divisiveis por 3 ou 5 abaixo de ${numero} é: ${resultado}`);
    } else {
        console.log('Por favor, digite um número inteiro positivo valido.');
    }

    rl.close();
});