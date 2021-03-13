const spacing = document.querySelector('#spacing');
const blur = document.querySelector('#blur');
const base = document.querySelector('#base');
const root = document.querySelector('html');

// spacing.onchange = handleSpacing;
// blur.onchange = handleBlur;
// base.onchange = handleBase;

// function handleSpacing(e) {
//   root.style.setProperty('--spacing', `${ e.target.value }px`);
// }

// function handleBlur(e) {
//   root.style.setProperty('--blur', `${ e.target.value }px`);
// }

spacing.addEventListener('input', (e) => {
  root.style.setProperty('--spacing', `${ e.target.value }px`);
})

blur.addEventListener('input', (e) => {
  root.style.setProperty('--blur', `${ e.target.value }px`);
})

base.addEventListener('input', (e) => {
  root.style.setProperty('--base', `${e.target.value}`);
})