const resource = require('./resource')

const handleGetRequest = (courseId, res) => {
    if(isNaN(courseId)) return res.status(400).send('ERROR: invalid course id given')
    let index = resource.courses.findIndex(x => x.id == courseId)
    if(index !== -1) res.send(resource.courses[index])
    else res.status(404).send("ERROR: course with id:"+courseId+" not found")
}

const handlePostRequest = (courseName, res) => {
    // if 'name' property doest not exist in bodys
    if(!courseName) return res.status(400).send("ERROR: 'name' is not defined")
    
    // if course is already exist in array
    let index = courses.findIndex(x => x.name.toLowerCase() == courseName.toLowerCase())
    if(index !== -1) return res.status(400).send('ERROR: Course "'+courseName+'" already exist...')
    
    // create new object and store it in array and return new object
    courses.push(new resource.Course(courses.length+1, courseName))
    
    // in case user want to know the id/details of the new course, we send it.
    res.send(courses[courses.length-1])
}

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

const handleDeleteRequest = (courseId, res) => {
    if(!courseId) return res.status(400).send("ERROR: 'id' is not defined")
        
    let index = courses.findIndex(x => x.id == courseId)
    if(index == -1) return res.status(404).send("ERROR: course with id:"+courseId+" not found")
    
    let deleted = courses[index]
    // delete 1 element from given index
    courses.splice(index, 1)
    res.send(deleted)
}

module.exports = {
    get: handleGetRequest,
    post: handlePostRequest,
    put: handlePutRequest,
    delete: handleDeleteRequest,
}