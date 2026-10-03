const productos =[
    {productid: 1, title: "Alfajor Maicena", price: "4.500", category: "Alfajor"},
    {productid: 2, title: "Alfajor Chocolate", price: "5.500", category: "Alfajor"},
    {productid: 3, title: "Chocomerengue", price: "5.600", category: "Relleno"},
    {productid: 4, title: "Alfajor Mani", price: "5.500", category: "Alfajor"},
    {productid: 5, title: "Copito", price: "5.600", category: "Relleno"},
    {productid: 6, title: "Pepa", price: "4.600", category: "Maicena"},
    {productid: 7, title: "Rhodesia", price: "6.500", category: "Varios"},
    {productid: 8, title: "Tita", price: "6.600", category: "Varios"},
    {productid: 9, title: "Alfajor Oreo", price: "5.600", category: "Alfajor"},
    {productid: 10, title: "Rosquita Limon", price: "4.500", category: "Maicena"},
]

const args= process.argv.slice(2);

switch(args[0]){
    case "GET_products":
        console.log("GET products");
        ;
        if(args[1]){
            const productoEncontrado = productos.find((productos) => productos.productid == args[1]);
            if(productoEncontrado){
                console.log(productoEncontrado)
            }else{
                console.log("El id del producto indicado no existe")
            }
        }else{
            console.log(`Estos son los productos: `,productos)
        }
        break;
    case "POST_products":
        console.log("POST products");
        if(args[1]&&args[2]&&args[3]){
            const productoNuevo = {
                productid: productos.length + 1,
                title: args[1],
                price: parseInt(args[2]),
                category: args[3]
            }
            productos.push(productoNuevo)
            console.log(productoNuevo)
        }else{
            console.log("No completo todos los campos")
        }
        break;
    case "DELETE_products":
        console.log("DELETE_products");
        if(args[1]){
            const ubiProducto = productos.findIndex((producto) => producto.productid == args[1]);
            if (ubiProducto > -1){
                const productoEliminado = productos[ubiProducto];
                productos.splice(ubiProducto,1)
                console.log(`Se elimino el siguiente producto: `,productoEliminado)
            }else{
                console.log("El id del producto indicado no existe")
            }
        }else{
            console.log("Se debe indicar un id de producto para eliminar")
        }
        break;
    default:
        console.log("Comando incompleto o invalido");
}