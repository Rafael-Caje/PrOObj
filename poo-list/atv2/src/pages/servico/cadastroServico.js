import React from 'react';
import InputCadastros from '../../componentes/input/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const CadastroServ = () => {
    return(
    <div className="container">  
        <a href="/servico"><FontAwesomeIcon icon={faArrowLeft} /></a> 
        <div id="logoWb">WB</div>        
        <div className="titulo">Cadastro de Serviço</div>
        <form action="#">
            <div className="DetalhesCli">

                <InputCadastros id="IdProd" type="number" placeholder="Digite o ID">ID</InputCadastros>
                <InputCadastros id="NomeProd" type="text" placeholder="Nome do serviço">Nome do Serviço</InputCadastros>
                <InputCadastros id="precoProd" type="number" placeholder="Preço do R$">Preço do Serviço</InputCadastros>

            </div>

            <div id="btnCad">
                <button type="submit">Cadastrar</button>
            </div>
        </form>

    </div>
    );
}

export default CadastroServ;