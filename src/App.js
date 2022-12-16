import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";
import Container from "react-bootstrap/Container";



function App() {
  return (
    <div className="App">
      <div className="container">
        <Header titulo="Galería de Imágenes con React"></Header>
        <hr></hr>
        <div className="d-flex justify-content-around mt-5">
          <Cards
            img="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            titulo="La bella Huangpu Qu de noche"
            descripcion="Huangpu Qu, Shanghai Shi, China"
          ></Cards>
          <Cards
            img="https://images.pexels.com/photos/1538177/pexels-photo-1538177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            titulo="Torres Petronas"
            descripcion="Federal Territory of Kuala Lumpur, Malaysia"
          ></Cards>
          <Cards
            img="https://images.pexels.com/photos/4569006/pexels-photo-4569006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            titulo="Torre en construcción"
            descripcion="Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia"
          ></Cards>
        </div>
         
          <Footer></Footer>
       
      </div>
    </div>
  );
};
export default App;
