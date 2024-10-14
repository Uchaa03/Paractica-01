//Ejercicio 4
//Crea un juego sencillo en el que el usuario tiene
// que adivinar un número aleatorio entre 1 y 100.

//Numero a adivinar
const x = Math.floor(Math.random() * (100 - 1) + 1)
//Declaramos el numero en global para que lo compare el while en el bucle ira cambiando
let num
//Un contador para ir sumando intentos
let cont = 0

do {
    let input = prompt("Adivina el número")
    num = Number(input)
    if (input === `${num}`){
        if (num < x){
            alert("El numero a adivinar es mayor")
            cont += 1
        }else if (num > x){
            alert("El numero a adivinar es menor")
            cont += 1
        }else {
            cont += 1
            alert(`Has adivinado el numero en ${cont} intentos`)
        }
    }else{
        //Si se instroduce algo de manera incorrecta, no lo aceptara y saltara el error
        alert("Valor no valido")
    }
}while (x !== num)