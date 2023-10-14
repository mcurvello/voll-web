import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from "@mui/material";
import IConsulta from "../../types/IConsulta";
import styled from "@emotion/styled";

const CellStyled = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    color: "var(--azul-escuro)",
    fontSize: 18,
    fontWeight: 700,
    fontFamily: "var(--fonte-principal)",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontFamily: "var(--fonte-principal)",
  },
}));

const RowStyled = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "var(--cinza-claro)",
    align: "right",
  },
}));

export default function TableComponent({
  consultas,
}: {
  consultas: IConsulta[] | null;
}) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
          <TableHead>
            <TableRow>
              <CellStyled>Data</CellStyled>
              <CellStyled>Horário</CellStyled>
              <CellStyled>Profissional</CellStyled>
              <CellStyled>Especialidade</CellStyled>
              <CellStyled>Paciente</CellStyled>
              <CellStyled>Modalidade</CellStyled>
            </TableRow>
          </TableHead>
          <TableBody>
            {consultas?.map((linha) => {
              return (
                <RowStyled>
                  <CellStyled component="th" scope="row">
                    {new Date(linha.data).toLocaleDateString()}
                  </CellStyled>
                  <CellStyled>{linha.horario}</CellStyled>
                  <CellStyled>{linha.profissional[0].nome}</CellStyled>
                  <CellStyled>{linha.profissional[0].especialidade}</CellStyled>
                  <CellStyled>{linha.paciente}</CellStyled>
                  <CellStyled>{linha.modalidade}</CellStyled>
                </RowStyled>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
