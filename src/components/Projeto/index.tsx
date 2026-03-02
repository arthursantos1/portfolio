import Titulo from "../Titulo";
import Paragrafo from "../Paragrafo";
import { Card, LinkBotao } from "./styles";

const Projeto = () => (
  <Card>
    <Titulo fontSize={16}>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">
      Lista de tarefas feita com VueJS
    </Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
