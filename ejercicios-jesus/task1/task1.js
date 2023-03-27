const numeros = [2, 2, 2, 3, 3, 7, 8, 9, 15, 17, 25, 19, 9, 1, 1 ];
const numerosOrdenados = numeros.sort(function(a, b){return a - b});

//media
function media(arr){
  let suma = 0;
  for (let i = 0; i < arr.length; i++){
    suma += arr[i];
  }
  let media = suma / arr.length;
  return media;
}

//numero de elementos
function numElementos(arr){
  const numElementos = arr.length;
  return numElementos;
}
        
//max
function numMax(arr){
  const numMax = Math.max.apply(Math, arr);
  return numMax;
}

//moda
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

//min
function numMin(arr){
  const numMin = Math.min.apply(Math, arr);
  return numMin;
}

//desviación típica
function desviacionTipica(arr){
  
  //Primero calculo la media
    let suma = 0;
    for (let i = 0; i < arr.length; i++){
      suma += arr[i];
    }
    let media = suma / arr.length;
  
  const sumDifCuadrado = arr.reduce((a, b) => a + Math.pow(b - media, 2), 0);
  const desviacionTipica = Math.sqrt(sumDifCuadrado / (arr.length - 1));
  return desviacionTipica;
}

//histograma
function histograma(arr) {
  for(let i = 0; i < arr.length; i++){
    
    const elemento = arr[i];
    if(histograma[elemento]){
      histograma[elemento]++;
    }else{
      histograma[elemento] = 1;
    }
  }

  let histogramaString = '';
  for (const elemento in histograma) {
    if (histograma.hasOwnProperty(elemento)) {
      const count = histograma[elemento];
      histogramaString += `${elemento}: ${'*'.repeat(count)}\n`;
    }
  }
  return histogramaString;
}

/*mediana
comprobar si el array es par o impar
*/
function calcularMediana(array){
  let mediana;
  let mitad = Math.floor(array.length / 2);
  if(array.length % 2 !== 0){
    mediana = array[mitad];
  } else{
    mediana = (array[mitad-1] + array[mitad] / 2);
  }
  return mediana;
}


  

//Pintar en HTML  
const section = document.querySelector('section');
const para1 = document.createElement('p');
const para2 = document.createElement('p');
const para3 = document.createElement('p');
const para4 = document.createElement('p');
const para5 = document.createElement('p');
const para6 = document.createElement('p');
const para7 = document.createElement('p');
const para8 = document.createElement('p');

para1.textContent = `La media del array es: ${media(numerosOrdenados).toFixed(2)}`;
para2.textContent = `El número de elementos del array es: ${numElementos(numerosOrdenados)}`;
para3.textContent = `El número máximo del array es: ${numMax(numerosOrdenados)}`;
para4.textContent = `El número mínimo del array es: ${numMin(numerosOrdenados)}`;
para5.textContent = `La desviación estándar es: ${desviacionTipica(numerosOrdenados).toFixed(2)}`;
para6.textContent = `El histograma es: ${histograma(numerosOrdenados)}`;
para7.textContent = `La mediana es: ${calcularMediana(numerosOrdenados)}`;
para8.textContent = `La moda es: ${encontrarModa(numerosOrdenados)} `;

section.appendChild(para1);
section.appendChild(para2);
section.appendChild(para3);
section.appendChild(para4);
section.appendChild(para5);
section.appendChild(para6);
section.appendChild(para7);
section.appendChild(para8);