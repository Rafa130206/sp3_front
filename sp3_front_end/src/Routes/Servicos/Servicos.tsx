import Chatbot from '../../img/chatbot.jpg'
import Database from '../../img/banco_de_dados.jpg'
import './Servicos.css'

export default function Servicos() {
    return(
    <div>
        <h1 className="servh1">Servicos</h1>
        <div className="container">
            <section className="chatbot">
                <img src={Chatbot} alt="Chatbot" className='chatbotimg'/>
                <p className='chatbotp'>
                    O sistema é desenvolvido em Python e Java, integrados a um Chatbot para identificar problemas nos veículos e realizar autodiagnósticos de forma rápida e eficaz, sem intervenção humana, tornando a experiência do usuário muito mais agradável.
                </p>
            </section>
            <section className='bd'>
                <p className='bdp'>
                    Um banco de dados armazena informações como custo médio das peças, localização das oficinas e tempo médio de serviço, permitindo que a IA forneça informações e crie uma ficha técnica para a oficina antecipadamente.
                </p>
                <img src={Database} alt="Banco de Dados" className='bdimg'/>
            </section>
        </div>
    </div>
    )
}