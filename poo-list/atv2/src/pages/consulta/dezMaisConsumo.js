import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import TableLista from '../../componentes/table/tableLista';
const DezMaisConsumo = () => {
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
        },
        {
            Nome: 'Tsunade Senju',
            Nome_Social:'Tsunade',
            Tel:'(XX) X XXXX-XXXX',
            Gênero: "F"
        },
        {
            Nome: 'Tsunade Senju',
            Nome_Social:'Tsunade',
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
            <div className="titulo">Dez mais em consumo</div>
            <form action="#">
                <div className="details">
                    <TableLista dados={dados}></TableLista>
                </div>
            </form>
        </div>
    );

}
export default DezMaisConsumo;