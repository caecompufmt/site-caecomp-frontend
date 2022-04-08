import React from "react";
import { Container as ContainerBootstrap, Row } from "react-bootstrap";
import { Title, Container, Resume, Assignment } from "./styles";

const Assignments = () => {
  return (
    <Container
      id="atribuicoes"
      fluid
      className="justify-content-center align-items-center"
    >
      <Row className="m-0 p-0 d-flex row">
        <ContainerBootstrap>
          <Title>O que fazemos...</Title>
          <Resume>
            Algum resumo breve descritivo sobre as funções desempenhadas pelo
            CA.
          </Resume>
          <ContainerBootstrap className="mt-5 m-0 p-0 flex-column d-flex">
            <Assignment>Atribuição 1</Assignment>
            <span className="w-50 mt-2 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </span>
            <Assignment>Atribuição 2</Assignment>
            <span className="w-50 mt-2 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </span>
            <Assignment>Atribuição 3</Assignment>
            <span className="w-50 mt-2 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </span>
            <Assignment>Atribuição 4</Assignment>
            <span className="w-50 mt-2 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </span>
          </ContainerBootstrap>
        </ContainerBootstrap>
      </Row>
    </Container>
  );
};
export default Assignments;
