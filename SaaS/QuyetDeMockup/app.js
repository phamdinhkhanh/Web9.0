const express = require('express');
const bodyParser = require('body-parser');
const exhbs = require('express-handlebars');

let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.engine("handlebars",exhbs({defaultLayout:"quyetDe"}));
app.set("view engine","handlebars");

app.get('/',(res,req) => {
  render("home");
})
