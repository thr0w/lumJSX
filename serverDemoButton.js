var express = require("express");
var app = express();

var port = process.env.PORT || 8080;

app.get("/", function (req, res) {
    res.redirect("/demobutton/index.html");
});

var raiz = __dirname + "/";
app.use(express.static(raiz));

app.use('/demobutton/thirdparty', express.static('./thirdparty'));
app.use('/libs/mdi/css/materialdesignicons.css', express.static('./libs/mdi/css/materialdesignicons.css'));
app.use('/libs/mdi/css/materialdesignicons.css.map', express.static('./libs/mdi/css/materialdesignicons.css.map'));
app.use('/libs/jquery/dist/jquery.js', express.static('./libs/jquery/dist/jquery.js'));
app.use('/libs/mdi/scss/_icons.scss', express.static('./libs/mdi/scss/_icons.scss'));
app.use('/demobutton/dist', express.static('./dist'));
app.use('/', express.static('./'));

console.log("Iniciando servidor HTTP");
console.log("  porta " + port);
console.log("  raiz " + raiz);

app.listen(port);
