const user = {
  firstName: 'John',
  lastName: 'Arrow',
  showFullName: function () {
    setTimeout(function () {
      console.log(`${this.firstName} ${this.lastName}`);
    }, 500);

    setTimeout(() => {
      console.log(`${this.firstName} ${this.lastName}`);
    }, 500);
  }
};

user.showFullName();
