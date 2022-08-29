import Layout from "../components/Layout";
import Listado from '../components/Listado'

export default function Home({guitarras, curso}) {
  return (
    <Layout pagina="inicio">
      <main className="contenedor">
        <h1 className="heading">Nuestra colección</h1>
        <Listado guitarras={guitarras} />
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras`
  const urlCursos = `${process.env.API_URL}/cursos`

  const [resGuitarras, resCursos] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos)
  ])

  const [guitarras, curso] = await Promise.all([
    resGuitarras.json(),
    resCursos.json()
  ])

  return {
    props: {
      guitarras,
      curso
    }
  }
}
