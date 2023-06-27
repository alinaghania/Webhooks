 const express = require('express');
 const bodyParser = require('body-parser');
 const app = express();
 app.use(bodyParser.json());
 app.post('/webhook', (req, res) => {
   console.log('Received a post request');
   console.log(req.body);
   res.status(200).end();
});
 const port = 3000;
 app.listen(port, () => console.log(`Server is running on port ${port}`))