let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/', (request, response) => {
    console.log(request.body);
    response.send(request.body);
  }).listen(64107)