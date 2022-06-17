import type { FC } from 'react';
export declare type Spinner = {
    interval: number;
    frames: string[];
};
declare const RenderSpinner: FC<{
    spinner: Spinner;
}>;
export default RenderSpinner;
