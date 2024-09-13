import Lucas from '../../img/lucas.jpeg'
import Joao from '../../img/joao.jpg'
import Rafael from '../../img/Rafael.jpg'
import './integrantes.css'

export default function Integrantes() {
    return(
        <div>
            <h1 className="paginth1">Página de Integrantes</h1>
            <h2>REPOSITÓRIO</h2>
            <div className="link">
                <p className="linkrep">
                    <a href="https://github.com/Rafa130206/sp3_front" target="_blank" className="rep">https://github.com/Rafa130206/sp3_front</a>
                </p>
            </div>
            <div className="container1">
                <section>
                    <img src={Lucas} alt="Lucas" className='foto1'/>
                    <p className='legenda1'>
                        Nome: Lucas Lerri de Almeida<br/>
                        RM: 554635<br/>
                        Turma: 1TDSPI<br/>
                        https://github.com/lerri05
                    </p>
                </section>
                <section>
                    <img src={Joao} alt="Joao" className='foto2'/>
                    <p className='legenda2'>
                        Nome:João Pedro C. Zanni<br/>
                        RM: 557591<br/>
                        Turma: 1TDSPI<br/>
                        github: https://github.com/<br/>JoaoPedroCZanni
                    </p>
                </section>
                <section>
                    <img src={Rafael} alt="Rafael" className='foto3'/>
                    <p className='legenda3'>
                        Nome: Rafael Bompadre Lima<br/>
                        RM: 556459<br/>
                        Turma: 1TDSPH<br/>
                        https://github.com/<br/>Rafa130206
                    </p>
                </section>
            </div>
        </div>
    )
}