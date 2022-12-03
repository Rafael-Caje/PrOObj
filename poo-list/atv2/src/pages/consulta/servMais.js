import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import TableLista from '../../componentes/table/tableLista';
const ServMais= () => {
    var dados = [
        {
           ID:"01",
           Nome:"Corte",
           Quantidade:"25"
        },
        {
            ID:"02",
           Nome:"Tintura",
           Quantidade:"13"
        },
        {
            ID:"03",
           Nome:"Pedicure",
           Quantidade:"14"
        },
        {
            ID:"04",
           Nome:"Manicure",
           Quantidade:"12"
        },
        {
            ID:"05",
            Nome:"Hidratação",
            Quantidade:"5"
        }
    ];
    return (
        <div className="container" >
            <a href="/Consulta"><FontAwesomeIcon icon={faArrowLeft} /></a>
            <div id="logoWb">WB</div> 
            <div className="titulo">Serviços mais consumidos</div>
            <form action="#">
                <div className="details">
                    <TableLista dados={dados}></TableLista>
                </div>
            </form>
        </div>
    );

}
export default ServMais;