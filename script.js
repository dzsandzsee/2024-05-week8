//import * as fs from 'node:fs';
const { captureRejectionSymbol } = require('node:events');
const fs = require('node:fs')

/* try {
  const data = fs.readFileSync('file.json', 'utf8');
  console.log(data);
  const jsonData = JSON.parse(data)
  console.log(jsonData)
} catch (err) {
  console.error('Error reading the file:', err);
} */

fs.readFile('file.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    console.log(data);

    try{
        const jsonData = JSON.parse(data);
        console.log(jsonData)

    }catch (parsErr) {
        console.err('Error at parsing the data', parsErr)
    }
  });