import { createReadStream,createWriteStream } from 'fs';
import  zlib  from 'zlib';

var gzip = zlib.createGzip();
var rstream = createReadStream('data/test.txt');
var wstream = createWriteStream('data/test.txt.gz');

rstream   // reads from myfile.txt
  .pipe(gzip)  // compresses
  .pipe(wstream)  // writes to myfile.txt.gz
  .on('finish', function () {  // finished
    console.log('done compressing');
  });