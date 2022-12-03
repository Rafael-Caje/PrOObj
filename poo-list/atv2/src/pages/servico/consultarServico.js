import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import TableConsult from '../../componentes/table/table'
const ConsultarServico = () => {
    var dados = [
        {
            ID: '01',
            Nome: 'Corte Masculino',
            Preço: 'R$ 25'
        },
        {
            ID: '02',
            Nome: 'Escova',
            Preço: 'R$ 50'

        },
        {
            ID: '03',
            Nome: 'Corte Feminino',
            Preço: 'R$ 60'
        },
        {
            ID: '04',
            Nome: 'Manícure',
            Preço: 'R$ 15'
        },
        {
            ID: '05',
            Nome: 'Pedicure',
            Preço: 'R$ 15'
        }
    ];
    return (
        <div className="container" >
            <a href="/Servico"><FontAwesomeIcon icon={faArrowLeft} /></a>
            <div id="logoWb"></div> 

            <div className="titulo">Serviços</div>
            <form action="#">
                <div className="details">
                    <TableConsult dados={dados}></TableConsult>
                </div>
            </form>
        </div>
    );

}
export default ConsultarServico;