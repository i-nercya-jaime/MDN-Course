function obtenerNumerosPrimos(n) {
    // Creo un array de booleans con todo true excepto el 0 y el 1
    const arrayNumeros = Array(n + 1).fill(true);    
    arrayNumeros[0] = false;
    arrayNumeros[1] = false;

    //Recorro el array desde el 2 hasta el numero que pasa el usuario (n)
    for(let i = 2; i <= n; i++){
    // Si el array es true, entonces i es primo. En este caso, marcamos todos los múltiplos de i como no primos (es decir, como false en el array).
        if(arrayNumeros[i] == true){
            for (let j = i * i; j <= n; j += i) {
            arrayNumeros[j] = false;
            }

        }
    }

  
    // Finalmente, retornamos un arreglo con todos los números primos menores o iguales a n.
    //Creamos el arrayPrimos, recorremos el arrayNumeros e introducimos i con push en arrayPrimos
    const arrayPrimos = [];
    for (let i = 2; i <= n; i++) {
        if (arrayNumeros[i]) {
            arrayPrimos.push(i);
        }
    }
    return arrayPrimos;
    }

const section = document.querySelector('section');
const para1 = document.createElement('p');
para1.textContent = `Los números primos de 101 son: ${obtenerNumerosPrimos(101)}`;
section.appendChild(para1);

