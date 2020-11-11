import { arrayPartition } from 'base-js-lib/utils';

const container = document.querySelector('.container');

const numbers = [1, 2, 3, 4, 5, 6];

const isOdd = (n) => n % 2 === 0;

const [oddNumbers, evenNumbers] = arrayPartition(numbers, isOdd);

function showResult(obj) {
  const paragraph = document.createElement('p');
  paragraph.textContent = obj;
  paragraph.classList.add('text-xl', 'text-purple-600');
  container.appendChild(paragraph);
}

showResult(oddNumbers);
showResult(evenNumbers);
