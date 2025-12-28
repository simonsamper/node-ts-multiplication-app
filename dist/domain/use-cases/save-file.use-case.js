import fs from 'fs';
export class SaveFile {
    constructor(
    /**
     * Repository: StorageRepository
     */
    ) { }
    execute({ fileContent, fileDestination = 'outputs', fileName = 'table' }) {
        try {
            if (!fs.existsSync(fileDestination)) {
                fs.mkdirSync(fileDestination, { recursive: true });
            }
            fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
            return true;
        }
        catch (error) {
            console.error(error);
            return false;
        }
    }
}
//# sourceMappingURL=save-file.use-case.js.map