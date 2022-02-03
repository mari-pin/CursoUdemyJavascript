 //funcion que ejecuta una promesa, pruede recibir parametros 
 const getData1 = (error) => new Promise((resolve, reject) => {
     if (!error) {
         resolve({
             nombre: 'maria',
             apellido: 'ibañez',
         })
     } else {
         reject('no se pueden obtener los datos')
     }
 });
 getData1(false)
     .then((data) => {
         console.log(data);
     })
     .catch((error) => {
         console.log(error);
     })


 // nueva promesa, no podemos pasarle parametros
 const getData2 = (error) => new Promise((res, rej) => {
     if (!error) {
         setTimeout(() => {
                 res({
                     nombre: 'maria',
                     apellido: 'ibañez',
                 });
             },3000);
            }else {
                 rej('no se pueden obtener los datos')
             }
         });

 console.log('inicio');
 getData2(false)
     .then((data) => {
         console.log(data);
     })
     .catch((error) => {
         console.log(error);
     });
     console.log('fin');

// asinc y await
const getData1 = (error) => new Promise((resolve, reject) => {
    if (!error) {
        resolve({
            nombre: 'maria',
            apellido: 'ibañez',
        })
    } else {
        reject('no se pueden obtener los data 1')
    }
}); 
const getData2 = (error) => new Promise((res, rej) => {
    if (!error) {
        setTimeout(() => {
                res({
                    nombre: 'mar',
                    apellido: 'bañez',
                });
            },3000);
           }else {
                rej('no se pueden obtener los data 2')
            }
        });
//utilizamos try y catch para controlar el error en la promesa
 const main = async ()=> {
     try{
        let resultado = await getData1(true);
        let resultado2 = await getData2(false);
        console.log(resultado);
        console.log(resultado2);
     }
     catch(error){
         console.log(error);

     }
     
 }  
 main();            