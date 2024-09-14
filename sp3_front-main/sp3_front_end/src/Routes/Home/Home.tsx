import Carros from '../../img/porto-seguro-carros.jpg'
import './home.css'

export default function Home() {
    return(
        <div className="container">
            <section className="sec1">
                <article>
                    <h1 className="mecbot">Mecânico Bot</h1>
                    <p className='phome'>A principal meta do projeto é desenvolver um sistema integralmente automatizado capaz de realizar o diagnóstico e elaborar o orçamento solicitado pelo cliente sem a necessidade de intervenção humana. Isso implica em criar algoritmos eficientes e precisos, utilizando linguagens de programação como Python e Java, que permitam ao Chatbot identificar problemas nos veículos e calcular os custos da manutenção de forma ágil e precisa. Além disso, é crucial garantir que o sistema ofereça total segurança aos dados dos clientes, evitando qualquer possibilidade de vazamento ou uso indevido das informações. A eficiência também é uma prioridade, com a necessidade de garantir que o sistema seja capaz de lidar com um grande volume de solicitações de forma rápida e sem falhas. Dessa forma, a combinação de automação, segurança e eficiência será essencial para o sucesso do projeto e para melhorar a experiência do cliente no processo de manutenção automotiva.</p>
                </article>
            </section>
            <section className="sec2">
                <img src={Carros} alt="Carros" className='carros' />
            </section>
        </div>
    )
}