$(document).ready(function () {
  const getDataButton = $("#get-data-button");
  const receivedDataContainer = $("#received-data");
  const form = $('#example-form');
  const formSubmittedMessage = $('#form-submitted-message');

  getDataButton.click(() => {
    console.log('GET');
    $.get("https://httpbin.org/get", (response) => {
      console.log('response: ', response);
      receivedDataContainer.html(`<pre>${JSON.stringify(response, null, '\t')}</pre>`);
    });
  });

  form.on('submit', function (event) {
    event.preventDefault();

    const userName = $('#user-name').val();
    const userAge = $('#user-age').val();
    const userComment = $('#user-comment').val();

    if (!userName || !userAge || !userComment) {
      alert('All fields are required.');
      return;
    }

    if (userName.length < 5) {
      alert('Name should be at least 5 characters long.');
      return;
    }

    if (parseInt(userAge, 10) < 18) {
      alert('Age should be at least 18.');
      return;
    }

    if (!userComment.length) {
      alert('Comment is required.');
      return;
    }

    const formData = {
      userName,
      userAge,
      userComment
    };

    $.post('https://httpbin.org/post', JSON.stringify(formData), function () {
      formSubmittedMessage.show();
    });
  });
});
