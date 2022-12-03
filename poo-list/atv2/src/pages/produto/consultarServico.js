import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import TableConsult from '../../componentes/table/table'
const ConsultarProduto = () => {
    var dados = [
        {
            ID: '01',
            Nome: 'Creme para cachos',
            Preço: 'R$ 25'
        },
        {
            ID: '02',
            Nome: 'Condicionador',
            Preço: 'R$ 15'

        },
        {
            ID: '03',
            Nome: 'Gel',
            Preço: 'R$ 20'
        },
        {
            ID: '04',
            Nome: 'Pente',
            Preço: 'R$ 8'
        },
        {
            ID: '05',
            Nome: 'Esmalte',
            Preço: 'R$ 5'
        },
        {
            ID: '06',
            Nome: 'Pó descolorante',
            Preço: 'R$ 12'
        }
    ];
    return (
        <div className="container" >
            <a href="/Produto"><FontAwesomeIcon icon={faArrowLeft} /></a>
            <div id="logoWb">WB</div> 
            <div className="titulo">Produtos</div>
            <form action="#">
                <div className="details">
                    <TableConsult dados={dados}></TableConsult>
                </div>
            </form>
        </div>
    );

}
export default ConsultarProduto;