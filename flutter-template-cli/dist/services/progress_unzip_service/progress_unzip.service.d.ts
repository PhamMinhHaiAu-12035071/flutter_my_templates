import { Progress } from 'progress-stream';
export interface LifecycleProgress {
    onInit?: () => void;
    onProgress?: (progress: Progress) => void;
    onSuccess?: () => void;
    onError?: (e: never) => void;
}
export declare class ProgressUnzipService {
    private static instance;
    private constructor();
    static getInstance(): ProgressUnzipService;
    unzipFile(source: string, destination: string, _callback?: LifecycleProgress): void;
}
