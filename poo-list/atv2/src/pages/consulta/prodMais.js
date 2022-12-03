import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import TableLista from '../../componentes/table/tableLista';
const ProdMais = () => {
    var dados = [
        {
           ID:"01",
           Nome:"Acetona",
           Quantidade:"15"
        },
        {
           ID:"02",
           Nome:"Esmalte",
           Quantidade:"20"
        },
        {
            ID:"03",
           Nome:"Creme para Cachos",
           Quantidade:"16"
        },
        {
            ID:"04",
           Nome:"Condicionador",
           Quantidade:"12"
        },
        {
            ID:"05",
            Nome:"Pente",
            Quantidade:"9"
        }
    ];
    return (
        <div className="container" >
            <a href="/Consulta"><FontAwesomeIcon icon={faArrowLeft} /></a>
            <div id="logoWb">WB</div> 
            <div className="titulo">Produtos mais consumidos</div>
            <form action="#">
                <div className="details">
                    <TableLista dados={dados}></TableLista>
                </div>
            </form>
        </div>
    );

}
export default ProdMais;