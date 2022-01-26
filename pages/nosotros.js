import Link from 'next/link'
import Layout from '../components/Layout'

const Nosotros = () => {
    return (
        <>
            <Layout
                page="Nosotros"
            >
                <h1>Desde nosotros.js</h1>
            </Layout>

            <Link href="/">Ir a Inicio</Link>
        </>
    )
}

export default Nosotros
