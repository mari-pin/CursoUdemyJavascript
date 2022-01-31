/* 1. Escribir un programa que calcule el número de segundos que existen en un día.

Para ello debemos multiplicar los segundos de un minuto, por los minutos de

una hora, por las horas de un día. Como todo el mundo sabe, un día tiene 86400 segundos. */

/* 1 min = 60 seg , 1h = 60 min, 1 dia = 24 horas, 
    
*/
const min = 60
const hora = 60
const dia = 24
let minutosDeUnDia = min * hora;
console.log(minutosDeUnDia)

let minutosDelDia = 3600

let segundosDia = minutosDelDia * dia
console.log (segundosDia)
segundosDia = 86400


/* 2. Realiza un programa que a partir de los valores ancho=2 y alto=5,

calcule el área de un rectángulo. */

const ancho = 2 
const alto = 5
area = (ancho * alto )*2
console.log(area)

//if else if Condicional
var semaforo = 'rojo'
if (semaforo === 'verde'){
    console.log('arranca')
}else if (semaforo = 'rojo'){
    console.log('quedate quieto')
    
}else if (semaforo = 'amarillo'){
    console.log('precaucion')
}else {
    console.log('color no identificado')
}

//switch

var producto = 'papaya';

switch (producto) {
    case 'papaya':
        //codigo
        console.log('las papayas cuestan $1 cada una');
        break;
    case 'naranjas':
            //codigo
            console.log('las naranjas cuestan 2€ cada una');
            break;
    default:
        console.log('no hay frutas de esta variedad');
}

/* 1.Escribir un programa que según el día de la semana ingresado proporcione el día en inglés.

El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch */
//if
const diaDeLaSemana = 'lunes';
if (diaDeLaSemana === 'lunes'){
    console.log('is monday');
}else if (diaDeLaSemana === 'martes'){
    console.log('is thrusday');
}else if (diaDeLaSemana === 'viernes'){
    console.log('empieza el finde');
}

//switch
const diaDeLaSemana = 'sabado'
switch (diaDeLaSemana) {
    case 'lunes':
        console.log('monday');
        break;
    case 'jueves':
        console.log('thruestday');
        break;
        case 'viernes':
            console.log('friday');
            break;
    default:
      console.log('miercoles');
}

/* 2.Escribir un programa que según el total de la compra, se agregue un valor de envio.

Si la compra es menor o igual a los $10 se agregará un gasto de envió de $3

Si la compra es menor o igual a los $20 y mayor a los $10 se agregará un gasto de envío de $5

Si la compra es menor o igual a los $50 y mayor a los $20 se agregará un gasto de envío de $7

Si la compra supera los $50 el gasto de envío será gratuito

El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch */

/* compra <= $10 = + 3
compra <= $20 && >$10 = + 5
compra >= 50$ >20$ = +7
compra > $50 = gratis envio */

let precioCompra = 89
let total
if (precioCompra <= 10) {
      let total = precioCompra + 3
    console.log(precioCompra);
    
} else if (precioCompra ? 20 : 10 ){
    console.log(precioCompra);
     let total = precioCompra + 5;
    console.log(precioCompra);
    
}else if (precioCompra >= 50 && 20 ){
    console.log(precioCompra)
     let total = precioCompra + 7; 
     console.log(precioCompra);
    
}else if (precioCompra > 50){
    console.log('envio gratis');
}

// switch
let precioCompra = 89
switch (precioCompra) {
    case(0, 10 ):
    console.log(precioCompra + 3);
        break;
    case(20, 10 ):
    console.log(precioCompra + 5);
        break;
    case(50 , 20 ):
    console.log(precioCompra + 7);
        break;

    default:
        console.log('envio gratis');
        
}
