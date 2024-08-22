import Image from "next/image";

export default async function Home({ params }: { params: { id: string } }) {

  const id = params.id;
  const data = await fetch(`https://api.imgflip.com/get_meme/${id}`);
  // const response = await data.json();

  const username = "Waasey-Zulfiqar";
  const password = "memegenerator";

  // const url = `https://api.imgflip.com/caption_image?template_id=${response.response[0].id}&username=${username}&password=${password}&text0=${text}&text1=${text1}`;


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative z-[-1] flex place-items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-gradient-radial from-sky-200 via-mint-200 to-cyan-100 blur-2xl opacity-70"></div>
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
      </div>
    </main>
  );
}
