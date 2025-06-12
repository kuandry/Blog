import Image from "next/image"

export const FeedbackFunction = () => {
    return (
        <section className="container bg-gray-700 grid gap-6 md:grid-cols-2 pb-8 pt-8 md:py-10">
            <div className="max-w-full md:col-span-3 text-center">
                <h2 className="text-gray-100 text-heading-md">
                    Quem utiliza, aprova!
                </h2>
            </div>

            <div className="container flex flex-col gap-4 rounded-md p-6 bg-gray-600 md:p-12">
                <span className="text-gray-200 text-body-sm">Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos. A.</span>

                <div className="flex flex-row gap-3">
                    <Image
                        src="/avatar.svg"
                        alt="Pincel"
                        width={40}
                        height={40}
                    />

                    <div className="flex flex-col">
                        <span className="text-gray-200 text-body-sm">
                            Annette Bones
                        </span>

                        <span className="text-gray-300 text-body-sm">
                            CEO na Anne Corp
                        </span>
                    </div>
                </div>
            </div>

            <div className="container flex flex-col gap-4 rounded-md p-6 bg-gray-600 md:p-12">
                <span className="text-gray-200 text-body-sm">Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!</span>

                <div className="flex flex-row gap-3">
                    <Image
                        src="/avatar.svg"
                        alt="Pincel"
                        width={40}
                        height={40}
                    />

                    <div className="flex flex-col">
                        <span className="text-gray-200 text-body-sm">
                            Annette Bones
                        </span>

                        <span className="text-gray-300 text-body-sm">
                            CEO na Anne Corp
                        </span>
                    </div>
                </div>
            </div>

        </section>
    )
}