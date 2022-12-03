import React from 'react';
import InputCadastros from '../../componentes/input/input';
import './cadastroCliente.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Select from '../../componentes/select/select';

const CadastroCli = () => {
    return(
        <div className="container">
            <a href="/Cliente"><FontAwesomeIcon icon={faArrowLeft} /></a>
            
            <div className="titulo">Cadastro de Clientes</div>
            <form action="#">
                <div className="DetalhesCli">

                    <InputCadastros id="NomeCli" type="text" placeholder="Digite o nome">Nome completo</InputCadastros>
                    <InputCadastros id="NomeSocial" type="text" placeholder="Nome social">Nome Social</InputCadastros>
                    <InputCadastros id="cpfCli" type="text" placeholder="Digite o CPF">CPF</InputCadastros>
                    <InputCadastros id="dataEmissaoCpf" type="date" >Data de emissão do CPF</InputCadastros>
                    <InputCadastros id="rgCli" type="text" placeholder="Digite o RG">RG</InputCadastros>
                    <InputCadastros id="dataEmissaoRg" type="date" >Data emissão RG</InputCadastros>
                    <InputCadastros id="telefoneCli" type="cellphone" placeholder="(xx) x xxxxxxxx">Cell. Cliente</InputCadastros>
                    <Select></Select>

                </div>

                <div id="btnCad">
                    <button type="submit">Cadastrar</button>
                </div>
            </form>

        </div>
    );
}

export default CadastroCli;
