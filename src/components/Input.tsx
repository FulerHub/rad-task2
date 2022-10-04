import React, {FC} from 'react';
interface InputProps {
    className?: string;
    name: string;
    type: "text" | "password" | "email";
    placeholder: string;
    message?: string | undefined | false | any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    value?: string
}
const Input:FC<InputProps> = ({name,className,type,placeholder,value,message,onChange,onBlur}) => {
    return (
        <>
            <input name={name} className={className ? className :"w-full py-2 border border-black"} type={type} placeholder={placeholder} onChange={onChange} onBlur={onBlur} value={value}/>
            <p style={{color:"#ff0000"}}>{message}</p>
        </>
    );
};
export default Input;