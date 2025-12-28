export interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string;
}
export interface CreateTableOptions {
    base: number;
    limit?: number;
}
export declare class CreateTable implements CreateTableUseCase {
    constructor();
    execute({ base, limit }: CreateTableOptions): string;
}
//# sourceMappingURL=create-table.use-case.d.ts.map