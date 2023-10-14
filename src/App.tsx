import "./App.css";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Graph from "./components/Graph";
import Header from "./components/Header";
import Rating from "./components/Rating";
import TableComponent from "./components/TableComponent";
import Title from "./components/Tittle";
import useDadosConsulta from "./useDadosConsulta";
import useDadosProfissional from "./useDadosProfissional";
import SubTitle from "./components/SubTitle";
import Button from "./components/Button";

function App() {
  const { data: consultas, error: consultasErro } = useDadosConsulta();

  const { data: profissionais, error: profissionaisErro } =
    useDadosProfissional();

  if (consultasErro || profissionaisErro) {
    console.log("Erro ao carregar dados");
  }

  return (
    <>
      <Header />
      <Container>
        <Title>Área Administrativa</Title>
        <Button>Cadastrar especialista</Button>
        <Title image="consulta">Consultas do Dia</Title>
        <TableComponent consultas={consultas} />
        <Title image="grafico">Consultas mensais por especialista</Title>
        <SubTitle>Dezembro/22</SubTitle>
        <Graph consultas={consultas} profissionais={profissionais} />
        <Title image="avaliacao">Avaliações de especialistas</Title>
        <Rating profissionais={profissionais} />
      </Container>
      <Footer />
    </>
  );
}

export default App;
