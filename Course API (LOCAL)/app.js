/**
 * This is a local API created using node.js and express.js
 * This includes handling of get, post, put and delete requests
 * Class of Course includes ID and Name of course.
 * Data is stored locally in an array
 * JSON format is used here as a middleware
 */

const handleRequest = require('./handleRequest')
const express = require('express')
const app = express()
app.use(express.json()) // using middleware express.json

/*
    In real world, port is assigned to out application dynamically.
    We can fetch information about them in 'environment variable' called PORT.
    Global object 'process' contains information about it.
    We can simply say (process.env.PORT).

    If it is set then we are gonna use this, or we will use our default port 9000
*/
const PORT = process.env.PORT || 9000

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`))

/**
 * GET request
 */

app.get('/', (req, res) => res.send('Hello User...'))
app.get('/api/course', (req, res) => {
    // if id is defined in queryString
    if(req.query.id) handleRequest.get(parseInt(req.query.id), res)
    else res.send(courses)
})
app.get('/api/course/:id', (req, res) => {
    handleRequest.get(parseInt(req.params.id), res)
})

/*
    P O S T request

    Yet we have seen the get requeest to get/send the data back to the client
    Now we will see the 'post' method to 'create' data.
    While data will be recieved, we ahve to make sure that data will be in JSON format.
    For that, express provides method called .json()
    express.json() returns middleware which will be used by our app using use() method.

    To check get() we simply go to the browser, but in case on post(), we have to use tools like Postman.

    We can check it by using HTML form also, where we have to set method="post" and action="Route" and submit form.

    Else, go to the postman, select type as POST,
    then enter our localhost URL into URL section,
    then go to the body part and select raw -> JSON(from last dropdown)
    then create a JSON object as per your need
*/

app.post('/api/course', (req, res) => {
    if(req.body.name) handleRequest.post(req.body.name, res)
    else handleRequest.post(req.query.name, res)
})
app.post('/api/course/:name', (req, res) => {
    handleRequest.post(req.params.name, res)
})

/*
 * PUT (Update) method 
 *  
 * it is used to update exsisting data
 * we will check it trough postman also
 */

app.put('/api/course', (req, res) => {
    if(req.body.id && req.body.name) handleRequest.put(parseInt(req.body.id), req.body.name, res)
    else handleRequest.put(parseInt(req.query.id), req.query.name, res)
})
app.put('/api/course/:id/:name', (req, res) => {
    handleRequest.put(parseInt(req.params.id), req.params.name, res)
})

/**
 * DELETE request
 * 
 * It is used to send request to delete particular element from resource
 * We can't send it through our browser
 */

app.delete('/api/course', (req, res) => {
    if(req.body.id) handleRequest.delete(parseInt(req.body.id), res)
    else handleRequest.delete(parseInt(req.query.id), res)
})
app.delete('/api/course/:id', (req, res) => {
    handleRequest.delete(parseInt(req.params.id), res)
})