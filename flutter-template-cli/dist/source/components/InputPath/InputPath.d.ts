import { ValidationError } from 'fastest-validator';
import React from 'react';
import { StatusPathCombine } from '../../stores/reducers/pathSlice';
interface InputPathProps {
    path: string;
    onSubmit: (value: string) => void;
    onChange: (value: string) => void;
    status: StatusPathCombine;
    errors: Array<ValidationError> | undefined;
    time: string;
}
export declare const InputPath: (props: InputPathProps) => React.ReactElement;
export {};
