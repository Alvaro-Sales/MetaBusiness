'use client'

import "../../globals.css"
import Link from "next/link"
import Image from "next/image"
import { useState } from 'react'
import { MdOutlineEmail } from "react-icons/md"
import { IoLogoInstagram, IoLogoWhatsapp, IoChevronDown } from "react-icons/io5"

export default function Header() {
    // Definindo o estado de visibilidade (inicialmente falso, ou seja, oculto)
    const [isVisible, setIsVisible] = useState(false)

    // Função que alterna o estado de visibilidade
    const toggleVisibility = () => {
        setIsVisible(!isVisible) // Inverte o estado atual
    }

    return(
        <header className="fixed w-screen min-h-[70px] h-[6vh] z-50">
            <nav className="flex items-center justify-between px-20 tabletG:px-10 w-full h-full bg-[var(--color-three)]">
                <Link href="/">
                    <Image 
                        src="/images/logo.png"
                        alt="Logotipo da MetaBusiness"
                        width={200}
                        height={43}
                        priority={true}
                        quality={100}
                    />
                </Link>

                <ul className="flex items-center justify-center gap-6 list-none text-white">
                    <li className="tracking-widest hover:text-[#ffffffce] transition-colors duration-300">
                        <Link href="/">Home</Link>
                    </li>

                    <li className="tracking-widest hover:text-[#ffffffce] transition-colors duration-300">
                        <Link href="../projetos">Projetos</Link>
                    </li>

                    <li className="tracking-widest hover:text-[#ffffffce] transition-colors duration-300">
                        <Link href="../sobre-nos">Sobre Nós</Link>
                    </li>
                    
                    <div className="relative">
                        <button onClick={toggleVisibility} className="flex items-center gap-x-2 border-none outline-none cursor-pointer px-2 py-1 bg-[var(--color-two)] rounded-md">
                            Contatos
                            <IoChevronDown className="w-5 h-5" />
                        </button>

                        {isVisible && (
                            <div className="menuDrop z-50 absolute w-[200px] h-auto flex flex-col items-start bg-[var(--color-two)] top-9 right-0 text-white gap-y-2 py-5">
                        
                                <Link href="#" className="flex items-center gap-x-3 p-2 pl-5 w-full hover:bg-[var(--color-three)] transition-colors duration-300">
                                    <IoLogoWhatsapp className="w-5 h-5" />
                                    Whatsapp
                                </Link>

                                <Link href="https://www.instagram.com/agmetabusiness/" target="_blank" className="flex items-center gap-x-3 p-2 pl-5 w-full hover:bg-[var(--color-three)] transition-colors duration-300">
                                    <IoLogoInstagram className="w-5 h-5" />
                                    Instagram
                                </Link>

                                <Link href="#" className="flex items-center gap-x-3 p-2 pl-5 w-full hover:bg-[var(--color-three)] transition-colors duration-300">
                                    <MdOutlineEmail className="w-5 h-5" />
                                    E-mail
                                </Link>
                            </div>
                        )}
                    </div>
                </ul>
            </nav>
        </header>
    )
}
