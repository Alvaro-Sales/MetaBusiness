import "../../globals.css"
import Image from "next/image"
import Card from "../../components/card/card"


export default function Projetos() {
    return(
        <>
            <main>
                <div className="flex flex-col items-center pt-[6vh] w-full h-full min-h-[100vh] bg-center bg-cover bg-fixed bg-[url('/images/bg-top.svg')] px-5">
                    <h1 className="titleSection text-center text-3xl tracking-wide my-10">
                        Nossos projetos
                    </h1>

                    <div className="flex items-center justify-center gap-7 flex-wrap max-w-[2000px] mb-10">
                        {/* --------------- Card 1 --------------- */}
                    <Card 
                            imagem={
                                <Image
                                    src="/images/plataformaSales.png"
                                    alt="Imagem de um website com tabela de valores da Claro móvel"
                                    width={400}
                                    height={0}
                                    priority={true}
                                    quality={100}
                                    className="rounded-t-3xl imgCard"
						        />
                            }
                            title={'Plataforma Sales'}
                            description={'Website desenvolvido para auxílio na consulta de informações sobre planos de linha móvel vendidos pela empresa Claro, essa plataforma feita para os representantes de telemarketing.'}
                            link="#"
                        />

                        {/* --------------- Card 2 --------------- */}
                        <Card 
                            imagem={
                                <Image
                                    src="/images/DonutsMiniProject.png"
                                    alt="Imagem de um website que vende donuts"
                                    width={400}
                                    height={0}
                                    priority={true}
                                    quality={100}
                                    className="rounded-t-3xl imgCard"
						        />
                            }
                            title={'Donuts Mini'}
                            description={'Website no qual o cliente pode ver os sabores de Donuts Mini vendidos pelo cliente e opção de compra com delivery, isso ajudou na captação de clientes.'}
                            link="https://alvaro-sales.github.io/Donuts_Mini"
                        />

                        {/* --------------- Card 3 --------------- */}
                        <Card 
                            imagem={
                                <Image
                                    src="/images/NitrizProject.png"
                                    alt=""
                                    width={400}
                                    height={0}
                                    priority={true}
                                    quality={100}
                                    className="rounded-t-3xl imgCard"
						        />
                            }
                            title={'Loja NITRIZ'}
                            description={'Website no qual o cliente pode ver os modelos de roupa vendidos pelo cliente e opções de compra, isso ajudou na captação de clientes e vendas online.'}
                            link="https://nitriz-2.vercel.app"
                        />

                        {/* --------------- Card 4 --------------- */}
                        <Card 
                            imagem={
                                <Image
                                    src="/images/LaPizzaProject.png"
                                    alt="Imagem de um website que vende pizza"
                                    width={400}
                                    height={0}
                                    priority={true}
                                    quality={100}
                                    className="rounded-t-3xl imgCard"
						        />
                            }
                            title={'La Pizza'}
                            description={'Website no qual o cliente pode ver os sabores de pizza vendidos pelo cliente e opção de compra com delivery, isso ajudou nas vendas.'}
                            link="https://alvaro-sales.github.io/La-Pizzaria"
                        />

                        {/* --------------- Card 5 --------------- */}
                        <Card 
                            imagem={
                                <Image
                                    src="/images/GiduLogo.png"
                                    alt="Logotipo de uma loja de roupas chamada 'Gidú Modas'"
                                    width={400}
                                    height={0}
                                    priority={true}
                                    quality={100}
                                    className="rounded-t-3xl imgCard"
						        />
                            }
                            title={'Logotipo Gidú Modas'}
                            description={'Logotipo criado para uma loja de roupas de adulto, a criação de logotipo ajudou na captação de clientes e ganhou visão no mercado com marca registrada.'}
                            link=""
                        />

                        {/* --------------- Card 6 --------------- */}
                        <Card 
                            imagem={
                                <Image
                                    src="/images/NitrizLogo.png"
                                    alt="logotipo da loja de roupas 'chamada NITRIZ'"
                                    width={400}
                                    height={0}
                                    priority={true}
                                    quality={100}
                                    className="rounded-t-3xl imgCard"
						        />
                            }
                            title={'Logotipo NITRIZ'}
                            description={'Logotipo criado para a loja NITRIZ, criamos a identidade visual da loja e escolhemos azul e branco para passar confiança e segurança com base na psicologia das cores.'}
                            link=""
                        />
                    </div>
                </div>
            </main>
        </>
    )
}
