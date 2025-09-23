// Este arquivo deve ser removido ou comentado se você estiver usando o App Router para todas as rotas.
// Se precisar manter por rotas legacy, não envolva componentes do App Router com o layout do Pages Router.

import { Layout } from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
