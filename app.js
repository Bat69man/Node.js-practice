// if we want to use services provided by servers, we need to request server.
// for that we need to reach the server by IP address.
// generally we do not use ip addresses, we use domain names but in backend we use ip addresses.

// One server may be providing more than one sevices.
// different services are provided at different port numbers.
// i.e) HTTPS : 443, HTTP : 80, SMTP : 23, FTP : 20 ect...

// so we need to also define that what service we want to use from ther servers, and we can define it by mentioning port number at the end of the ip address seperatred by :
// i.e) 127.0.01:8080

// here we have a function called createServer()
// createServer() is present in 'http' module so we have to import that.
// createServer(function(request, renspons))
// the parameter function takses 2 arguments 
// 1) something/data/request you recieved from the user/client
// 2) something/data/response you want to send the client.

//import http from 'http'; // importing http package
var http = require('http'); // another simple way

// We ahve created a server using this function, but we havn't mentioned at which port number it should listen ?
// so at the and of function we have to specify port number too
// i.e) http.createServer(function(req, res)).listen(portNumber)

http.createServer( (request, response)=>{

    if(request.url == "/"){
        // it is always advisable to include Header information.
        // it specifies the status, and type of content you are sending back.
        response.writeHead(200, {'Content-Type': 'text/html'})
        // we can also specify content type as JSON or XML if we are using that
    
        // creating response to send to the client
        response.write("Welcome back user");
        
        // specifies the end of the response and send the final respose back to the client
        response.end();
    
        // if there is only one statement you want to return, then you can use only end() as well.
        // i.e) response.end("Welcome back users");
    }
    else if(request.url == "/date"){
        let date = new Date();
        response.end("Date:"+date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()+"\nTime:"+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds())
    }
    else{
        response.writeHead(404)
        response.end('URL not found!')
    }
    // instead of doing this things, we will use 'express' which will make our work much easier
}).listen(9000);