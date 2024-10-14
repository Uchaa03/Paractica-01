//Ejercicio3
//Sistema de gestión de compras

//Array de productos en los que se ira agregando y quitando elementos
//Por predeterminado le voy a dejar agregados unos cuanstos elementos
const products = ["Leche","Manzana","Pera","Patata"]

const regex = /([A-Za-z])\w+a{1,}/ //Verificador que se introducen letras con sentido minimo 3letras como uva

//Funcion que valida que se introduce un valor correcto a la hora de pasar un string
function validateString (input) {
    return regex.test(input)
}

//Funcion para agregar elementos a lista de productos
function addElement(element){
    if (validateString(element)){
        // for (let i = 0;i)
    }else console.log("Introduce a real product")
}

console.log(products.includes("Leche"))
