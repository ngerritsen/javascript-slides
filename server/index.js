const express = require('express');
const routes = require('./routes');

const PORT = 8011;
const app = express();

routes(app);

app.listen(PORT, error => {
  if (error) {
    throw error;
  }

  console.log(`Slides listening at ${PORT}`); // eslint-disable-line no-console
});
