"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("commander");
const commanderReq_1 = require("./controller/commanderReq");
program
    .version('0.0.1')
    .description('cmdVerticalTitle')
    .option('-p, --path <filePath>', 'your file src')
    .option('-i, --id <filePath>', 'your entry id');
program.parse(process.argv);
let app = new commanderReq_1.default(program.path, program.id);
app.start();
//# sourceMappingURL=index.js.map