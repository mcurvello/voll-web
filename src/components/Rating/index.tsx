import styled from "styled-components";
import IProfissional from "../../types/IProfissional";
import Card from "./Card";
import Button from "../Button";

const SectionStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export default function Rating({
  profissionais,
}: {
  profissionais: IProfissional[] | null;
}) {
  return (
    <>
      <SectionStyled>
        {profissionais?.map((profissional) => {
          return <Card profissional={profissional} />;
        })}
      </SectionStyled>
      <Button>Ver mais</Button>
    </>
  );
}
