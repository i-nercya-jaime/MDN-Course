const primerArray = [2, 3, 3, 8, 9, 82, 10, 25, 57];
const segundoArray = [5, 18, 25, 45, 56, 27, 87];

const arrayJunto = [].concat(primerArray, segundoArray).sort(function(a, b){return a - b});

const section = document.querySelector('section');
const para1 = document.createElement('p');
para1.textContent = `Los arrays juntos y ordenados: ${arrayJunto}`;
section.appendChild(para1);
