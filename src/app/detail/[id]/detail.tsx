"use client";

import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

function Detail({ meme }: { meme: any }) {
  const [inputValue1, setInputValue1] = useState<string>("");
  const [inputValue2, setInputValue2] = useState<string>("");
  const [memeData, setMemeData] = useState<any>(null);

  // Check if meme is passed correctly
  if (!meme) {
    return <div>No meme found.</div>;
  }

  const generateMeme = async (e:any) => {
  
    e.preventDefault();
    const username = "Waasey-Zulfiqar";
    const password = "memegenerator";

    axios(
      `https://api.imgflip.com/caption_image?template_id=${meme.id}&username=${username}&password=${password}&text0=${inputValue1}&text1=${inputValue2}`
    )
      .then((res) => {
        console.log(res); // Log the response for debugging
        setMemeData(res.data.data.url); // Update the state with the generated meme URL
      })
      .catch((err) => {
        console.log(err); // Log any errors
      });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {!memeData ? (
          <>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src={meme.url}
              alt="Meme Image"
              width={600}
              height={600}
              priority
            />

            <form className="mt-9" method="post" onSubmit={generateMeme}>
              <input
              className="block mt-5 px-3 py-3 border border-slate-400 rounded w-full"
                type="text"
                placeholder="Enter text 1"
                onChange={(e) => setInputValue1(e.target.value)}
              />
              <input
              className="block mt-5 px-3 py-3 border border-slate-400 rounded w-full"
                type="text"
                placeholder="Enter text 2"
                onChange={(e) => setInputValue2(e.target.value)}
              />
              <button
                type="submit"
                className="border border-black block px-4 py-1 mt-5 bg-blue-200 rounded"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <img src={memeData} alt="Generated Meme" />
        )}
      </div>
    </main>
  );
}

export default Detail;
