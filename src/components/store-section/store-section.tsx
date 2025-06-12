import Image from "next/image"

export const StoreFunction = () => {
    return (
        <section className="container bg-gray-700 grid gap-6 md:grid-cols-3 pb-8 pt-8 md:py-10">
            <div className="max-w-full md:col-span-3 text-center pb-5">
                <h2 className="text-gray-100 text-heading-md">
                    Sua loja de afiliados, simples, do jeito que deveria ser
                </h2>
            </div>

            <div className="container flex flex-col gap-4 rounded-md p-6 bg-blue-400 md:p-12">
                <Image
                    src="/paintIcon.svg"
                    alt="Pincel"
                    width={20}
                    height={20}
                />
                <span className="text-gray-100 text-body-sm">Personalize seu site</span>
                <span className="text-gray-200 text-body-sm">Adicione sua logo, favicon, cores no seu catalago e tenha tudo com a sua cara.</span>
            </div>

            <div className="container flex flex-col gap-4 rounded-md p-6 bg-cyan-200 md:p-12">
                <Image
                    src="/store.svg"
                    alt="Pincel"
                    width={20}
                    height={20}
                />
                <span className="text-gray-100 text-body-sm">Venda de qualquer loja</span>
                <span className="text-gray-200 text-body-sm">Não importa a loja, o Site.Set permite que você insira qualquer link de afiliado.</span>
            </div>

            <div className="container flex flex-col gap-4 rounded-md p-6 bg-blue-400 md:p-12">
                <Image
                    src="/paintIcon.svg"
                    alt="Pincel"
                    width={20}
                    height={20}
                />
                <span className="text-gray-100 text-body-sm">Receba suporte amigável</span>
                <span className="text-gray-200 text-body-sm">Nossa equipe estará sempre pronta para te atender para ajudar no que for preciso.</span>
            </div>

        </section>
    )
}