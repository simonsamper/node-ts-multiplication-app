import { jest } from '@jest/globals';
import fs from 'fs';
import { SaveFile } from './save-file.use-case';




describe( 'SaveFileUseCase', () => {

    const customOptions = {
        fileContent: 'custom content',
        fileDestination: 'custom-outputs/file-destination',
        fileName: 'custom-table-name',
    };
    const customFilePath = `${ customOptions.fileDestination }/${ customOptions.fileName }.txt`;

    // beforeEach( () => {
    //     jest.clearAllMocks();
    // } );

    afterEach( () => {
        // Limpiar el directorio de outputs
        const outputFolderExists = fs.existsSync( 'outputs' );
        if ( outputFolderExists ) {
            fs.rmSync( 'outputs', { recursive: true } );
        }

        const customOutputFolderExists = fs.existsSync( customOptions.fileDestination );
        if ( customOutputFolderExists ) {
            fs.rmSync( customOptions.fileDestination, { recursive: true } );
        }
    } );

    test( 'should save file with default values', () => {

        const saveFile = new SaveFile();
        const filePath = 'outputs/table.txt';
        const options = {
            fileContent: 'test content'
        };

        const result = saveFile.execute( options );

        const fileExist = fs.existsSync( filePath );
        const fileContent = fs.readFileSync( filePath, { encoding: 'utf-8' } );

        expect( result ).toBe( true );
        expect( fileExist ).toBe( true );
        expect( fileContent ).toBe( options.fileContent );
    } );

    test( 'should save file with custom values', () => {

        const saveFile = new SaveFile();

        const result = saveFile.execute( customOptions );
        const fileExist = fs.existsSync( customFilePath );
        const fileContent = fs.readFileSync( customFilePath, { encoding: 'utf-8' } );

        expect( result ).toBe( true );
        expect( fileExist ).toBe( true );
        expect( fileContent ).toBe( customOptions.fileContent );
    } );

    test( 'should return false if directory cannot be created', () => {

        const saveFile = new SaveFile();
        const mkdirSpy = jest.spyOn( fs, 'mkdirSync' ).mockImplementation(
            () => {
                throw new Error( 'Directory cannot be created' );
            }
        );
        const result = saveFile.execute( customOptions );

        expect( result ).toBe( false );

        mkdirSpy.mockRestore();
    } );

    test( 'should return false if file cannot be created', () => {

        const saveFile = new SaveFile();
        const writeFileSpy = jest.spyOn( fs, 'mkdirSync' ).mockImplementation(
            () => {
                throw new Error( 'This is a custom writing error message' );
            }
        );
        const result = saveFile.execute( { fileContent: 'HOLA MUNDO' } );
        expect( result ).toBe( false );
        writeFileSpy.mockRestore();
    } );
} );