// Class Course to store course information
exports.Course = class Course {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
}

// a predefined array of the Course
exports.courses = courses = [
    new this.Course(1, 'Java') ,
    new this.Course(2, 'JavaScript') ,
    new this.Course(3, 'Python') ,
]