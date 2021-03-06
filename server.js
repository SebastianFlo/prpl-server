prpl = require('prpl-server');
express = require('express');

const app = express();
const port = 8080;

app.get('/api/launch', (req, res, next) => res.send('boom'));

app.get(
  '/*',
  prpl.makeHandler('.', {
    builds: [
      { name: 'modern', browserCapabilities: ['es2015', 'push'] },
      { name: 'fallback' }
    ]
  })
);

app.listen(8080);

console.log(`Server listening on localhost:${port}`);