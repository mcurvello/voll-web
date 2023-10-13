import avaliacao from "./assets/avaliacao.png";
import grafico from "./assets/grafico.png";
import consulta from "./assets/consulta.png";
import styled from "styled-components";

interface Props {
  image?: string;
  children?: React.ReactNode;
}

interface IImage {
  avaliacao: string;
  grafico: string;
  consulta: string;
}

const SpanStyled = styled.span<Props>`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 25px;
  height: 25px;
  background-image: ${(props) =>
    props.image ? `url(${props.image})` : "none"};
`;

const TitleStyled = styled.h2`
  color: var(--azul-claro);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

export default function Title({ image, children }: Props) {
  const imageList: IImage = {
    avaliacao: avaliacao,
    grafico: grafico,
    consulta: consulta,
  };

  return (
    <Container>
      {image && <SpanStyled image={imageList[image as keyof IImage]} />}
      <TitleStyled>{children}</TitleStyled>
    </Container>
  );
}
