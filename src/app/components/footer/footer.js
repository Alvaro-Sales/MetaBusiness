'use client'
import "../../globals.css"
import Link from "next/link"
import Image from "next/image"


export default function Footer() {
    return(
        <>
            <footer className="bg-[var(--color-three)] w-full h-auto py-2 px-5">
                <p className="text-[var(--text-color)] text-center">
                    &copy; 2024 MetaBusiness, todos os direitos reservados.
                </p>
            </footer>
        </>
    )
}