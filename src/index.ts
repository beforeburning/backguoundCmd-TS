import * as program from 'commander'
import CommanderReq from './controller/commanderReq';

program
    .version('0.0.1')
    .description('cmdVerticalTitle')
    .option('-p, --path <filePath>', 'your file src')
    .option('-i, --id <filePath>', 'your entry id');

program.parse(process.argv);

let app = new CommanderReq(program.path, program.id);
app.start();
