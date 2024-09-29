const el = document.querySelector('#box');

el.addEventListener('click',function (evt) {
  evt.currentTarget.setAttribute('material', 'color', 'blue');
  console.log('click!');
});