const http = require("http");
const fs = require("fs").promises;


const host = "localhost";
const port = 8000;
let indexFile; 
//Listener que va a devolver lo que le digamos segun el codigo de estado

const requesListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(indexFile);
    };

//Ahora creamos el server llamando a la funcion de Listener que hemos creado antes

const server = http.createServer(requesListener);

fs.readFile(__dirname + "/index.html")
    .then(contents => {
        indexFile = contents;
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    })
    .catch(err => {
        console.log(err);
        process.exit();
    });
