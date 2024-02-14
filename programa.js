const fs = require('fs');
fs.readFile('programa.txt', 'utf8', (err,data) =>{
    if (err){
        console.log(err)
        return
    }

    console.log(data)
    idade =  (data > 18) ? "Maior de idade": "menor de idade";   

    if(data > 18){
        console.log('O ano de nascimento é' + ' ' + (2024 - data))
        console.log(idade)
    }
    else{
        console.log('O ano de nascimento é' + (2024 - data))
        console.log(idade)
    }
})