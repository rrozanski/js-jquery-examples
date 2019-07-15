(function () {
  console.log('IIFE - 1');
})();

(() => {
  console.log('IIFE - 2');
})();

(() => console.log('IIFE - 3'))();
