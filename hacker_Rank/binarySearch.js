// Função de busca binária
function buscaBinaria(array, valorProcurado) {
    let inicio = 0;
    let fim = array.length - 1;

    while (inicio <= fim) {
        const meio = Math.floor((inicio + fim) / 2);

        if (array[meio] === valorProcurado) {
            return meio; // Valor encontrado, retorna o índice
        } else if (array[meio] < valorProcurado) {
            inicio = meio + 1; // Continua na metade direita
        } else {
            fim = meio - 1; // Continua na metade esquerda
        }
    }

    return -1; // Valor não encontrado
}

// Exemplo de uso
const numeros = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const valorProcurado = 7;

const indice = buscaBinaria(numeros, valorProcurado);

if (indice !== -1) {
    console.log(`Valor ${valorProcurado} encontrado no índice ${indice}`);
} else {
    console.log(`Valor ${valorProcurado} não encontrado`);
}
