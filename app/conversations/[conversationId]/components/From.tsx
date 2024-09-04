"use client"

import useConversation from "@/app/hooks/useConversation";
import axios from "axios";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";
import { CldUploadButton } from "next-cloudinary";

const Form = () => {
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
        setValue("message", "", { shouldValidate: true });
        axios.post("/api/messages", {
            ...data,
            conversationId
        })
        .catch(error => {
            console.error("Error sending message:", error);
        });
    }

    const handleUpload = (result: any) => {
        // Log the entire result to understand its structure
        console.log("Upload result:", result);

        if (result?.info?.secure_url) {
            axios.post('/api/messages', {
                image: result.info.secure_url,
                conversationId
            })
            .catch(error => {
                console.error("Error uploading image:", error);
            });
        } else {
            console.error("Upload result does not contain secure_url:", result);
        }
    }

    return (
        <div className="py-4 px-4 bg-white border-t flex items-center gap-2 lg:gap-4 w-full">
            <CldUploadButton 
                options={{ maxFiles: 1 }} 
                uploadPreset="chatapp" 
                onSuccess={handleUpload}>
                <HiPhoto size={30} color="orange" className="cursor-pointer hover:opacity-75 transition" />
            </CldUploadButton>

            <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2 lg:gap-4 w-full">
                <MessageInput id="message" register={register} errors={errors} required={true} placeholder="Write a message" />
                <button type="submit" className="bg-orange-500 rounded-full p-2 hover:bg-orange-600 transition">
                    <HiPaperAirplane size={18} color="white" />
                </button>
            </form>
        </div>
    );
}

export default Form;
