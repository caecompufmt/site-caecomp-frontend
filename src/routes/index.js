import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../views/Home";
import WithHeader from "../views/_layouts/withHeader";
import WithoutHeader from "../views/_layouts/withoutHeader";

// eslint-disable-next-line react/prop-types
const Router = ({ component: Component, hasHeader, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      hasHeader ? (
        <WithHeader>
          <Component {...props} />
        </WithHeader>
      ) : (
        <WithoutHeader>
          <Component {...props} />
        </WithoutHeader>
      )
    }
  />
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Router path="/" exact component={Home} hasHeader />
      <Router path="/noticias" exact component={Home} hasHeader />
      <Router path="/sobre-nos" exact component={Home} hasHeader />
      <Router path="/atribuicoes" exact component={Home} hasHeader />
      <Router path="/gestoes" exact component={Home} hasHeader />
      <Router path="/contatos" exact component={Home} hasHeader />
      <Router path="/cursos" exact component={Home} hasHeader />
      <Router path="/eventos" exact component={Home} hasHeader />
      <Router path="/login" exact component={Home} />
    </BrowserRouter>
  );
};

export default Routes;
