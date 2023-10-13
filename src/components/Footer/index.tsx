import styled from "styled-components";
import facebook from "./assets/facebook.png";
import google from "./assets/google.png";
import instagram from "./assets/instagram.png";
import whatsapp from "./assets/whatsapp.png";

const FooterStyled = styled.footer`
  height: 100px;
  color: white;
  padding: 1em;
  background-color: var(--azul-escuro);
  text-align: center;
`;

const ListStyled = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 10%;
  margin: 1em auto;
`;

const ItemStyled = styled.li`
  list-style-type: none;
`;

export default function Footer() {
  return (
    <FooterStyled>
      <ListStyled>
        <ItemStyled>
          <a href="#">
            <img src={facebook} alt="logo do facebook" />
          </a>
        </ItemStyled>
        <ItemStyled>
          <a href="#">
            <img src={google} alt="logo do google" />
          </a>
        </ItemStyled>
        <ItemStyled>
          <a href="#">
            <img src={instagram} alt="logo do instagram" />
          </a>
        </ItemStyled>
        <ItemStyled>
          <a href="#">
            <img src={whatsapp} alt="logo do whatsapp" />
          </a>
        </ItemStyled>
      </ListStyled>
      <p>
        2023 ® Desenvolvido por Alura | Projeto fictício sem fins comerciais.
      </p>
    </FooterStyled>
  );
}
