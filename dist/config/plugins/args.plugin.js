import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
export const yarg = yargs(hideBin(process.argv))
    .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'La base de la tabla de multiplicar'
})
    .option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Limite de la tabla de multiplicar'
})
    .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Mostrar la tabla en la consola'
})
    .option('n', {
    alias: 'name',
    type: 'string',
    default: 'multiplication-table',
    describe: 'Nombre del archivo'
})
    .option('d', {
    alias: 'destination',
    type: 'string',
    default: 'outputs',
    describe: 'Destino de la tabla'
})
    .check((argv, options) => {
    if (argv.b < 1) {
        throw 'Error: La base debe ser un número positivo';
    }
    if (argv.l < 1) {
        throw 'Error: El límite debe ser un número positivo';
    }
    return true;
})
    .parseSync();
//# sourceMappingURL=args.plugin.js.map