console.log('this is guest list');
const people = [
  'Chris',
  'Anne',
  'Colin',
  'Terri',
  'Phil',
  'Lola',
  'Sam',
  'Kay',
  'Bruce',
];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here
let i = 0;
while (i < people.length - 1) {
  if (people[i] === 'Phil' || people[i] === 'Lola') {
    refused.textContent += `${people[i]} `;
  } else {
    admitted.textContent += `${people[i]} `;
  }

  i++;
}
