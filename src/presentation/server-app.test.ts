import { jest } from '@jest/globals';

import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';
import { ServerApp } from './server-app';

describe( 'ServerApp', () => {

    const options = {
        base: 2,
        limit: 10,
        showTable: false,
        name: 'test-filename',
        destination: 'test-destination'
    };
    beforeEach( () => {
        jest.clearAllMocks();
    } );

    test( 'should create ServerApp instance', () => {

        const serverApp = new ServerApp();
        expect( serverApp ).toBeInstanceOf( ServerApp );
        expect( typeof ServerApp.run ).toBe( 'function' );
    } );

    test( 'should run ServerApp with options', () => {

        // const logSpy = jest.spyOn( console, 'log' );
        // const createTableSpy = jest.spyOn( CreateTable.prototype, 'execute' );
        // const saveFileSpy = jest.spyOn( SaveFile.prototype, 'execute' );



        // ServerApp.run( options );

        // expect( logSpy ).toHaveBeenCalledTimes( 2 );
        // expect( logSpy ).toHaveBeenCalledWith( 'ServerApp running...' );
        // expect( logSpy ).toHaveBeenCalledWith( 'File Created!' );

        // expect( createTableSpy ).toHaveBeenCalledTimes( 1 );
        // expect( createTableSpy ).toHaveBeenCalledWith( {
        //     base: options.base,
        //     limit: options.limit
        // } );

        // expect( saveFileSpy ).toHaveBeenCalledTimes( 1 );
        // expect( saveFileSpy ).toHaveBeenCalledWith( {
        //     fileContent: createTableSpy.mock.results[ 0 ].value,
        //     fileDestination: options.destination,
        //     fileName: options.name
        // } );

    } );

    test( 'should run with custom values mocked', () => {

        const logSpy = jest.spyOn( console, 'log' ).mockImplementation( () => { } );
        const createTableSpy = jest.spyOn( CreateTable.prototype, 'execute' ).mockReturnValue( 'mocked table' );
        const saveFileSpy = jest.spyOn( SaveFile.prototype, 'execute' ).mockReturnValue( true );

        ServerApp.run( options );

        expect( createTableSpy ).toHaveBeenCalledWith( {
            base: options.base,
            limit: options.limit
        } );
        expect( saveFileSpy ).toHaveBeenCalledWith( {
            fileContent: 'mocked table',
            fileDestination: options.destination,
            fileName: options.name
        } );

        logSpy.mockRestore();
        createTableSpy.mockRestore();
        saveFileSpy.mockRestore();
    } );

} );