import Client from 'lightrpc';
const options = {
  timeout: 5000
}

export const client = new Client('https://api.steemit.com', options);
client.sendAsync = (message, params) => {
  return new Promise((resolve, reject) => {
    client.call(message, params, (err, res) => {
      if (err) return reject(err)
      return resolve(res)
    })
  })
}