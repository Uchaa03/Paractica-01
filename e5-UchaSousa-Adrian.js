//Ejercicio 5

class Product {
    constructor(name, price, stock) {
        this.name = name
        this.price = price <= 0?console.log("Precio no valido"):price
        this.stock = stock >= 0? price:console.log("Precio no valido")
    }

    sell(quantity) {
        if (this.stock - quantity < 0){
            console.log("No hay ")
        }
    }
}