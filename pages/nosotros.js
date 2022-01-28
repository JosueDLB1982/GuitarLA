import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
    return (
        <>
            <Layout
                page="Nosotros"
            >
                <main className='contenedor'>
                    <h2 className='heading'>Nosotros</h2>

                    <div className={styles.contenido}>

                        <Image
                            layout="responsive"
                            width={600}
                            height={450}
                            src="/img/nosotros.jpg"
                            alt="Imagen sobre Nosotros"
                        />

                        <div>
                            <p>
                                Vel posuere erat ornare in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus in vestibulum ipsum, id tempor nisi. Aliquam erat volutpat. Mauris eros neque, placerat vitae pretium at, ullamcorper in erat. 
                            </p>

                            <p>
                                 Phasellus hendrerit ipsum eget leo volutpat gravida. Cras et faucibus sem, a varius purus. Aliquam et urna et velit pellentesque pretium. Vestibulum mattis porttitor mauris, et mollis lectus tempus ut. Mauris porta ut augue convallis aliquet. Cras iaculis lectus quis augue venenatis feugiat. Suspendisse sed nunc quis eros interdum dignissim ac eu mauris. Integer non ex tristique, congue lorem sit amet, consectetur tortor. In consectetur tellus elit, vitae elementum arcu faucibus ut. Etiam at erat lobortis.
                            </p>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    )
}

export default Nosotros
