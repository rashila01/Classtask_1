const fs = require('fs');
const promisifyReadFile = (filePath, encoding) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    });
}
console.log(promisifyReadFile('./myfamily/myfam.txt', 'utf8').then((data) => {
    console.log(data);

}).catch((err) => {
    console.log(err);
}))