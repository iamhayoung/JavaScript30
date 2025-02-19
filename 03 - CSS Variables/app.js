const spacing = document.querySelector('#spacing');
const blur = document.querySelector('#blur');
const base = document.querySelector('#base');

spacing.addEventListener('input', (e) => {
  document.documentElement.style.setProperty('--spacing', `${ e.target.value }px`);
})

blur.addEventListener('input', (e) => {
  document.documentElement.style.setProperty('--blur', `${ e.target.value }px`);
})

base.addEventListener('input', (e) => {
  document.documentElement.style.setProperty('--base', `${e.target.value}`);
})
