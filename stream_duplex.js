import {readFileSync} from "fs"
import { createReadStream,createWriteStream } from "fs"
const string_output = createWriteStream("data/test.txt", 'utf8')
// the rest
//many of thestring_output.pipe("Macho is great")
process.stdin.pipe(string_output)