let fs = require('fs');

fs.writeFile('nodejs_architecture', 'adding text using nodejs', function (err) {

    if (err) {
        console.log('error in write file');
    } else {
       console.log('successfully write file'); 
    }
    
});


// readfile 

fs.readFile('nodejs_architecture', function (err, data) {

    if (err) {
        console.log('error in read file :');
        return err;
    } else {
        console.log('your data is :', data.toString());
        return data;
    }
    
});


// appending text in nodejs_architecture.txt file 

fs.appendFile('nodejs_architecture', 'hello ravi you are learning full stack web development', function (err) {

    if (err) {
        console.log('error in appending file');
    } else {
        console.log('successfullly append text in nodejs_architecture');
    }
    
});


// deletion process in nodejs

fs.unlink('nodejs_architecture', function (err) {
    
    if (err) {
        console.log('error in deleting file');
    } else {
        console.log('successfully delete file');
    }
});

