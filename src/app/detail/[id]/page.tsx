import Image from "next/image";
import { useState } from "react";

export default async function Home({ params }: { params: { id: string } }) {

  const id = params.id;
  const response = await fetch("https://api.imgflip.com/get_memes");
  const data: any = await response.json();
  const meme = data.data.memes.find((meme:any)=> meme.id === id)

  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");


  const username = "Waasey-Zulfiqar";
  const password = "memegenerator";

  // const url = `https://api.imgflip.com/caption_image?template_id=${response.response[0].id}&username=${username}&password=${password}&text0=${text}&text1=${text1}`;

  const handleSubmit = () => {
     const url = `https://api.imgflip.com/caption_image?template_id=<memeId>&username=<${username}>&password=<${password}>&text0=<${inputValue1}>&text1=<${inputValue2}&gt`;
     console.log(url);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative z-[-1] flex-col place-items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-gradient-radial from-sky-200 via-mint-200 to-cyan-100 blur-2xl opacity-70"></div>
        {meme && <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src={meme.url}
          alt="Next.js Logo"
          width={600}
          height={600}
          priority
        />}

        <div>
          <input onChange={(e) => setInputValue1(e.target.value)} type="text" className="border border-black block my-3"/>
         <input onChange={(e) => setInputValue2(e.target.value)} type="text" className="border border-black my-4"/> 
         <button onClick={handleSubmit} className="border border-black block px-4 py-1">Submit</button>
        </div>
        
      </div>
    </main>
  );
}
