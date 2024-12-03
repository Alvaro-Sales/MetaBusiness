import "./globals.css"
import Footer from "./components/footer/footer"
import { Inter } from "next/font/google"
import Header from "./components/header/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  	title: "Meta Business Corp",
  	description: "Agência de gestão comercial para melhoria de identidade visual e melhor visibilidade comercial.",
}

export default function RootLayout({ children }) {
	return (
    	<html lang="pt-br">
      		<body className={inter.className}>
				<Header />
        		
				<main className="w-full max-w-[100vw] overflow-x-hidden">
					{children}
				</main>

				<Footer />
      		</body>
    	</html>
  	)
}
