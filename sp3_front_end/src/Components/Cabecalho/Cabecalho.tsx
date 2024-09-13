import LogoPorto from '../assets/logo-porto.svg';
import Cadastro from '../assets/cadastro.svg';
import Home from '../assets/home.svg';
import Servicos from '../assets/servicos.svg';
import Integrantes from '../assets/integrantes.svg';
import Contato from '../assets/contato.svg';
import './Cabecalho.css';

export default function Cabecalho() {
    return (
        <header>
            <a href="https://www.portoseguro.com.br" target='_blank'><img src={LogoPorto} alt="Porto Seguro" className='porto' /></a>
            <a href="/cadastro"><img src={Cadastro} alt="Cadastro" className='icon'/></a>
            <nav>
                <ul>
                    <li>
                        <a href="/" className='home'>
                        <img src={Home} alt='' className='icons'/>
                        <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="/cadastro" className='cadastro'>
                        <img src={Cadastro} alt="" className='icons' />
                        <span>Cadastro</span>
                        </a>
                    </li>
                    <li>
                        <a href="/servicos" className='serv'>
                        <img src={Servicos} alt="" className='icons' />
                        <span>Serviços</span>
                        </a>
                    </li>
                    <li>
                        <a href="/integrantes" className='integrantes'>
                        <img src={Integrantes} alt="" className='icons' />
                        <span>Integrantes</span>
                        </a>
                    </li>
                    <li>
                        <a href="/contato" className='contato'>
                        <img src={Contato} alt="" className='icons' id='imgContato'/>
                        <span>Contato</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}