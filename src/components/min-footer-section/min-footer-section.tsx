import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const FooterFunction = () => {
    return (
        <section className="container bg-gray-700 grid gap-6 md:grid-cols-1 pb-8 pt-8 md:py-10">
            <div className="flex flex-col items-center justify-center align-middle">
                <div className="max-w-full md:col-span-3 text-center pb-5">
                    <h2 className="text-gray-100 text-heading-md">
                        Crie uma loja online e inicie suas vendas ainda hoje
                    </h2>
                </div>

                <Button asChild className="w-fit rounded-full pt-4 md:mt-auto md:flex">
                    <Link href="/criar-loja">
                        Criar loja grátis
                        <ArrowRight />
                    </Link>
                </Button>
            </div>

        </section>
    )
}