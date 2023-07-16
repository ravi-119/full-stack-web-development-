let http = require('http');

let server = http.createServer((req, res)=>{
    if (req.url == '/') {
        res.write('<h1> I am happy to learn full stack web development from PW skills!</h1>')
    }
    res.end();

})
server.listen(5000);

console.log('the http server is running on port 5000');


