const inputBinario = document.getElementById('binario')
const inputDecimal = document.getElementById('decimal')

const buttonBinarioParaDecimal = document.getElementById('binarioParaDecimal')
const buttonDecimalParaBinario = document.getElementById('decimalParaBinario')

const resultado = document.getElementById('resultado')

function converterBinarioDecimal() {

    const binario = inputBinario.value 

    let decimal = 0
    let potencia = 1

    const regex = /^[01]+$/

    if (!regex.test(binario)) {
        alert('Binário Inválido')
        return
    }

    for (let index = binario.length - 1; index >= 0; index--) {
        const bit = parseInt(binario[index]);

        decimal += bit * potencia
        potencia *= 2

        resultado.textContent = `${binario} em Decimal é ${decimal}`
    }
}

function converterDecimalBinario() {

    let decimalValue = inputDecimal.value 
    let decimal = decimalValue
    let binario = '' 

    if (decimalValue != '' && decimalValue != 0) {
        while (decimal > 0) {
            let resto = decimal % 2
            binario = resto + binario
            decimal = decimal / 2 | 0
        }
        resultado.textContent = `${decimalValue} em Binário é ${binario}`
    } else if (decimalValue == "0") {
        resultado.textContent = `0 em Binário é 0`
    } else {
        alert('Por favor, insira um número decimal válido')
    }


    
}