import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar'; // Importa el componente NavBar
import ItemListContainer from './ItemListContainer'; // Importa el componente ItemListContainer

function App() {
  return (
    <div className="App">
      <NavBar /> {/* Agrega el menú de navegación */}
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" /> {/* Agrega el contenedor con el mensaje */}
    </div>
  );
}

export default App;