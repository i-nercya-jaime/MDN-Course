const link = document.querySelector('a');
const sect = document.querySelector('section');


link.textContent = 'Mozilla Developer Network';
link.href = 'https://developer.mozilla.org';

const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);

const text = document.createTextNode(' - the premier source for web development knowledge.');

const linkPara = document.querySelector('p');
linkPara.appendChild(text);

linkPara.parentNode.removeChild(linkPara);
para.setAttribute('class', 'highlight');