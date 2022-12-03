import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import TableConsult from '../../componentes/table/table';
import './consultaCli.css'

const ConsultarCli = () => {
    var dados = [
        {
        Nome: "Fábia Kaylani Pereira Alves",
        Nome_Social: "Fábia",
        Gênero: "F",
        RG: "XXXXXXXX-0",
        DataRG:'21/10/2020',
        CPF:'XXXXXXXXX-00',
        DataCPF:'15/04/2018',
        Telefone:'(XX) X XXXX-0000'


      },
      {
        Nome: "Marcos Noronha de Lima",
        Nome_Social: "Marcos",
        Gênero: "M",
        RG: "XXXXXXXX-0",
        DataRG:'15/08/2014',
        CPF:'XXXXXXXXX-00',
        DataCPF:'21/04/2019',
        Telefone:'(XX) X XXXX-0000'       

      },
      {
        Nome: "Ana Luiza",
        Nome_Social: "Ana",
        Gênero: "F",
        RG: "XXXXXXXX-0",
        DataRG:'15/08/2014',
        CPF:'XXXXXXXXX-00',
        DataCPF:'21/04/2019',
        Telefone:'(XX) X XXXX-0000'       

      },
      {
        Nome: "Luis Loureiro",
        Nome_Social: "Luis",
        Gênero: "M",
        RG: "XXXXXXXX-0",
        DataRG:'15/08/2014',
        CPF:'XXXXXXXXX-00',
        DataCPF:'21/04/2019',
        Telefone:'(XX) X XXXX-0000'       

      }
    ];
    return (
        <div className="container" id='Cont' >
            <a href="/Cliente"><FontAwesomeIcon icon={faArrowLeft} /></a>
            
            <div className="titulo">Clientes</div>
            <form action="#">
                <div className="details">
                    <TableConsult dados={dados}></TableConsult>
                </div>
            </form>
        </div>
    );

}
export default ConsultarCli;