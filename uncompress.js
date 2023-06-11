import { createReadStream } from "fs";
import zlib from 'zlib';
var gunzip = zlib.createGunzip();
var rstream = createReadStream('data/test.txt.gz');

rstream   // reads from myfile.txt.gz
  .pipe(gunzip)  // uncompresses
  .pipe(process.stdout);  // writes to stdout