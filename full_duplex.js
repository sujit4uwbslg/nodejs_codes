import { Duplex,PassThrough } from "stream";
import { createReadStream,createWriteStream } from "fs"

const readStream = createReadStream('data/test.txt');
const writeStream = createWriteStream('data/copy.txt');

class Throttle extends Duplex {

  constructor(ms) {
    super();
    this.delay = ms;
  }

  _read(){}

  _write(chunk, encoding, callback) {
    this.push(chunk);
    setTimeout(callback, this.delay);
  }

  _final(){
    this.push(null)
  }
}

const report = new PassThrough();
const throttle = new Throttle(100);

let total = 0;
report.on('data', (chunk) => {
  total += chunk.length;
  console.log('bytes: ', total);
})

readStream.pipe(throttle).pipe(report).pipe(writeStream);