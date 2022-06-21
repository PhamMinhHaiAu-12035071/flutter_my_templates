import type { FC } from 'react';
export declare type Spinner = {
    interval: number;
    frames: string[];
};
export declare const RenderSpinner: FC<{
    spinner: Spinner;
}>;
