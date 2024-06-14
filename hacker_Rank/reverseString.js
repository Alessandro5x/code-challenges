// horas
// saroh

function reverse(string){
    let aux = []
    for (let i = string.length-1 ; i >= 0; i--){
        aux.push(string[i])
    }
    console.log(aux)
    return aux
}

function reverse2(str){
    return str.split('').reverse().join('')
}

reverse("horas")
