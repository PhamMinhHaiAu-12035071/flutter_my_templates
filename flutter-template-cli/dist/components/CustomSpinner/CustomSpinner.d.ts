import React from 'react';
export declare type Spinner = {
    interval: number;
    frames: string[];
};
export interface CustomSpinnerProps {
    spinner: Spinner;
    colorSpinner?: string;
    arrText?: Array<React.ReactElement>;
}
export declare const CustomSpinner: ({ spinner, colorSpinner, arrText, }: CustomSpinnerProps) => JSX.Element;
