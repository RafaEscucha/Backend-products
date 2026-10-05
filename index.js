async function obtenerProductos() {
    try {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
async function ejecutarComando() {

    const args = process.argv.slice(2);

    switch (args[0]) {
        case "GET":
            console.log("GET products");
            ;
            if (args[1] == "products") {

                const productos = await obtenerProductos()
                if (args[2]) {
                    const productoEncontrado = productos.find((producto) => producto.productid == args[2])
                    if (productoEncontrado) {
                        console.log(productoEncontrado)
                    } else {
                        console.log("El id del producto indicado no existe")
                    }
                } else {
                    console.log(`Estos son los productos: `, productos)
                }
            }
            break;
        case "POST":
            console.log("POST products");
            if (args[1] == "products") {
                if (args[2] && args[3] && args[4]) {
                    const productoNuevo = {
                        title: args[2],
                        price: parseInt(args[3]),
                        category: args[4]
                    }
                    const response = await fetch("https://fakestoreapi.com/products", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(productoNuevo)
                    })

                    const data = await response.json()
                    console.log(data)
                } else {
                    console.log("No completo todos los campos")
                }
            }
            break;
        case "DELETE":
            console.log("DELETE products");
            if (args[1] == "products") {
                if (args[2]) {
                    const response = await fetch(
                        `https://fakestoreapi.com/products/${args[2]}`,
                        {
                            method: "DELETE"
                        }
                    )

                    const data = await response.json()

                    console.log(data)
                } else {
                    console.log("Se debe indicar un id de producto para eliminar")
                }
            }
                break;
        default:
            console.log("Comando incompleto o invalido");
    }

}

ejecutarComando()

