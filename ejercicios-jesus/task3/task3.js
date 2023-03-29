//eratóstenes

function esPrimo(primosHastaAhora, n) {
  // n es primo si no es divisible por ningún primo en primosHastaAhora
  // menor o igual a su raíz cuadrada
  const r = Math.sqrt(n);
  for (let i = 0; i < primosHastaAhora.length; i++) {
    if (n % primosHastaAhora[i] === 0) {
      return false;
    }
  if (primosHastaAhora[i] > r) {
    break;
    }
  }
  return true;
}
  
function primerosPrimos(n) {
  const primos = [2];
  console.log(primos);
  let i = 3;
  
  while (primos.length < n) {
    if (esPrimo(primos, i)) {
      primos.push(i);
    }
    i++;
  }
  return primos;
}

//Pintar en HTML
{
const section = document.querySelector('section');
const para1 = document.createElement('p');
para1.textContent = `Los primeros 10 numeros primos son: ${primerosPrimos(10)}`;
section.appendChild(para1);
}


