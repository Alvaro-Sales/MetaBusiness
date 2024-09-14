import "./globals.css"
import Link from "next/link"
import Image from "next/image"
import { IoRocketOutline } from "react-icons/io5"
import { MdOutlineImportantDevices } from "react-icons/md"

export default function Home() {
	return (
    	<>
			<main>
				<div className="containerHome flex items-center justify-center p-20 pb-5 laptop:p-10 laptop:pb-5 gap-20 tabletG:gap-10 tabletG:flex-col-reverse w-full bg-center bg-cover bg-[url('/images/bg-top.svg')] flex-wrap">
					<div className="text-white max-w-[50%] w-[700px] tabletG:max-w-[90%] flex flex-col items-center">
						<h1 className="text-3xl text-center mb-5 textAnimate">Está com dificuldade para se destacar?</h1>

						<p className="text-base text-justify mb-10 textAnimate">Conheça os nossos serviços e projetos que com certeza irão te deixar sempre à frente da concorrência! Aqui a sua identidade visual é prioridade e vamos transformala para ter muito mais personalidade e potencial.</p>

						<div className="flex items-center justify-center gap-5 flex-wrap mobile:gap-3 mobile:flex-col">
							<button className="bg-[var(--color-three)] rounded-xl hover:bg-[var(--color-two)] hover:text-[var(--text-color)] transition-all duration-300 btnAnimate">
								{/* link que direciona para o Whatsapp http://wa.me/5582993263814?text=Oii%20MetaBusiness%20 */}
								<Link href="#" className="flex items-center justify-center px-5 py-2 bg-transparent gap-5 rounded-xl desktop2:px-3">
									<span className="text-xl tracking-wider uppercase">Sair na frente</span>
									<IoRocketOutline className="text-4xl" />
								</Link>
							</button>
							
							<button className="bg-[var(--color-three)] rounded-xl hover:bg-[var(--color-two)] hover:text-[var(--text-color)] transition-all duration-300 btnAnimate">
								<Link href="./projetos" className="flex items-center justify-center px-5 py-2 bg-transparent gap-5 rounded-xl desktop2:px-3">
									<span className="text-xl tracking-wider uppercase">Ver Projetos</span>
									<MdOutlineImportantDevices className="text-4xl" />
								</Link>
							</button>
						</div>
					</div>

					<div className="flex items-center justify-center max-w-[50%] max-h-full mobile:h-[326px] mobile:w-[400px]">
						<Image
							src="/images/notebook-logo.png"
							alt="Notebook com o logotipo da agência Meta Business na tela"
							width={400}
							height={326}
							priority={true}
							quality={100}
							className="animateNotebook"
						/>
					</div>
				</div>
    		</main>
		</>
	)
}
