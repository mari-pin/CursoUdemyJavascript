const excelGeneretor = (products,name,res)=>{
    const xl = require('excel4node');

    products = products.map((product)=>{
        //guardamos el id del producto y lo convertimos en un string 
        let id = product._id.toString();
        delete product._id;

        return {
            id,
            ...product
        }
    })
    let wb = new xl.Workbook()
    let ws = wb.addworksheet('inventario');
    /* el primer for no da las filas  */
    for (let index = 1; i<= products.length; i++) {
        //y el segundo las columnas con el .length nos dice cuantas propiedades tenemos del producto
        for (let j = 1; i <=  Object.values(products[0]).length; j++) {
            //ahora almacenamos los datos 
            let data = Object.values(products[i -1])[j -1]
            if (typeof data === 'string') {
                ws.cell(i,j).string(data)                
            }else{
                ws.cell(i,j).number(data)
            }
        }
    }
    wb.write(`${name}.xlsx`,res)
}