import Link from 'next/link'
import styles from "../styles/Curso.module.css";

const Curso = ({ curso }) => {
  const { titulo, contenido, imagen } = curso;
  return (
    <section>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className="heading">{titulo}</h2>
          <p className={styles.texto}>{contenido}</p>
          <Link href="/nosotros">
          <a className={styles.enlace}>Más información</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        section {
          padding: 10rem 0;
          margin-top: 10rem;
          background-image: linear-gradient(
              to right,
              rgb(0 0 0 / 0.65),
              rgb(0 0 0 / 0.7)
            ),
            url(${imagen.url});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
      `}</style>
    </section>
  );
};

export default Curso;
