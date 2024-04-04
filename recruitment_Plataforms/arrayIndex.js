function indicesDosMaiores(array) {
    const indices = [];
    for (let i = 0; i < array.length; i++) {
        let maior = true;
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[i]) {
                maior = false;
                break;
            }
            console.log(array[i])
        }
        if (maior) indices.push(i + 1);
    }
    return indices;
}

const vetor = [40, 10, 30, 20];
const resultado = indicesDosMaiores(vetor);
console.log(resultado); // Saída: [4, 1, 3, 2]