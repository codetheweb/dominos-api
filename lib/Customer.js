const {request} = require('./utils');
const Card = require('./Card');
const Address = require('./Address');

class Customer {
  constructor({email, password}) {
    this.email = email;
    this.password = password;
  }

  async login() {
    const {access_token} = await request({
      method: 'post',
      url: 'https://api.dominos.com/as/token.oauth2',
      params: {
        scope: 'customer:card:read customer:profile:read:extended customer:orderHistory:read customer:card:update customer:profile:read:basic customer:loyalty:read customer:orderHistory:update customer:card:create customer:loyaltyHistory:read order:place:cardOnFile customer:card:delete customer:orderHistory:create customer:profile:update',
        grant_type: 'password',
        validator_id: 'VoldemortCredValidatorCustID',
        username: this.email,
        password: this.password,
        client_id: 'iOS-rm'
      }});

    this.accessToken = access_token;

    const res = await request({
      method: 'post',
      url: 'https://order.dominos.com/power/login',
      accessToken: this.accessToken
    });

    this.id = res.CustomerID;
    this.phone = res.Phone;

    this.addresses = res.Addresses.map(address => new Address(address));
  }

  async getCards() {
    const res = await request({
      method: 'get',
      url: `https://order.dominos.com/power/customer/${this.id}/card`,
      accessToken: this.accessToken
    });

    return res.map(card => new Card(card));
  }
}

module.exports = Customer;
