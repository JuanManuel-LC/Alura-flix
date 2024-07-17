import styled from "styled-components"
import GlobalStyles from "./componentes/GlobalStyles"
import Header from "./componentes/Header"
import Banner from "./componentes/Banner/Banner"
import Categorias from "./componentes/Categorias"
import Footer from "./componentes/Footer"


const categorias = [
  {
    titulo: "Front End",
    color: "#6BD1FF"
  },
  {
    titulo: "Back End",
    color: "#00C86F"
  },
  {
    titulo: "Innovación y Gestión",
    color: "#FFBA05"
  }
]

function App() {

  return (
    <>
      <GlobalStyles />
      <Header />
      <Banner />
      {
        categorias.map((categoria) => <Categorias datos={categoria} key={categoria.titulo} />)
      }
      <Footer />
    </>
  )
}

export default App
