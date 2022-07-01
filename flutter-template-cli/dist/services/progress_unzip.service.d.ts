import { Progress } from 'progress-stream';
export interface ProgressCallback {
    onDone?: () => void;
    onProgress?: (progress: Progress) => void;
    onError?: (e: never) => void;
}
export declare class ProgressUnzipService {
    private static instance;
    private constructor();
    static getInstance(): ProgressUnzipService;
    unzipFile(source: string, destination: string, callback?: ProgressCallback): void;
}
