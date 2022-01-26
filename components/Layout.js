import Head from "next/head"
import Header from "./Header"

const Layout = ({children, page}) => {
    return (
        <div>
            <Head>
                <title>GuitarLA con Next.js y strapi - {page}</title>
                <meta name="description" content="Sitio Web de venta de Guitarras" />
            </Head>

            <Header/>

            {children}
        </div>
    )
}

export default Layout
