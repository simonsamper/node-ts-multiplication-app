export class CreateTable {
    constructor(
    /**
     * DI - Dependency Injection
     */
    ) { }
    execute({ base, limit = 10 }) {
        let outputMessage = '';
        for (let i = 1; i <= limit; i++) {
            outputMessage += `${base} x ${i} = ${base * i}\n`;
        }
        return outputMessage;
    }
}
//# sourceMappingURL=create-table.use-case.js.map