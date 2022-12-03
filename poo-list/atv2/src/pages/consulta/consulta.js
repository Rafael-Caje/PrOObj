import React from 'react';
import BotaoHome from '../home/botaoHome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const Consulta = () => {
    return ( 
        <div className=" form">
            <a href="/"><FontAwesomeIcon icon={faArrowLeft} /></a>
            <div id="logoWb">WB</div>   
            <div className="tituloHome">Consultas WB</div>
            <form action="#">
                <div className="Home">
                    <BotaoHome home="/clientesFeminino">Clientes Feminino</BotaoHome>
                    <BotaoHome home="/clientesMasculino">Clientes Masculino</BotaoHome>                    
                    <BotaoHome home="/dezMaisConsumo">Dez mais em consumo</BotaoHome>
                    <BotaoHome home="/dezMaisValor">Dez mais em valor</BotaoHome>
                    <BotaoHome home="/produtosMaisConsumido">Produto mais consumido</BotaoHome>
                    <BotaoHome home="/servicosMaisConsumido">Serviço mais consumido</BotaoHome>
                </div>
            </form>

        </div>
     );
}
 
export default Consulta;