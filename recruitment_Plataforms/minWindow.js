function minWindow(s, t) {
    if (s.length === 0 || t.length === 0) return "";

    // Frequência dos caracteres em t
    let dictT = {};
    for (let char of t) {
        dictT[char] = (dictT[char] || 0) + 1;
    }

    let required = Object.keys(dictT).length;

    let left = 0, right = 0, formed = 0;
    let windowCounts = {};

    // Resultado final (comprimento da janela, índice da esquerda, índice da direita)
    let ans = [-1, 0, 0];

    for (right = 0; right < s.length; right++) {
        let char = s[right];
        windowCounts[char] = (windowCounts[char] || 0) + 1;

        if (dictT[char] && windowCounts[char] === dictT[char]) {
            formed++;
        }

        while (left <= right && formed === required) {
            char = s[left];

            if (ans[0] === -1 || right - left + 1 < ans[0]) {
                ans = [right - left + 1, left, right];
            }

            windowCounts[char]--;
            if (dictT[char] && windowCounts[char] < dictT[char]) {
                formed--;
            }

            left++;
        }
    }

    return ans[0] === -1 ? "" : s.slice(ans[1], ans[2] + 1);
}

// Exemplo de uso
let s = "ADOBECODEBANC";
let t = "ABC";
console.log(minWindow(s, t));  // Saída: "BANC"