import "../../globals.css"
import Image from "next/image"

export default function SobreNos() {
    return(
        <>
            <main>
                <div className="flex flex-col items-center w-full bg-center bg-cover bg-fixed bg-[url('/images/bg-top.svg')]">

                    <div className="containerAbout flex items-center justify-between flex-wrap-reverse max-w-[1800px] w-full gap-10 pt-[6vh] px-40 laptop:px-10 mobile:gap-x-5 mobile:justify-center">
                        <div className="max-w-[850px] mobile:max-w-[100vw] mobile:flex mobile:flex-col mobile:items-center mobile:justify-center">
                            <h1 className="titleSection text-center text-3xl tracking-wide">
                                Um pouco sobre nós.
                            </h1>

                            <p className="textAnimate text-base text-justify mt-5">
                                Somos uma agência de marketing digital para pessoas que querem aprender a usar o marketing na Internet para crescer seu negócio ou produto, e caso você possua sua própria empresa, também podemos fazê-la ter um nome e relevância no cenário digital. Além disso, oferecemos nossos serviços para agilizar o seu desenvolvimento no mercado digital fazendo a parte mais técnica do bastidor para que você (cliente) foque no conteúdo que será entregue.
                            </p>
                        </div>

                        <Image
							src="/images/teamWork.svg"
							alt="Imagem ilustrativa de uma equipe tomando refrigerante"
							width={400}
							height={349}
							priority={true}
							quality={100}
							className="imgAbout"
						/>
                    </div>
                </div>
            </main>
        </>
    )
}
