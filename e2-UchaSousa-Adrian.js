//Ejercicio2
// Implementa una función llamada calculateMark() que reciba un número
// (entre 0 y 100)y devuelva la calificación en letras correspondiente.

const input = prompt("Introduce a number between 0 and 100")

function calculateMark(input) {
    const num = Number(input)
    //Validamos que el valor introducido es un numero comparando la conversión
    if (input === `${num}`){
        if (num >= 90 && num <= 100) alert("A")
        else if (num >= 80 && num <= 89) alert("B")
        else if (num >= 70 && num <= 79) alert("C")
        else if (num >= 60 && num <= 69) alert("D")
        else if (num >= 0 && num <= 59) alert("F")
        else alert("Invalid Mark")
    }else alert("ERROR, Pls introduce a number")
}

calculateMark(input)

