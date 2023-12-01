
let patente = ""
let soma = contaRanked(1, 0)

function contaRanked(vitorias, derrotas){
    let soma = vitorias - derrotas
    return soma
}

    if(soma <= 10){
        patente = "Ferro"
    }else if(soma >= 11 && soma <= 20){
            patente = "Bronze"
    }else if(soma >= 21 && soma <= 50){
            patente = "Prata"
    }else if(soma >= 51 && soma <= 80){
            patente = "Ouro"
    }else if(soma >= 81 && soma <= 90){
            patente = "Diamante"
    }else if(soma >= 91 && soma <= 100){
            patente = "Lendário"
    }else{
                patente = "imortal"
    }
       
    console.log("O herói tem saldo de " + soma + " vitórias e está no ranking " + patente)


