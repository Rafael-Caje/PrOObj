import React from 'react';
import InputCadastros from '../../componentes/input/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const CadastroProd = () => {
    return(
    <div className="container">  
        <a href="/produto"><FontAwesomeIcon icon={faArrowLeft} /></a>
        <div id="logoWb">WB</div>         
        <div className="titulo">Cadastro de produto</div>
        <form action="#">
            <div className="DetalhesCli">

                <InputCadastros id="IdProd" type="number" placeholder="Digite o ID">ID</InputCadastros>
                <InputCadastros id="NomeProd" type="text" placeholder="Nome do produto">Nome do produto</InputCadastros>
                <InputCadastros id="precoProd" type="number" placeholder="Preço do R$">Preço do produto</InputCadastros>

            </div>

            <div id="btnCad">
                <button type="submit">Cadastrar</button>
            </div>
        </form>

    </div>
    );
}

export default CadastroProd;