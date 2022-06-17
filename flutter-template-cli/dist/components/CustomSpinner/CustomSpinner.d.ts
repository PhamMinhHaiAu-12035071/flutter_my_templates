import React from 'react';
export declare type Spinner = {
    interval: number;
    frames: string[];
};
export interface CustomSpinnerProps {
    spinner: Spinner;
    colorSpinner?: string;
    text?: React.ReactElement | string;
    colorText?: string;
}
export declare const CustomSpinner: ({ spinner, colorSpinner, text, colorText, }: CustomSpinnerProps) => JSX.Element;
