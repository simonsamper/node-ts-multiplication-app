import { CreateTable } from '../domain/use-cases/create-table.use-case.js';
import { SaveFile } from '../domain/use-cases/save-file.use-case.js';
export class ServerApp {
    static run({ base, limit, showTable, name, destination }) {
        console.log('ServerApp running...');
        const table = new CreateTable().execute({ base, limit });
        const wasCreated = new SaveFile()
            .execute({
            fileContent: table,
            fileDestination: destination,
            fileName: name
        });
        if (showTable)
            console.log(table);
        if (wasCreated) {
            console.log('File Created!');
        }
        else {
            console.log('File not Created!');
        }
    }
}
//# sourceMappingURL=server-app.js.map