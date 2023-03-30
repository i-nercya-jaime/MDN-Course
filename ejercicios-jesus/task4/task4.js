//Dado un array de numeros ordenados
//encontrar, utilizando binary search algorithm un numero dado
//devolver la posición (indice)

const arrayOrdenado = [1, 5, 8, 10, 11, 15, 17, 19, 23, 27, 40, 45, 52, 87, 95, 100];

function busquedaBinaria(array, objetivo){
    let inicioArray = 0;
    let finalArray = array.length - 1;

    while (inicioArray <= finalArray){
        let mitadArray = Math.floor((inicioArray + finalArray) / 2);

            if (objetivo === array[mitadArray]){
                return mitadArray;
                
            } else if(objetivo > array[mitadArray]){
                inicioArray = mitadArray + 1;

            } else if (objetivo < array[mitadArray]){
                finalArray = mitadArray - 1;
            }
    }
    return "Este numero no existe en el array";
}

//Pintar en HTML
{
const section = document.querySelector('section');
const para1 = document.createElement('p');
para1.textContent = `El número X ha sido encontrado en la posición: ${busquedaBinaria(arrayOrdenado, 27)}`;
section.appendChild(para1);
}