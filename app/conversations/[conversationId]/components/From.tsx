"use client";

import useConversation from "@/app/hooks/useConversation";
import axios from "axios";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";

const From = () => {

    const { conversationId } = useConversation();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            message: ""
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setValue("message", "", { shouldValidate: true })
        axios.post("/api/messages", {
            ...data,
            conversationId
        })
    }


    return ( 
        <div className="py-4 px-4 bg-white border-t flex items-center gap-2 lg:gap-4 w-full">
            <HiPhoto size={30} color="orange" onClick={() => {}} className="cursor-pointer hover:opacity-75 transition"/>
            <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2 lg:gap-4 w-full">
                <MessageInput id="message" register={register} errors={errors} required={true} placeholder="Write a message" />
            </form>
            <button type="submit" className="bg-orange-500 rounded-full p-2 hover:bg-orange-600 transition">
                <HiPaperAirplane size={18} color="white" />
            </button>

        </div>
     );
}
 
export default From;