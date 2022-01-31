//filter
var estudiantes = [
    {nombre: 'ana', edad:'32', matriculado:true},
    {nombre: 'ari', edad:'52', matriculado:false},
    {nombre: 'candy', edad:'26', matriculado:true},
    {nombre: 'emma', edad:'25', matriculado:false}
]
//los k tienen <= 32 años
var filtrado = estudiantes.filter((estudiante)=> estudiante.edad<=32);
console.log(estudiantes);
console.log(filtrado);
//los k tienen <= 32 años y matriculados 
var filtrado = estudiantes.filter((estudiante)=> estudiante.edad<=32 && estudiante.matriculado);
console.log(estudiantes);
console.log(filtrado);

//reduce-- reducir un array en un solo valor
var notas = [2,5,4,10,9];
var suma= notas.reduce((acumulador,nota)=> acumulador + nota, 0);
console.log(notas);
console.log(suma);
console.log(suma/notas.length);//dividimos entre la cantidad de notas xa la media
// obtener una lista de la cantidad de personas que existe x cada edad
var edades = [21,32,32,4,21,32,54,64,45,54,4,32,54];
var resultado = edades.reduce((acumulador,edad)=>{
    if (!acumulador[edad]) {
        acumulador[edad] = 1
    }else{
        acumulador[edad] += 1
    }
    return acumulador
},{})


console.log(edades);
console.log(resultado);

// averiguar el total de dinero por cada producto vendido
var ventas = [
    {nombre:'camisa', precio: 10, totalVendido:3},
    {nombre:'pantalon', precio: 14, totalVendido:6},
    {nombre:'calcetines', precio: 5, totalVendido:56},
    {nombre:'gorro', precio: 20, totalVendido:47},
]
var resultado = ventas.reduce((acumulador,producto)=>{
    let totalVentas = producto.precio * producto.totalVendido;
    acumulador[producto.nombre]= totalVentas;
    return acumulador;
},{})
console.log(ventas);
console.log(resultado);

// averigua cuantos estudiantes fueron matriculados
var estudiantes = [
    {nombre: 'ana', edad:'32', matriculado:true},
    {nombre: 'ari', edad:'52', matriculado:false},
    {nombre: 'candy', edad:'26', matriculado:true},
    {nombre: 'emma', edad:'25', matriculado:false}
]
// hacemos un map porque solo necesitamos la propiedad matriculado del objeto estudiantes
var resultado = estudiantes.map((estudiante)=>estudiante.matriculado).reduce((acumulador,item)=>{
    if (item) {
        acumulador.matriculado += 1
    }else{
        acumulador.noMatriculado += 1
    }
    return acumulador
},{matriculado: 0, noMatriculado:0 })
console.log(estudiantes);
console.log(resultado);