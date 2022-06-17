import { StatusPathCombine } from '../../stores/reducers/pathSlice';
interface InputPathProps {
    path: string;
    onSubmit: (value: string) => void;
    onChange: (value: string) => void;
    status: StatusPathCombine;
}
export declare const InputPath: (props: InputPathProps) => JSX.Element;
export {};
