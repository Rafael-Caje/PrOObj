import React from 'react';
import BotaoHome from '../home/botaoHome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const Produto = () => {
    return ( 
        <div className=" form">
            <a href="/"><FontAwesomeIcon icon={faArrowLeft} /></a> 
            <div id="logoWb">WB</div>  
            <div className="tituloHome">Produto</div>
            <form action="#">
                <div className="Home">
                    <BotaoHome home="/cadastrarProduto">Cadastrar</BotaoHome>
                    <BotaoHome home="/consultarProduto">Consultar</BotaoHome>
                </div>
            </form>

        </div>
     );
}
 
export default Produto;