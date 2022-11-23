
var http = require('http');
var n = require ('./primeiromodulo');
http.createServer(function (req, res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<b>Aula de node.js<b> <br>');
    res.write('<i>Aluna: </i>');
    res.write(n.nome()+'<br>');
    res.write(Date());

    res.end('bom dia');

}).listen(80);