import './Cadastro.css'

export default function Cadastro() {

    return(
        <div>
            <h1>Cadastro</h1>
            <div className='forms'>
            <form>
            <fieldset>
                    <legend>Usuário</legend>
                    <label>
                        <input type="text" placeholder='Insira seu Nome'/>
                    </label>
                    <label>
                        <input type='text' placeholder='Insira seu CEP'/>
                    </label>
                    <label>
                        <input type="text" placeholder='Insira seu CPF'/>
                    </label>
                    <label>
                        <input type="text" placeholder='Insira seu RG'/>
                    </label>
                    <label>
                        <input type="text" placeholder='Insira seu Telefone'/>
                    </label>
                    <label>
                        <input type="text" placeholder='Insira seu Email'/>
                    </label>
                </fieldset>

                <button type='submit'>Cadastrar Usuário</button>
            </form>
                
            <form>
                <fieldset>
                    <legend>Veículo</legend>
                    <label>
                        <input type="text" placeholder='Insira a placa do veículo'/>
                    </label>
                    <label>
                        <input type="text" placeholder='Insira a placa do veículo'/>
                    </label>
                    <label>
                        <input type="text" placeholder='Insira o modelo do veículo'/>
                    </label>
                    <label>
                        <input type="text" placeholder='Insira o tipo do veículo'/>
                    </label>
                    <label>
                        <input type="text" placeholder='Insira o ano do veículo'/>
                    </label>
                    <label>
                        <input type="text" placeholder='Insira a cor do veículo'/>
                    </label>
                </fieldset>

                <button type='submit'>Cadastrar Veículo</button>
            </form>
            </div>
        </div>
    )
}