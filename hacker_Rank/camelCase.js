function processData(input) {
    let lines = input.trim().split("\n");

    lines.forEach(line => {
        let [operation, type, words] = line.trim().split(";");

        if (operation === "S") {
            if (type === "V") {
                let result = "";
                for (let i = 0; i < words.length; i++) {
                    if (i !== 0 && words[i] === words[i].toUpperCase()) {
                        result += " " + words[i].toLowerCase();
                    } else {
                        result += words[i];
                    }
                }
                result.replace("()","")
                console.log(result);
            } else {
                words = words.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase()
                console.log(words.replace(/[()]/g, ''))
            }
        } else if (operation === "C") {
            let parts = words.split(" ");
            let result = "";
            parts.forEach((part, index) => {
                if (index === 0 && type !== "C") {
                    result += part.toLowerCase();
                } else {
                    result += part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
                }
            });
            if (type === "M") {
                result += "()";
            }
            console.log(result);
        }
    });
}

function isUpperCase(character) {
    return character === character.toUpperCase();
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});