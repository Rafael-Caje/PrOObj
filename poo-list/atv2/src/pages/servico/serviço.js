import React from 'react';
import BotaoHome from '../home/botaoHome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const Servico = () => {
    return ( 
        <div className=" form">
            <a href="/"><FontAwesomeIcon icon={faArrowLeft} /></a> 
            <div id="logoWb">WB</div>
            <div className="tituloHome">Serviço</div>
            <form action="#">
                
                <div className="Home">
                    <BotaoHome home="/cadastrarServico">Cadastrar</BotaoHome>
                    <BotaoHome home="/consultarServico">Consultar</BotaoHome>
                    
                </div>
            </form>

        </div>
     );
}
 
export default Servico;