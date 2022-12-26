const { fstat } = require("fs");
const http = require("http");
const server = http.createServer((req, res)=>{

    const data = fs.readFile(`${__dirname}/UserApi/userapi.json`, "utf-8");
        const objData = JSON.parse(data);
    //console.log(req.url);
    if(req.url == '/'){
        res.end('Hi from the other side me');
    }else if(req.url == '/about'){
        res.end('Hi from the other side about');
    }else if(req.url == '/contact'){
        res.end('Hi from the other side contact');
    }else if(req.url == "/userapi"){
    res.writeHead(200, { "content-type" : "application/json"});
            res.end(objData[2].name);
    }
    else{
        res.writeHead(404 , {"Content-type": "text/html"}); //status
        res.end('<h1> 404 Error Page </h1>');
    }
    res.end('Hello from the other side');
});

server.listen(4000,"127.0.0.1",() => {
    console.log("listening to the port no 4000");
});