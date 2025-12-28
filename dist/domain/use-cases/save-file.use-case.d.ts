export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}
export interface Options {
    fileContent: string;
    fileDestination?: string;
    fileName?: string;
}
export declare class SaveFile implements SaveFileUseCase {
    constructor();
    execute({ fileContent, fileDestination, fileName }: Options): boolean;
}
//# sourceMappingURL=save-file.use-case.d.ts.map