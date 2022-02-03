//funciones k se pasan como paramatro a otrs funciones para que una vez finalizadas sus tereas ejecuten la funcion que hemos enviado como parametro.

const suma = (a,b, callback)=>{
    callback (a + b)
}
 suma (1, 2, (resultado)=>{
     console.log(resultado);
 })

 const getData = (callback)=>{
     setTimeout(() => {
      callback ({
        nombre:'maria',
        apellido:'ibañez'
        
      })  
        
     }, 3000);
 }
 const imprimirData = (data)=> console.log(data);
 getData(imprimirData);