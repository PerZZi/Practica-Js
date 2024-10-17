/*Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos
edad e ingresos
Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 
debe retornar ingresos * 40%.
De lo contrario retornar 0.*/

function calcularImpuestos(edad, ingresos){

    if(edad >= 18 && ingresos >= 1000){
        let resultado = ingresos * 0.4;
        return resultado;
    }else{
        return 0;
    }
}

console.log(calcularImpuestos(18,1000));
console.log(calcularImpuestos(17,1000));


/*El índice de masa corporal (IMC), o BMI por sus siglas en inglés, 
es un valor que determina la cantidad de grasa de una persona.
El BMI se calcula con la siguiente formula: peso / altura^2
Escribir una función llamada bmi que reciba dos argumentos:
 peso y altura, y retorne un string con las siguientes posibilidades:
 "Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30*/

//funcion flecha
const bmi = (peso, altura) =>{

    let masaCorporal = peso / (altura ** 2);

    if(masaCorporal < 18.5){
        return "Bajo peso"
    }else if (masaCorporal >= 18.5 && masaCorporal < 24.9) {
        return "Peso normal";
    } else if (masaCorporal >= 25 && masaCorporal < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}
console.log(bmi(50,1.75));