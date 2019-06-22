const {request} = require('./utils');

class Store {
  constructor(id) {
    this.id = id;
  }

  getInfo() {
    return request({
      url: `https://order.dominos.com/power/store/${this.id}/profile`
    });
  }

  getMenu() {
    return request({
      url: `https://order.dominos.com/power/store/${this.id}/menu?lang=en&structured=true`
    })
  }
}

module.exports = Store;
