let bandInfo;

// Add your code here
const band = {
    name : 'Agorazein',
    nationality : 'Spanish',
    genre : 'Hip Hop',
    members : 4,
    formed : 2012,
    split : false,
    albums : [
        {
            name : 'AGZ',
            released : 2012,
        },
        {
            name : 'Siempre',
            released : 2017,
        }]
}

bandInfo = `${band.name} is a ${band.genre} band formed by ${band.members} ${band.nationality} guys in the year ${band.formed}. In the year ${band.albums[1].released} they released their most famous album called ${band.albums[1].name}. `;

// Don't edit the code below here!

const section = document.querySelector('section');
let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);