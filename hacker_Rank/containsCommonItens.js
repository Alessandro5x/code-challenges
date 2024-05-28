function containsCommonItem(arr1,arr2){
    const result = arr1.some(item => arr2.includes(item))
    console.log(result)
    return result
}

function containsCommonItem(arr1,arr2){
    let map = {}
    for(let i = 0;i<arr1.length;i++){
        if(!map[arr1[i]]){
            const item = arr1[i]
            map[item] = true;
        }
    }
    
    for(let i = 0;i<arr2.length;i++){
        if(map[arr2[i]]){
            return true
        }
    }
    console.log(false)
    return false
}

containsCommonItem(['a','b','c'],['x','a'])