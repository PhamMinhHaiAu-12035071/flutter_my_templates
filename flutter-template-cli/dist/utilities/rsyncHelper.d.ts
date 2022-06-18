export interface RsyncCallback {
    onDone?: (error: never, code: never, cmd: never) => void;
    onProgress?: (data: never) => void;
    onError?: (data: never) => void;
}
export declare const rsyncHelper: (source: string, destination: string, rsyncCallback: RsyncCallback) => void;
