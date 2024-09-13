import './Contato.css'

export default function Contato() {
    return(
        <div>
            <h1 className='cadastroh1'>Entre em contato conosco!</h1>
            <section className='form'>
                <form action="Cadastrar" method='get'>
                    <fieldset>
                        <legend>Dados Pessoais</legend><br />
                        <label>
                            <input type="text" name="nome" id="idnome" placeholder='Insira seu nome' />
                        </label>
                        <br />
                        <label>
                            <input type="text" name='email' id='idemail' placeholder='Insira seu email'/>
                        </label>
                        <label>
                            <input type="text" name='mensagem'/>
                        </label>
                    </fieldset>
                </form>
            </section>
        </div>
    )
}