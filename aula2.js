var http = require ('http');
var url = require ('url');

http.createServer(function (req, res) {
    res.writeHead (200, {'content-type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = "ano: " + q.year + "mes: " + q.mes;
    res.end(txt);
}).listen(80);