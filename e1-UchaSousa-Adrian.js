// Ejerercicio1
// Implementa un script que pida al usuario una cadena de caracteres como entrada, y aplique
// un cifrado ROT-10 y devuelva la cadena codificada. Los caracteres
// no alfabéticos deben permanecer sin cambios.

// Arrays de letras para cifrar
const letters =      "ABCDEFGHIJKLMNOPQRSTUVWYZabcdefghijklmnopqrstuvwyz"
const lettersRot10 = "KLMNOPQRSTUVWYZABCDEFGHIJklmnopqrstuvwyzabcdefghij"

const input = prompt("Introduce a letter or phrase to cipher")

//Funcion de cifrado
function rot10(input) {
    //Validación de que la cadena introducida no esta vacía
    if (input !== ""){
        //Bucle para recorrer el array e ir generando la cadena cifrada
        let inputCipher = "";
        for (let i = 0;i < input.length;i ++){
            //Validación para verificar que el valor introducido esta dentro si no dejarlo como esta
            letters.indexOf(input[i]) === -1?
                inputCipher += input[i]:
                inputCipher += lettersRot10[letters.indexOf(input[i])] //Cogemos el indice del array rotado
        }
        //Retornamos como se solicita
        return alert(`${input} - ${inputCipher}`)
    }else alert("ERROR, Introduce a phrase or letter pls")
}

rot10(input)