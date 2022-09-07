const express = require('express')

// before using express, we have initialize.
const app = express() // initializing

/*
    Here we want to read the request url and print the data in web page.
    Our URL will be localhost with port number 9000. 127.0.0.1:9000
    
    And there we will get the request for student resouces with student ids like
    127.0.0.1:9000/student/33

    So this URL is dynamic since the student id can vary.

    In real world, we fetch the details of the student from the database using id given by the user.

    But here, we will simply print the student id on the web page.

    There are 2 ways to send/recive the request
    1) parameters
        127.0.0.1:9000/student/33
        this method is used with REST APIs
    2) query string
        127.0.0.1:9000/student?id=33
        it is used in simple browsing
*/

const PORT_NUMBER = 9000
// now lets start the server using listen(portNumber , [function])
app.listen(PORT_NUMBER, () => console.log('Listening on port 9000')) 
// server has started listening to the requests.

/*
    -----------------
      R O U T I N G
    -----------------

    In our websites, we will be having multiple different links.
    For different type of link, we pass the different request.
    For different requests, we will be having different response.

    So how to handle a particular request?
    it's decided with the he;p of routing

    express has that concept inbuilt.

    There are different methods in express like get, post, put, delete etc.
    To fetch data from the server, we use get()
    To send the data, we use post()

    get() will take 2 parameters.

        1) URL (which you are targeting)
        - So in our case, we are requesting for home-page(/).

        2) function(req, res)
        - To perform tasks/operations on that URL requests.
*/

//--------------------------------------------------------------------------------
// on home-page(127.0.0.1:9000/), we will print 'Hello World!'
app.get('/', (req, res)=>{
    // req object will have data which is going from client to server
    // res object will have data which is going from server to client

    // printing on the web page
    res.send('Hello World!') // sending response
})

// on '127.0.0.1:9000/student', we will print 'Hello student'
// app.get('/student', (req, res)=>{
//     res.send('Hello Student!') // sending response
// })

/* 
    on '127.0.0.1:9000/student/20', we will print 20(id) as it is

    since the id can vary, so its dynamic.
    so in the routing url, we will specify this kind of things with :id, :name etc.
    It acts as a placeholder/variable.
    We can access that by req object
*/
app.get('/student/:id', (req, res)=>{
    const id = Number(req.params.id)
    if( id < 1)
        res.send(`Invalid Student id ${id}`)
    else
        res.send(`Welcome Student ${id}`)
})

/*
    So for different URLs, we have different functionalities, and we achieve that through 'Routing', means defining HOW different URL requests will be handle.
*/

/* 
    We have talked about URL/request with parameters.
    Now wthat if we have request as a query ?
    Like 127.0.0.1:9000/student?id=20
    We can handle it in '/student' route.
*/

app.get('/student', (req, res)=>{
    const id = req.query.id
    if(id !== undefined){
        if(id < 1)
            res.send(`Invalid Student id ${id}`)
        else
            res.send(`Hello Student ${id}`)
    }
    else
        res.send('Hello Student...')
})