const numeros = [2, 2, 2, 3, 3, 7, 8, 9, 10, 9, 1, 1 ];
const numerosOrdenados = numeros.sort(function(a, b){return a - b});
console.log(numerosOrdenados);

//media
const para1 = document.createElement('p');
const media = numerosOrdenados.reduce((suma, valor) => suma + valor, 0) / numeros.length;

//numero de elementos
const para2 = document.createElement('p');
const numElementos = numerosOrdenados.length;
        
//max
const para3 = document.createElement('p');
const numMax = Math.max.apply(Math, numerosOrdenados);

//min
const para4 = document.createElement('p');
const numMin = Math.min.apply(Math, numerosOrdenados);

//desviación típica
const para5 = document.createElement('p');
const sumDifCuadrado = numeros.reduce((suma, valor) => suma + Math.pow(valor - media, 2), 0);
const desviacionTipica = Math.sqrt(sumDifCuadrado / (numeros.length - 1));

//histograma
const para6 = document.createElement('p');
function histograma(arr) {
  
}

//mediana
const para7 = document.createElement('p');
function mediana(arr){
  let i = (arr.length) / 2;
  const mediana = ((arr[i+1] + (arr[i+2])) * 0.5);
  return mediana;
}


//moda
const para8 = document.createElement('p');
function encontrarModa(arr) {
    let moda = 0;
    let maxFrecuencia = 0;
    
    for (let i = 0; i < arr.length; i++) {
      let frecuencia = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          frecuencia++;
        }
      }
      if (frecuencia > maxFrecuencia) {
        maxFrecuencia = frecuencia;
        moda = arr[i];
      }
    }
    return moda;
  }
  
const section = document.querySelector('section');

para1.textContent = `La media del array es: ${media}`;
para2.textContent = `El número de elementos del array es: ${numElementos}`;
para3.textContent = `El número máximo del array es: ${numMax}`;
para4.textContent = `El número mínimo del array es: ${numMin}`;
para5.textContent = `La desviación estándar es ${desviacionTipica.toFixed(2)}`;
para6.textContent = `xx ${histograma(numerosOrdenados)}`;
para7.textContent = `La mediana es ${mediana(numerosOrdenados)}`;
para8.textContent = `La moda es: ${encontrarModa(numerosOrdenados)} `;



section.appendChild(para1);
section.appendChild(para2);
section.appendChild(para3);
section.appendChild(para4);
section.appendChild(para5);
section.appendChild(para6);
section.appendChild(para7);
section.appendChild(para8);