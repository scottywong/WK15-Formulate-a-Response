const http = require('http');
const port = 5000;

let server = http.createServer((req, res) => {
    let responseBody = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello World!</title>
    </head>
    <body>
      <h1>Hello there!</h1>
    </body>
    </html>
    `;
    let reqBody = '';
    req.on('data', (data) => {
        reqBody += data;
    });

    req.on('end', () => {
        if(reqBody) {
            req.body = parseBody(reqBody);
        };
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', "text/html");
    res.write(responseBody);
    res.end();
});

server.listen(port, () => {
    console.log("Succesfully started the server on port 5000")
});
