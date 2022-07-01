export interface RsyncCallback {
    onDone?: (error: never, code: never, cmd: never, extra?: ExtraInformation) => void;
    onProgress?: (data: RsyncProgressData | undefined) => void;
    onError?: (data: never) => void;
}
export interface RsyncProgressData {
    'Total Size': string;
    Progress: string;
    'Speed Up': string;
    'Estimate Time': string;
}
export interface ExtraInformation {
    source: string;
    destination: string;
}
export declare class RsyncService {
    private static instance;
    private constructor();
    static getInstance(): RsyncService;
    validateProgressData(first: string, second: string, third: string, fourth: string): boolean;
    parseProgressData(data: string): RsyncProgressData | undefined;
    copyFile(source: string, destination: string, rsyncCallback?: RsyncCallback): void;
}
