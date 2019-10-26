console.log('hello')

var dataKey =["dumb","ways","the","best"]
var x;
var word = 'dumbwaysthebest'
console.log(word.length)



ken =  word.slice(0,-11)
ken2 =  word.slice(4,-7)
console.log(ken+' '+ken2)


function chek(dataKey, word){
    if(dataKey[0] == word.slice(0,-11) && dataKey[1] == word.slice(4,-7)){
        console.log(dataKey[0]+'=>'+Boolean(dataKey[0]))
        console.log(dataKey[1]+'=>'+Boolean(dataKey[1]))

    }else(
        console.log('salah')
    )
}

chek(dataKey,word)