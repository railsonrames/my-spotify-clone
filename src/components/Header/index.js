import React from "react";

import { Search, User, Container } from "./styles";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Pesquisar" />
    </Search>

    <User>
      <img
        src="https://http2.mlstatic.com/pelucia-ursinhos-carinhosos-super-heroes-rosa-20cm-D_NQ_NP_951753-MLB27249246693_042018-F.jpg"
        alt="Avatar"
      />
      Clarice Rames
    </User>
  </Container>
);

export default Header;
