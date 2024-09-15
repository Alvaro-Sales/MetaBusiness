import "../../globals.css"
import Link from "next/link"


export default function Card({imagem, title, description, link}){
    return(
        <>
            <div className="cardAnime card w-[400px] h-[580px] bg-[var(--color-three)] flex flex-col items-center justify-between rounded-3xl">
                {imagem && <div className="mb-5 h-[50%] w-full"> {imagem} </div>}

                <div className="flex flex-col items-center justify-center p-5 box-border h-[50%]">
                    {title && <h1 className="text-3xl mb-5"> {title} </h1>}

                    {description && <p className="text-base text-justify"> {description} </p>}

                    {link && <button className="mt-5 bg-[#201046] px-5 py-2 rounded-xl hover:bg-[var(--color-two)] tracking-wider"> <Link href={link} target="_blank">Ver Projeto</Link> </button>}
                </div>
            </div>
        </>
    )
}
