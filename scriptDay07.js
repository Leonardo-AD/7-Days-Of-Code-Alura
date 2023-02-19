//Calculator
let loop = 1

function sum(convertFirstValue,convertSecondValue){
    //let value1 = convertFirstValue
    //let value2 = convertSecondValue
    //let result = value1+value2
        //now i return the result of parameters, before was the way above     
    return convertFirstValue+convertSecondValue
}

function multiply(convertFirstValue,convertSecondValue){
    return convertFirstValue*convertSecondValue
}

function subtract(convertFirstValue,convertSecondValue){
    return convertFirstValue-convertSecondValue
}

function divide(convertFirstValue,convertSecondValue){
    return convertFirstValue/convertSecondValue
}//Awesome project, i did enjoy the 7 days of code challenge, this last one code are pretty good. We can use (do while)

while(loop == 1){
    let options = prompt("Escolha uma opção: (1) Somar | (2) Multiplicar | (3) Subtrair | (4) Dividir | (5) Sair")
    let getOptions = options
    let firstValue = ''   
    let convertFirstValue = ''
    let secondValue = ''
    let convertSecondValue = ''

    switch(getOptions){
        case '1':
            firstValue = prompt("Digite o primeiro valor da soma:")
            convertFirstValue = parseFloat(firstValue)

            secondValue = prompt("Digite o segundo valor da soma:")
            convertSecondValue = parseFloat(secondValue)
            
            let sumFunction = sum(convertFirstValue,convertSecondValue)
            alert(`${convertFirstValue} + ${convertSecondValue} = ${sumFunction}`)
            break
        case '2':
            firstValue = prompt("Digite o primeiro valor da multiplicação:")
            convertFirstValue = parseFloat(firstValue)

            secondValue = prompt("Digite o segundo valor da multiplicação:")
            convertSecondValue = parseFloat(secondValue)
            
            let multiplyFunction = multiply(convertFirstValue,convertSecondValue)
            alert(`${convertFirstValue} x ${convertSecondValue} = ${multiplyFunction}`)
            break
        case '3':
            firstValue = prompt("Digite o primeiro valor da subtração:")
            convertFirstValue = parseFloat(firstValue)

            secondValue = prompt("Digite o segundo valor da subtração:")
            convertSecondValue = parseFloat(secondValue)
            
            let subtractFunction = subtract(convertFirstValue, convertSecondValue)
            alert(`${convertFirstValue} - ${convertSecondValue} = ${subtractFunction}`)
            break
        case '4':
            firstValue = prompt("Digite o primeiro valor da divisão:")
            convertFirstValue = parseFloat(firstValue)

            secondValue = prompt("Digite o segundo valor da divisão:")
            convertSecondValue = parseFloat(secondValue)
            
            let divideFunction = divide(convertFirstValue,convertSecondValue)
            alert(`${convertFirstValue} / ${convertSecondValue} = ${divideFunction}`)
            break
        case '5':
            loop = 0
            alert("Até mais!")
            break
        default:
            alert("Opção não encontrada!")
    }
}    