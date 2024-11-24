
import { MainStyle } from "./style"
import { useState } from "react"
import copoAmarelo from "../../assets/images/image-copo/amarelop.png"
import copoVermelho from "../../assets/images/image-copo/vermelhop.png"
import copoLaranja from "../../assets/images/image-copo/laranjap.png"
import elipseVerde from "../../assets/images/image-copo/elipseverde.png"
import elipseAmarela from "../../assets/images/elipseamarela.png"
import elipseVermelha from "../../assets/images/elipsevermelha.png"
import copoAmareloG from "../../assets/images/image-copo/amarelog.png"
import copoLaranjaG from "../../assets/images/image-copo/laranjag.png"
import copoVermelhoG from "../../assets/images/image-copo/vermelhog.png"


export default function Home(){
const [copoGrande, setCopoGrande] = useState(copoLaranjaG);
const [elipseFundo, setElipseFundo] = useState(elipseVerde);

const mudarCopo = (copo, elipse) => {
    setCopoGrande(copo);
    setElipseFundo(elipse);
}
    return(
        <MainStyle>

            <div className="text-principal">
            <div class="texto">
            <h2>Mais que café Isso é
            <span> Starbucks</span></h2>
            <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
            <button>SAIBA MAIS</button>
            </div>

    
            
                <div class="copinhos">
                <img onClick={() => mudarCopo(copoLaranjaG, elipseVerde )} src={copoLaranja} alt="Copo de bebida Starbucks em tom de laranja com chantilly em cima" />

                <img onClick={() => mudarCopo(copoAmareloG, elipseAmarela )} src={copoAmarelo} alt="Copo de bebida Starbucks em tom amarelo gema com chantilly em cima" />
                <img onClick={() => mudarCopo(copoVermelhoG, elipseVermelha) } src={copoVermelho} alt="Copo de bebida Starbucks em tom de vermelho com chantilly em cima" />
                </div>
                </div>

            <section class="copo-elipse">
            <img class="copos"src={copoGrande} alt="Copo de bebida" /> 
            <img class="elipse" src={elipseFundo} alt="" />
                
                </section>
            
        </MainStyle>
    )
}