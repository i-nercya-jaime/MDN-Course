//eratóstenes


const isPrime = (n) => {
  for(let i = 2; i <= n/2; i++){
     if(n % i === 0){
        return false;
     }
  };
  return true;
};
const generatePrime = num => {
  const arr = [];
  let i = 2;
  while(arr.length < num){
     if(isPrime(i)){
        arr.push(i);
     };
     i = i === 2 ? i+1 : i+2;
  };
  return arr;
};




function esPrimo(n){

  let numeros = [];
  for (let i = 0; i <= n; i++) {
    numeros.push(true);
  }
    
  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let j = i * i; j <= n; j += i) {
      numeros[j] = false;
    }
  }

  let primos = [];
  for (let i = 2; i <= n; i++) {
    if (numeros[i]) {
      primos.push(i);
    }
  }
  return primos;
}


//Pintar en HTML
{
const section = document.querySelector('section');
const para1 = document.createElement('p');
para1.textContent = `Los primeros X numeros primos son: ${generatePrime(5)}`;
section.appendChild(para1);
}


