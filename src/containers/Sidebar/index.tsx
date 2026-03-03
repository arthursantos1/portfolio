import Titulo from "../../components/Titulo";
import Avatar from "../../components/Avatar";
import Paragrafo from "../../components/Paragrafo";
import { Descricao, BotaoTema, SidebarContainer } from "./styles";

type Props = {
  trocaTema: () => void;
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Arthur Santos</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>arthursantos1</Paragrafo>
      <Descricao tipo="principal" fontSize={12}>Engenheiro front-end</Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
