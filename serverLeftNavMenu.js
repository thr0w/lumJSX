var express = require("express");
var app = express();

var port = process.env.PORT || 8080;

app.get("/", function (req, res) {
    res.redirect("/demoLeftNav/index.html");
});

var raiz = __dirname + "/";
app.use(express.static(raiz));

app.use('/demoLeftNav/leftnav.jsx', express.static('./demoLeftNav'));
app.use('/', express.static('./'));

console.log("Iniciando servidor HTTP");
console.log("  porta " + port);
console.log("  raiz " + raiz);

app.listen(port);
