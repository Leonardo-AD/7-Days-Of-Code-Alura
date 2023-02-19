/* Shopping List => With remove item option */
alert ("Bem-vindo! Clique em OK para continuar.")
let loop = 1
let frutas = []
let verduras = []
let laticinios = []
let carnes = []
let produtosDeLimpeza = []
    
while(loop == 1 || loop > 1){
    let question = ''
    if(loop > 1){
        question = prompt("Deseja adicionar um item na sua lista de compras? Responda com 'sim', 'não' ou 'remover'.")
    }else{
        question = prompt("Deseja adicionar um item na sua lista de compras? Responda com 'sim' ou 'não'.")
    }

    let getQuestion = question.toUpperCase()
    //ask to remove item if its a item on list > show list > get item to remove > confirm that its removed > back to initial loop > !item: informe that isn't on list
    if(getQuestion == "SIM"){
        let getItem = prompt("Qual item você quer adicionar na lista?")
        let category = prompt("Digite o número da categoria do item adicionado: (1) Frutas | (2) Verduras | (3) Laticínios | (4) Carnes | (5) Produtos de Limpeza |")
            
        switch(category){
            case '1':
                frutas.push(getItem)
                break
            case '2':
                verduras.push(getItem)
                break
            case '3':
                laticinios.push(getItem)        
                break
            case '4':
                carnes.push(getItem)
                break
            case '5':
                produtosDeLimpeza.push(getItem)
                break
            default:
                alert("Ooops... O número da categoria não foi encontrado.")
        }

        loop+=1
        
    }else if(getQuestion == "REMOVER" && loop > 1){//loop > 1 to disabled enter in this block in first loop
        let remove = prompt(`Lista de compras:\n Frutas: ${frutas}\n Verduras: ${verduras}\n Laticínios: ${laticinios}\n Carnes: ${carnes}\n Produtos de Limpeza: ${produtosDeLimpeza}\n\nQual item da lista deseja remover?`)
        let getToDelete = remove
        
        let checkCategory = prompt("Qual o número da categoria do item a ser removido? (1) Frutas | (2) Verduras | (3) Laticínios | (4) Carnes | (5) Produtos de Limpeza |")
        let itemToRemove = ''
        let deleteItem = ''

        switch(checkCategory){
            case '1':
                if(frutas.includes(getToDelete)){
                    itemToRemove = frutas.indexOf(getToDelete)
                    deleteItem = frutas.splice(itemToRemove, 1)
                }else{
                    alert("Não foi possível encontrar o item dentro da lista!")
                }
                break
            case '2':
                if(verduras.includes(getToDelete)){
                    itemToRemove = verduras.indexOf(getToDelete)
                    deleteItem = verduras.splice(itemToRemove, 1)
                }else{
                    alert("Não foi possível encontrar o item dentro da lista!")
                }
                break
            case '3':
                if(laticinios.includes(getToDelete)){
                    itemToRemove = laticinios.indexOf(getToDelete)
                    deleteItem = laticinios.splice(itemToRemove, 1)
                }else{
                    alert("Não foi possível encontrar o item dentro da lista!")
                }
                break
            case '4':
                if(carnes.includes(getToDelete)){
                    itemToRemove = carnes.indexOf(getToDelete)
                    deleteItem = carnes.splice(itemToRemove, 1)
                }else{
                    alert("Não foi possível encontrar o item dentro da lista!")
                }
                break
            case '5':
                if(produtosDeLimpeza.includes(getToDelete)){
                    itemToRemove = produtosDeLimpeza.indexOf(getToDelete)
                    deleteItem = produtosDeLimpeza.splice(itemToRemove, 1)
                }else{
                    alert("Não foi possível encontrar o item dentro da lista!")
                }
                break
            default:
                alert("Não foi possível encontrar essa categoria na lista de compras!")
                break
        }
        if(checkCategory > 0 && checkCategory <= 5){
            alert(`O item | ${getToDelete} | foi excluído da lista!\n Lista de compras:\n Frutas: ${frutas}\n Verduras: ${verduras}\n Laticínios: ${laticinios}\n Carnes: ${carnes}\n Produtos de Limpeza: ${produtosDeLimpeza}`)
        }    
    }else{
        loop = 0
        alert("Tudo bem. Clique em 'OK' para ver sua lista.")
        alert(`Lista de compras:\n Frutas: ${frutas}\n Verduras: ${verduras}\n Laticínios: ${laticinios}\n Carnes: ${carnes}\n Produtos de Limpeza: ${produtosDeLimpeza}`)
    }
}