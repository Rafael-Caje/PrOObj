import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import TableLista from '../../componentes/table/tableLista';
const CliMasculino = () => {
    var dados = [
        {
            Nome: 'Naruto Uzumaki',
            Nome_Social:'Naruto ',
            Tel:'(XX) X XXXX-XXXX',
            Gênero: "M"
        },
        {
            Nome: 'Sasuke Uchiha',
            Nome_Social:'Sasuke',
            Tel:'(XX) X XXXX-XXXX',
            Gênero: "M"
        },
        {
            Nome: 'Kakashi Hatake',
            Nome_Social:'Kakashi',
            Tel:'(XX) X XXXX-XXXX',
            Gênero: "M"
        },
        {
            Nome: 'Iruka Umino',
            Nome_Social:'Iruka',
            Tel:'(XX) X XXXX-XXXX',
            Gênero: "M"
        },
        {
            Nome: 'Madara Uchiha',
            Nome_Social:'Madara',
            Tel:'(XX) X XXXX-XXXX',
            Gênero: "M"
        }
    ];
    return (
        <div className="container" >
            <a href="/Consulta"><FontAwesomeIcon icon={faArrowLeft} /></a>
            <div id="logoWb">WB</div> 
            <div className="titulo">Clientes masculinos</div>
            <form action="#">
                <div className="details">
                    <TableLista dados={dados}></TableLista>
                </div>
            </form>
        </div>
    );

}
export default CliMasculino;