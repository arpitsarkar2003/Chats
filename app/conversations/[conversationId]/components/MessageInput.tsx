"use client"

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";


interface MessageInputProps {
    placeholder?: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    disabled?: boolean;
}


const MessageInput = ({
    placeholder,
    id,
    type,
    required,
    register,
    errors,
    disabled
}: MessageInputProps) => {



    return ( 
        <div className="relative w-full">
            <input
                {...register(id, { required })}
                id={id}
                type={type}
                autoComplete={id}
                required={required}
                disabled={disabled}
                placeholder={placeholder}
                className="text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none"
            />
        </div>
     );
}
 
export default MessageInput;