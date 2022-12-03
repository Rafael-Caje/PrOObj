import React from 'react';
import BotaoHome from '../home/botaoHome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const Cliente = () => {
    return ( 
        <div className=" form">
            <a href="/"><FontAwesomeIcon icon={faArrowLeft} /></a>
            <div id="logoWb">WB</div>   
            <div className="tituloHome">Cliente</div>
            <form action="#">
                <div className="Home">
                    <BotaoHome home="/cadastroCliente">Cadastrar</BotaoHome>
                    <BotaoHome home="/consultarCliente">Consultar</BotaoHome>
                </div>
            </form>

        </div>
     );
}
 
export default Cliente;