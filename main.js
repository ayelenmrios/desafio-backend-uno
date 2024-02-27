class productManager {
    constructor() {
        this.products = [];
    };

    // Método addProduct
    addProduct(title, description, price, thumbnail, code, stock) {
        const ropa = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.products.push(ropa);
    }

    // Método getProducts
    getProducts(){
        return this.products;
    };
}

const inventario = new productManager();

inventario.addProduct("Campera de invierno", "Campera impermiable disponible en los colores rojo, verde y azul.", 500, undefined, "#C001", 14);

console.log(inventario.products);