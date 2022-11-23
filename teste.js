
var http = require('http');
var n = require ('./primeiromodulo');
var dia = require('./moduloData');
http.createServer(function (req, res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<b>Aula de node.js<b> <br>');
    res.write('<i>Aluna: </i>');
    res.write(n.nome()+'<br>');
    //res.write(Date());
    res.write(dia.diaDaSemana()+'<br>');
    res.end('bom dia');

}).listen(80);