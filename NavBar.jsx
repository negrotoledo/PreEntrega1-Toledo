import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget'; // Importa el componente CartWidget

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Mi Tienda</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#">Inicio</Nav.Link>
          <Nav.Link href="">Productos</Nav.Link>
          <Nav.Link href="#">Contacto</Nav.Link>
          <CartWidget itemCount={10} /> {/* Ajusta el número de elementos en el carrito */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
