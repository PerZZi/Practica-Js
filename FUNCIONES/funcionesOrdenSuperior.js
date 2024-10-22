/*funcion de orden superior recibe los dos numeros
y al final la operacion que es una funcion*/
function calculadora (numero1, numero2, operacion){

    let resultado = operacion(numero1,numero2);
    return resultado;
}

//una forma de hacer funcion flecha
const sumar = (a,b) => a + b;

const restar = (a,b) => a - b;

const multiplicar = (a,b) => a * b;

//otra forma
const dividir = (a,b) => {

    let resultado = a / b;

    return resultado;
}


console.log(calculadora(10,20,sumar));
console.log(calculadora(20,10,restar));
console.log(calculadora(20,5,dividir))