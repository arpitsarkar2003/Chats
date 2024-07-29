import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between m-20">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />

        <Image
          src="https://i.ibb.co/yQGh3j1/chat.png"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />

        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </div>

      <div className="flex flex-col justify-center h-[60vh] items-center">
        <a href="https://arpitsarkar.vercel.app/" target="_blank" className="text-6xl hover:underline ">Arpit Sarkar</a>
        <p className="text-wrap text-sm font-mono p-10 text-center">This is Chat app. It&apos;s a realtime chat application. It&apos;s under construction</p>
      </div>

    </div>
  );
}


