const primerArray = [2, 3, 3, 8, 9, 10, 25, 57, 82];
const segundoArray = [5, 18, 25, 27, 45, 56, 87];

function juntarArrays(arr1, arr2){
    const juntar = [].concat(arr1, arr2).sort(function(a, b){return a - b});
    return juntar;
}

//Pintar en HTML
const section = document.querySelector('section');
const para1 = document.createElement('p');
para1.textContent = `Los arrays juntos y ordenados: ${juntarArrays(primerArray, segundoArray)}`;
section.appendChild(para1);
