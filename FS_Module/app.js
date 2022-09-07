const fs = require('fs')

// 1) name/path of the file
// 2) [optional] type of the file(encoding ie. utf8 etc.)
// 3) callback(err, data) : since node is Non-blocking I/O, so when the work is done, we have to inform the thread again.
fs.readFile('readme.txt', 'utf8', (err, data)=>{
    // all the output of the function is stored in the variable 'data'.
    if(err) throw err;
    console.log('\n----------- D A T A -----------\n'+data);
})

let data = `well hello there
my name is Dharmil Shah
i am from Rollwala computer centre MCA3.
nice to meet you...`

// it overwrites the file data
// 1) file name (creates new file if does not exists)
// 2) content we want to write
// 3) [optional] function, in which we can do something after data is written into file
fs.writeFile('new.txt', data, (err) => {
    if(err) throw err;
    console.log('\n => data written into file')
})

// appends data at the end of the file instead of replacing it
fs.appendFile('readme.txt', '\nHello penguine', (err) => {
    if(err) throw err;
    console.log('\n => data appended into file')
})

// removes file/directory
// fs.rm('new.txt', (err) => {
//     if(err) throw err;
//     console.log('new.txt is removed');
// })

// removes file or any link asynchronously
// fs.unlike('new.txt', (err) => {
//     if(err) throw err;
//     console.log('new.txt is removed');
// })