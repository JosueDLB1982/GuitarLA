import Link from "next/link"
import styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.contenido}`}>
                <nav className={styles.navegacion}>
                    <Link href="/">Inicio</Link>
                    <Link href="/nosotros">Nosotros</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/tienda">Tienda</Link>
                </nav>
                <div>
                    <p className={styles.copyright}>Todos los Derechos Reservados</p>
                    <a className={styles.personalizacion} href="https://github.com/JosueDLB1982" target="blank">Josue Lopez - Developer Treinee</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
