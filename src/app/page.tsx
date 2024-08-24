import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const response = await fetch("https://api.imgflip.com/get_memes");
  const data: any = await response.json();
  const memes = data.data.memes;
  console.log(memes);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <div className="relative z-[-1] flex place-items-center">
        <div className="absolute h-[300px] w-full -translate-x-1/2 rounded-full bg-gradient-radial from-white to-transparent blur-2xl dark:bg-gradient-to-br dark:from-transparent dark:to-blue-700 dark:opacity-10"></div>
        <div className="absolute -z-20 h-[180px] w-full translate-x-1/3 bg-gradient-conic from-sky-200 via-blue-200 blur-2xl dark:from-sky-900 dark:via-[#0141ff] dark:opacity-40"></div>
        <h1 className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert text-3xl font-medium">
          Memes Generator
        </h1>
      </div>

      <div className="flex justify-center items-center w-[60%] flex-wrap mt-10">
        {memes.map((meme: any) => {
          return (
            <Link key={meme.id} href={`/detail/${meme.id}`}>
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src={meme.url}
                alt="Meme"
                width={250}
                height={200}
                priority
              />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
