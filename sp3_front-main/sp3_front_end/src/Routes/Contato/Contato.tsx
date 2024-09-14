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
                            <textarea name="mensagem" id="idmensagem" cols={30} rows={10} placeholder='Deixe sua mensagem!'></textarea>
                        </label>
                    </fieldset>
                    <br />
                    <button type='submit' value={"Enviar"}>Enviar</button>
                </form>
            </section>
        </div>
    )
}