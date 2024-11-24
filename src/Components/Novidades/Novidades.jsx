import { SectionStyle } from "./style"
import cafe from "./../../assets/images/cafe.png"

export default function Novidades(){
    return(
        <SectionStyle>

            <div class="texto">
            <h3>PREPARAÇÃO</h3>
            <h2>Níveis de torra</h2>
            <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>
            <button>SAIBA MAIS</button>
            </div>

            <figure>
            <img src={cafe} alt="Grão de café" /> </figure>
        </SectionStyle>
    )
}