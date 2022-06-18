import { ValidationError } from 'fastest-validator';
import { StatusPathCombine } from '../../stores/reducers/pathSlice';
interface InputPathProps {
    path: string;
    onSubmit: (value: string) => void;
    onChange: (value: string) => void;
    status: StatusPathCombine;
    errors: Array<ValidationError> | undefined;
    time: string;
}
export declare const InputPath: (props: InputPathProps) => JSX.Element;
export {};
