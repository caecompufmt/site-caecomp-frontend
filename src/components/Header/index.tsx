import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

import logoCaeComp from "../../assets/images/logo-header.png";
import Button from "../forms/Button";
import ActiveItemHeader from "./ActiveItemHeader";

const navItens = [
  { title: "Início", scrollTo: "inicio" },
  { title: "Notícias", scrollTo: "noticias" },
  { title: "Sobre nós", scrollTo: "sobre-nos" },
  { title: "Atribuições", scrollTo: "atribuicoes" },
  { title: "Gestões", scrollTo: "gestoes" },
  { title: "Contatos", scrollTo: "contatos" },
  { title: "Cursos", scrollTo: "cursos" },
  { title: "Eventos", scrollTo: "eventos" },
];

const Header = () => {
  const history = useHistory();

  const handleNavigate = (scrollTo: string) => {
    document.getElementById(scrollTo)?.scrollIntoView();
  };

  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img width="100%" height={60} src={logoCaeComp} alt="imgCaeComp" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="align-items-center">
              {navItens.map((item) => (
                <Nav.Link
                  key={item.title}
                  onClick={() => handleNavigate(item.scrollTo)}
                  className="ml-4"
                >
                  <ActiveItemHeader
                    pathname={item.scrollTo}
                    title={item.title}
                  />
                </Nav.Link>
              ))}
              <Nav.Link className="ml-3">
                <Button
                  onClick={() => history.push("/login")}
                  className="mt-2"
                  color="default"
                  width="xsmall"
                >
                  Login
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
