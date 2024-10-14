//Supongamos que tenemos una clase que para mi es la mejor forma de explicar esto

//Tenemos una variable global y otra dentro de una clase para usar en una funcion

//Varaible global es aquella que se puede acceder desde cualquier metodo
const nombre = "raton"


class Producto {
    constructor(nombre, precio) {
        //Variable local solo se puede acceder desde su metodo o funcion
        this.nombre = nombre
        this.precio = precio
    }

    verProductoGlobal() {
        console.log(nombre)
    }

    verProducto() {
        console.log(this.nombre, this.precio)
    }
}

const producto = new Producto('mesa',300)
//Cando declaramos una global se puede acceder a ella desde cual quier metodo o funcion, por ejemplo utitl
//para hacer un contandor, pero cuando necesitamos a veces creamos variables que se usan solo en funciones entonces
//estas debemos de crearlas y llamarlas solo dentro de la funcion ta que fueran no funcionan o nos cogería la global.
producto.verProducto()
producto.verProductoGlobal()




