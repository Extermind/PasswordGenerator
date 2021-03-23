var http = require('http');
var url = require('url');
var fs = require('fs');
var gen = require('./genModule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type':'text/html'});

  var q = url.parse(req.url, true).query;
  if(q.len != undefined && q.len != ""){
    //generate password depends on lenght
    var pass = gen.generate(q.len); 
    var content = '<div class="anwser-container">'+pass+'</div>';
    res.write(content);
    } 
    fs.readFile('./app.html', (err, content)=> {
      if (!err){
        res.write(content)
      }
      res.end();
    })
}).listen(8080); 

