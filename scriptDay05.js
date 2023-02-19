    /* Shopping List */
alert ("Bem-vindo! Clique em OK para continuar.")
let loop = true

let frutas = []
let verduras = []
let laticinios = []
let carnes = []
let produtosDeLimpeza = []

while(loop){
    let question = prompt("Deseja adicionar um item na sua lista de compras? Responda com sim ou não.")
    let getQuestion = question.toUpperCase()
        
    if(getQuestion == "SIM"){
        let getItem = prompt("Qual item você quer adicionar na lista?")
        let category = prompt("Digite o número da categoria do item adicionado: (1) Frutas | (2) Verduras | (3) Laticínios | (4) Carnes | (5) Produtos de Limpeza |")
        
        switch(category){
            case '1':
                frutas.push(' '+getItem)
                break
            case '2':
                verduras.push(' '+getItem)
                break
            case '3':
                laticinios.push(' '+getItem)        
                break
            case '4':
                carnes.push(' '+getItem)
                break
            case '5':
                produtosDeLimpeza.push(' '+getItem)
                break
            default:
                alert("Ooops... O número da categoria não foi encontrado.")
        }   
    }else{
        loop = false
        alert("Tudo bem, clique em OK para ver sua lista.")
        alert(`Lista de compras:\n Frutas: ${frutas}\n Verduras: ${verduras}\n Laticínios: ${laticinios}\n Carnes: ${carnes}\n Produtos de Limpeza: ${produtosDeLimpeza}`)
    }
}