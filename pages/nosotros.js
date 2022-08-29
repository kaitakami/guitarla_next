import Image from "next/image";
import Layout from "../components/Layout";
import styles from '../styles/Nosotros.module.css'

const nosotros = () => {
  return (
    <Layout pagina="nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
        <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Imagen sobre nosotros" />

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              possimus, eaque, recusandae voluptas necessitatibus fugit
              consectetur consequatur exercitationem quis aperiam labore
              aspernatur repudiandae inventore suscipit quidem minima, facere
              nisi dolore?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              possimus, eaque, recusandae voluptas necessitatibus fugit
              consectetur consequatur exercitationem quis aperiam labore
              aspernatur repudiandae inventore suscipit quidem minima, facere
              nisi dolore?
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default nosotros;
