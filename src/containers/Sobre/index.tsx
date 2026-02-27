import Paragrafo from "../../components/Paragrafo";
import Titulo from "../../components/Titulo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro saepe doloremque velit voluptate tenetur vitae quisquam ducimus, sed ut explicabo eius, dolorum, ratione labore nam vero consequatur tempora mollitia qui.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=arthursantos1&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=arthursantos1&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
