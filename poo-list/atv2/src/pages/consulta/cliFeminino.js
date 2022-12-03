import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import TableLista from '../../componentes/table/tableLista';
const CliFeminino = () => {
    var dados = [
        {
            Nome: 'Hinata Hyuga',
            Nome_Social:'Hinata ',
            Tel:'(XX) X XXXX-XXXX',
            Gênero: "F"
        },
        {
            Nome: 'Ino Yamanaka',
            Nome_Social:'Ino',
            Tel:'(XX) X XXXX-XXXX',
            Gênero: "F"
        },
        {
            Nome: 'Kurenai Yuhi',
            Nome_Social:'Kurenai',
            Tel:'(XX) X XXXX-XXXX',
            Gênero: "F"
        },
        {
            Nome: 'Sakura Haruno',
            Nome_Social:'Sakura',
            Tel:'(XX) X XXXX-XXXX',
            Gênero: "F"
        },
        {
            Nome: 'Tsunade Senju',
            Nome_Social:'Tsunade',
            Tel:'(XX) X XXXX-XXXX',
            Gênero: "F"
        }
    ];
    return (
        <div className="container" >
            <a href="/Consulta"><FontAwesomeIcon icon={faArrowLeft} /></a>
            <div id="logoWb">WB</div> 
            <div className="titulo">Clientes feminino</div>
            <form action="#">
                <div className="details">
                    <TableLista dados={dados}></TableLista>
                </div>
            </form>
        </div>
    );

}
export default CliFeminino;