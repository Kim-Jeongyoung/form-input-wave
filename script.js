'use strict';

const labels = document.querySelectorAll('.form-control label');

//Email & Password 각각을  span에 넣어주기 (span default는 inline)
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span>${letter}</span>`)
    .join('');
});
