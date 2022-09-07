/**
 * This is a local API created using node.js and express.js
 * This includes handling of get, post, put and delete requests
 * Class of Course includes ID and Name of course.
 * Data is stored locally in an array
 * JSON format is used here as a middleware
 */

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

// Class Course to store course information
class Course {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
}

// a predefined array of the Course
const courses = [
    new Course(1, 'Java') ,
    new Course(2, 'JavaScript') ,
    new Course(3, 'Python') ,
]

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`))

/**
 * GET request
 */
const handleGetRequest = (courseId, res) => {
    if(isNaN(courseId)) return res.status(400).send('ERROR: invalid course id given')
    let index = courses.findIndex(x => x.id == courseId)
    if(index !== -1) res.send(courses[index])
    else res.status(404).send("ERROR: course with id:"+courseId+" not found")
}

app.get('/', (req, res) => res.send('Hello User...'))
app.get('/api/course', (req, res) => {
    // if id is defined in queryString
    if(req.query.id) handleGetRequest(parseInt(req.query.id), res)
    else res.send(courses)
})
app.get('/api/course/:id', (req, res) => {
    handleGetRequest(parseInt(req.params.id), res)
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

const handlePostRequest = (courseName, res) => {
    // if 'name' property doest not exist in bodys
    if(!courseName) return res.status(400).send("ERROR: 'name' is not defined")

    // if course is already exist in array
    let index = courses.findIndex(x => x.name.toLowerCase() == courseName.toLowerCase())
    if(index !== -1) return res.status(400).send('ERROR: Course "'+courseName+'" already exist...')
    
    // create new object and store it in array and return new object
    courses.push(new Course(courses.length+1, courseName))

    // in case user want to know the id/details of the new course, we send it.
    res.send(courses[courses.length-1])
}

app.post('/api/course', (req, res) => {
    if(req.body.name) handlePostRequest(req.body.name, res)
    else handlePostRequest(req.query.name, res)
})
app.post('/api/course/:name', (req, res) => {
    handlePostRequest(req.params.name, res)
})

/*
 * PUT (Update) method 
 *  
 * it is used to update exsisting data
 * we will check it trough postman also
 */
const handlePutRequest = (courseId, courseName, res) => {
    // if undefine, return 400
    if(!courseId  || !courseName) return res.status(400).send("ERROR: 'id' or 'name' is not defined")

    // if not exist, return 404
    let index = courses.findIndex(x => x.id == courseId)
    if(index == -1) return res.status(404).send("ERROR: course with id:"+courseId+" not found")

    // Update course and return updated course
    courses[index].name = courseName
    res.send(courses[index])
}

app.put('/api/course', (req, res) => {
    if(req.body.id && req.body.name) handlePutRequest(parseInt(req.body.id), req.body.name, res)
    else handlePutRequest(parseInt(req.query.id), req.query.name, res)
})
app.put('/api/course/:id/:name', (req, res) => {
    handlePutRequest(parseInt(req.params.id), req.params.name, res)
})

/**
 * DELETE request
 * 
 * It is used to send request to delete particular element from resource
 * We can't send it through our browser
 */
const handleDeleteRequest = (courseId, res) => {
    if(!courseId) return res.status(400).send("ERROR: 'id' is not defined")
        
    let index = courses.findIndex(x => x.id == courseId)
    if(index == -1) return res.status(404).send("ERROR: course with id:"+courseId+" not found")
    
    let deleted = courses[index]
    // delete 1 element from given index
    courses.splice(index, 1)
    res.send(deleted)
}

app.delete('/api/course', (req, res) => {
    handleDeleteRequest(parseInt(req.body.id), res)
})
app.delete('/api/course/:id', (req, res) => {
    handleDeleteRequest(parseInt(req.params.id), res)
})