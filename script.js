'use strict';

const labels = document.querySelectorAll('.form-control label');

//Email & Password 각각을  span에 넣어주기 (span default는 inline)
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, idx) =>
        `<span style='transition-delay: ${idx * 50}ms'>${letter}</span>`
    )
    .join('');
});

// transition delay에 dix를 넣고 ms(시간 ) 주기
