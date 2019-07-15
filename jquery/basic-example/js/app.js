$(document).ready(function() {
  const mainButton = $('#main-button');

  mainButton.on('click', () => {
    const message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

    console.log(message);
  });

  // mainButton.click(() => {
  //   const message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
  //
  //   console.log(message)
  // })
});
