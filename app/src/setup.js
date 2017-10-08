const fs = require('fs');
const path = require('path');
const http = require('http');
let file;


file = fs.createWriteStream('./schema.graphql');
http.get('http://0.0.0.0:3000/schema', resp => {
    if (resp.statusCode === 200) {
        resp.pipe(file);
    } else {
        throw new Error('Failed to download the schema.');
    }
});