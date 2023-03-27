const primerArray = [2, 3, 8, 9, 10, 21, 25];
const segundoArray = [5, 18, 27, 45, 56, 87];

function mergeOrderedArrays(arr1, arr2) {
  let mergedArr = [];
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }

  return mergedArr;
}

//Pintar en HTML
const section = document.querySelector('section');
const para1 = document.createElement('p');
para1.textContent = `Los arrays juntos y ordenados: ${mergeOrderedArrays(primerArray, segundoArray)}`;
section.appendChild(para1);
