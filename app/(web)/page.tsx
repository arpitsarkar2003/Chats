import Image from "next/image";
import AuthFrom from "./components/AuthFrom";

export default function Home() {
    return (
        <div className="flex min-h-full">
            <div className="bg-black w-[50%] h-[100vh] text-white">
                <div className="flex flex-col justify-center pl-20 h-full text-left text-">
                    <h1 className="text-6xl font-serif py-3">
                        This is Real Time
                    </h1>
                    <h1 className="text-9xl font-serif py-1">Chat</h1>
                    <h1 className="text-6xl font-serif">Application</h1>
                </div>
            </div>
            <div className="flex w-[50%] min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-emerald-50">
                <div className="">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center">
                        <Image src="https://i.ibb.co/yQGh3j1/chat.png" width={200} height={200} alt="logo" />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>

                    <AuthFrom />
                </div>

            </div>
        </div>

    )
}
