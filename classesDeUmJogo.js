
class classHero{
    constructor(classe, ataqueH, nome, idade){
        this.classe = classe
        this.ataqueH = ataqueH
        this.nome = nome
        this.idade = idade
    }

    escrever(){
        console.log(`o ${this.classe} atacou usando ${this.ataqueH}!`)
    }
    dadosUsuario(){
        console.log(`Nome do usuário: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log(`Tipo: ${this.classe}`)
    }
    }

let guerreiro = new classHero("Guerreiro", "espada", "Daglol", "20")
let mago = new classHero("Mago", "magia", "Ricardinho", "70")
let monge = new classHero("Monge", "artes marciais", "Pedrinho", "65")
let ninja = new classHero("Ninja", "shuriken", "José", "33")


guerreiro.dadosUsuario()
guerreiro.escrever()