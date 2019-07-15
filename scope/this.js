console.log(this);

function showThis() {
  console.log('Global: ', this);
}

const example = {
  name: 'Example Object',
  showThisOfMethod: function () {
    console.log('Inside method: ', this);
  }
};

showThis();
example.showThisOfMethod();
