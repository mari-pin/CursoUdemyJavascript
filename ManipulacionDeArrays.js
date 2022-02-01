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

//some(si al menos un elemento cumple la condicion sera true) - every(si todos los elementos cumplen la condicion sera true) sino sera false.
//some
var numeros = [1,2,2,4,53,553,3,56,65]
var resultado = numeros.some ((numero)=>numero% 2 === 0)
console.log(resultado);

//every
var numeros = [12,34,2,7,65,6]
var resultado = numeros.every((numero)=>numero % 2 === 0);
console.log(resultado);

//find (retorne un elemento del array)- findIndex(retorna posicion del elemento en un array)

var clientes = [
    {id: 1, nombre:'maria'},
    {id: 2, nombre:'mar'},
    {id: 3, nombre:'mia'},
    {id: 4, nombre:'ria'},
    {id: 5, nombre:'mari'}
]
var cliente = clientes.find((cliente)=>cliente.id ===2)
console.log(clientes);
console.log(cliente);

//FindIndex- posicion en el indice
var clientes = [
    {id: 1, nombre:'maria'},
    {id: 2, nombre:'mar'},
    {id: 3, nombre:'mia'},
    {id: 4, nombre:'ria'},
    {id: 5, nombre:'mari'}
]
var posicion = clientes.findIndex((cliente)=> cliente.id === 3);
console.log(posicion);
console.log(clientes[posicion]);

//includes (si en un array existe un elemento y devuelve trueo flase)
var mascotas= ['perro', 'gato', 'conejo'];
var resultado = mascotas.includes('perro');
console.log(resultado);

//encontrar los elementos que contengan la letra 'm' en el nombre
var buscador = (parametro) => {
    let clientes = [
        {id: 1, nombre:'maria'},
        {id: 2, nombre:'mar'},
        {id: 3, nombre:'mia'},
        {id: 4, nombre:'ria'},
        {id: 5, nombre:'mari'}
    ]
    return clientes.filter((cliente) =>cliente.nombre.includes(parametro))
}
console.log(buscador('m'));

//Join(nos ayada a unir todos los elementos de un array y convertirlo en string )se usa mucho en csv xa mostrar datos con comas. 

var elementos = ['aire', 'fuego', 'agua'];
var resultado = elementos.join('.');
console.log(resultado);

//para hacerlo con una array de objetos 
let clientes = [
    {id: 1, nombre:'maria'},
    {id: 2, nombre:'mar'},
    {id: 3, nombre:'mia'},
    {id: 4, nombre:'ria'},
    {id: 5, nombre:'mari'}
]
var csvGenerator = (array,separador = ',')=>{
    //generamos los datos con map 
    let data = array.map((elemento => Object.values(elemento).join(separador)))
    data.forEach(elemento => console.log(elemento))
}
csvGenerator(clientes)

//concat (concadena 2 arrays generando uno nuevo )
var array1 = [1,2,3,4,5];
var array2 = [2,3,4,5,6];
var array3 = array1.concat(array2);
console.log(array3);

//Sort (ordena el array)

var array1 = [1,2,3,4,5,2,3,4,5,6];
console.log(array1.sort());

var meses = ['Dic','Enero','Marzo','Febrero'];
console.log(meses.sort());

var array = [1,200,342,23,12]
var ordenado = array.sort((a,b)=> b - a);
console.log(ordenado);

//splice(elimina o modifica elementos dentro de un array)
var nombres = ['ana', 'david', 'fran', 'tom'];
//nombres.splice -- puede recibir hasta 3 parametros(num posicion del elemento, num de elementos, lo que queremos remplazar)
nombres.splice(1,1,'juan')
console.log(nombres);//eliminamos 'david' y añade 'juan' 
//slice
var nombres = ['ana', 'david', 'fran', 'tom'];
var resultado = nombres.slice(1,2);//no incluye la ultima posicion
console.log(resultado);
console.log(nombres);