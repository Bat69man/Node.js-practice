/**
 * references:
 * https://www.youtube.com/watch?v=l20MBBFZAmA&list=PL7wbckluTjxTuxNTKCI7c4bwLFCiQif6c&index=6&ab_channel=ProgrammingwithMosh
 * 
 * https://www.youtube.com/watch?v=V2gVOIyUqVs&list=PL7wbckluTjxTuxNTKCI7c4bwLFCiQif6c&index=5&ab_channel=ProgrammingwithMosh
 * 
 * https://www.youtube.com/watch?v=9ErAONqE6HE&list=PL7wbckluTjxTuxNTKCI7c4bwLFCiQif6c&index=4&ab_channel=ProgrammingwithMosh
 */
const Person = require('./person')
const person = new Person()

// Making an event listener
// emitter.addListener('messageLogged',()=>{}) OR
person.on('messageLogged', (arg) => console.log('Listener called!\n',arg))

person.log('hello')