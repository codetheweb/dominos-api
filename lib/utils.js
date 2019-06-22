const got = require('got');

const request = async ({method = 'get', url, params = {}, accessToken}) => {
  let res;

  const options = {method};

  if (method === 'post') {
    options.body = params;
    options.form = true;
  }

  if (accessToken) {
    options.headers = {
      Authorization: `Bearer ${accessToken}`
    };
  }

  console.log(url);

  res = await got(url, options);

  console.log(res.statusCode);

  const data = JSON.parse(res.body);

  return data;
};

module.exports = {request};
