const fs = require('fs');
const path = require( 'path' );

executeRecursive('./tests/');

function executeRecursive(dir) {
    fs.readdir(dir, (err, files) => {
        files.forEach(file => {
            fs.stat(path.join(dir, file), (err, stat) => {
                if (stat.isDirectory()) {
                    executeRecursive(path.join(dir, file));
                } else if (path.join(dir, file).endsWith('.spec.js')) {
                    console.log(path.join(dir, file));
                    eval(fs.readFileSync(path.join(dir, file))+'');
                }
            });
        });
    });
}
