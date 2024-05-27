function minWindow(s, t) {
    if (s.length === 0 || t.length === 0) return "";

    // Frequência dos caracteres em t
    let dictT = {};
    for (let char of t) {
        dictT[char] = (dictT[char] || 0) + 1;
    }

    // Número total de caracteres únicos em t que precisam estar na janela
    let required = Object.keys(dictT).length;

    // Variáveis para nossa janela deslizante
    let l = 0, r = 0;
    let formed = 0;
    let windowCounts = {};

    // Resultados (comprimento da janela, índice da esquerda, índice da direita)
    let ans = [-1, 0, 0];

    while (r < s.length) {
        // Adiciona um caractere da string à janela
        let char = s[r];
        windowCounts[char] = (windowCounts[char] || 0) + 1;

        // Se a contagem do caractere atual na janela é a mesma que na string t, incrementa `formed`
        if (dictT[char] && windowCounts[char] === dictT[char]) {
            formed++;
        }

        // Tente e contraia a janela até o ponto em que ela não seja mais 'válida'
        while (l <= r && formed === required) {
            char = s[l];

            // Salva a menor janela encontrada até agora
            if (ans[0] === -1 || r - l + 1 < ans[0]) {
                ans = [r - l + 1, l, r];
            }

            // Remove caracteres da janela à esquerda
            windowCounts[char]--;
            if (dictT[char] && windowCounts[char] < dictT[char]) {
                formed--;
            }

            l++;
        }

        // Expande a janela pela direita
        r++;
    }

    return ans[0] === -1 ? "" : s.slice(ans[1], ans[2] + 1);
}

// Exemplo de uso
let s = "ADOBECODEBANC";
let t = "ABC";
console.log(minWindow(s, t));  // Saída: "BANC"