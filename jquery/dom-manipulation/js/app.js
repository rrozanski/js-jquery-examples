function changeBoxToSuccess(event) {
  event.target.innerText = 'SUCCESS';
  event.target.classList.remove('bg-danger');
  event.target.classList.add('bg-success');
}


$(document).ready(function() {
  const hoverTestBox = $('.hover-test');
  const alertButton = $('#alert-button');
  const alertInput = $('#alert-input');
  const menuButton = $('#menu-button');
  const menuContainer = $('#menu-container');

  hoverTestBox.on('mouseout', function (event) {
    $(event.target)
      .text('ERROR')
      .removeClass('bg-success')
      .addClass('bg-danger');
  });

  alertButton.click(function () {
    const message = alertInput.val() || 'No message was entered :(';

    alert(message);
  });

  menuButton.click(function () {
    const currentButtonLabel = menuButton.text().trim();
    const newButtonLabel = currentButtonLabel === 'SHOW MENU' ? 'HIDE MENU' : 'SHOW MENU';

    menuButton.text(newButtonLabel);
    menuContainer.slideToggle();
  });
});
