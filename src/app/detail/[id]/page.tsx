import Detail from "./detail";

export default async function Home({ params }: { params: { id: string } }) {

  const id = params.id;
  const response = await fetch("https://api.imgflip.com/get_memes");
  const data: any = await response.json();
  const meme = data.data.memes.find((meme:any)=> meme.id === id)

  return <Detail meme= {meme}/>
}