import Head from "next/head"

const Layout = ({children, page}) => {
    return (
        <div>
            <Head>
                <title>GuitarLA con Next.js y strapi - {page}</title>
                <meta name="description" content="Sitio Web de venta de Guitarras" />
            </Head>

            {children}
        </div>
    )
}

export default Layout
