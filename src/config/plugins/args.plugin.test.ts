// import { yarg } from './args.plugin';

import { jest } from '@jest/globals';

const runCommand = async ( args: string[] ) => {

    process.argv = [ ...process.argv, ...args ];

    const { yarg } = await import( './args.plugin' );
    return yarg;
};


describe( 'args plugin', () => {

    const originalArgv = process.argv;

    beforeEach( () => {
        process.argv = originalArgv;
        jest.resetModules();
    } );

    test( 'should return default values', async () => {

        const argv = await runCommand( [ '-b', '5' ] );

        expect( argv ).toEqual( expect.objectContaining( {
            b: 5,
            l: 10,
            s: false,
            n: 'multiplication-table',
            d: 'outputs'
        } ) );
    } );


    test( 'should return custom values', async () => {
        const argv = await runCommand( [ '-b', '8', '-l', '15', '-s', '-n', 'custom-table', '-d', 'custom-destination' ] );
        expect( argv ).toEqual( expect.objectContaining( {
            b: 8,
            l: 15,
            s: true,
            n: 'custom-table',
            d: 'custom-destination'
        } ) );
    } );
} );