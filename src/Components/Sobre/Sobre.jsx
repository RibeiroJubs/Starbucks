import { SectionTwoStyle } from "./style"
import banner from "./../../assets/images/image-sobre.png"

export default function Sobre(){
    return (
        <SectionTwoStyle>
            <img src={banner} alt="Imagem do estabelecimento do starbucks em preto e branco" />

            <div class="texto">
            <h3>PREPARAÇÃO</h3>
            <h2>Níveis de torra</h2>
            <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>
            <button>SAIBA MAIS</button>
            </div>
        </SectionTwoStyle>
    )
}
