let firstNumber = Number(prompt("Olá, por favor digite o primeiro número:"))
let secondNumber = Number(prompt("Por favor, agora digite o segundo número:"))

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração do primeiro número pelo segundo é: ${sub}`)
alert(`A multiplicação dos dois números é: ${mult}`)
alert(`A divisão do primeiro número pelo segundo é: ${div.toFixed(2)}`)
alert(`O resto da divisão do primeiro número pelo segundo é: ${restDiv}`)

const restResult = sum % 2


if (restResult == 0){
    alert(`A soma dos dois números é par: ${sum}`)
}else{
    alert(`A soma dos dois números é ímpar: ${sum}`)
}

if (firstNumber == secondNumber){
    alert("Os números inseridos são iguais.")
}else{
    alert("Os números inseridos são diferentes.")
}