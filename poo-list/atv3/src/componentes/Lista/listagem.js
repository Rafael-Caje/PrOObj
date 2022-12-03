/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "../Style/myStyle.css";

export default function Listagem() {

  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems);

    var elemsModal = document.querySelectorAll(".modal");
    M.Modal.init(elemsModal);
  });

  return (
    <div id="backgroundClientContainer">
      <div id="titleContainer">
        <h4 id="Title">Produtos cadastrados</h4>
      </div>
      <div id="collapsibleContainer">
        <ul className="collapsible">
          <li>
            <div id="collapsibleHeader" className="collapsible-header">
              Listagem dos 10 clientes que mais consumiram produtos ou serviços,
              em quantidade, não em valor
            </div>
            <div id="collapsibleBody" className="collapsible-body">
              <span>1º - Rafa</span>
              <br />
              <span>2º - Fabiaspan>
              <br />
            </div>
          </li>
          <li>
            <div id="collapsibleHeader" className="collapsible-header">
              Listagem de todos os clientes por gênero
            </div>
            <div id="collapsibleBody" className="collapsible-body">
              <h6>Feminino</h6>
              <hr />
              <span>1º - Fabia</span>
              <br />
              <h6>Masculino</h6>
              <hr />
              <span>1º - Rafa</span>
              <br />
              <h6>Outro</h6>
              <hr />
              <span>1º - Francisco</span>
              <br />
            </div>
          </li>
          <li>
            <div id="collapsibleHeader" className="collapsible-header">
              Listagem geral de produtos e serviços mais consumidos
            </div>
            <div id="collapsibleBody" className="collapsible-body">
              <span>1º - Shampoo</span>
              <br />
              <span>2º - Condicionador</span>
              <br />
              <span>3º - Esmalte</span>
              <br />
              <span>4º - Corte de Cabelo</span>
              <br />
              <span>5º - Manicure e Pedicure</span>
              <br />
            </div>
          </li>
          <li>
            <div id="collapsibleHeader" className="collapsible-header">
              Listagem dos produtos e serviços mais consumidos por gênero{" "}
            </div>
            <div id="collapsibleBody" className="collapsible-body">
              <h6>Feminino</h6>
              <hr />
              <span>1º - Esmalte</span>
              <br />
              <span>2º - Shampoo</span>
              <br />
              <span>2º - Condicionador</span>
              <br />
              <span>3º - Manicure e Pedicure</span>
              <br />
              <h6>Masculino</h6>
              <hr />
              <span>1º - Shampoo</span>
              <br />
              <span>2º - Condicionador</span>
              <br />
              <span>3º - Corte de Cabelo</span>
              <br />
              <h6>Outro</h6>
              <hr />
              <span></span>
              <br />
            </div>
          </li>
          <li>
            <div id="collapsibleHeader" className="collapsible-header">
              Listagem dos 10 clientes que menos consumiram produtos e serviços{" "}
            </div>
            <div id="collapsibleBody" className="collapsible-body">
              <span>1º - Francisco</span>
              <br />
              <span>2º - Fabia</span>
              <br />
              <span>3º - Rafa</span>
              <br />
            </div>
          </li>
          <li>
            <div id="collapsibleHeader" className="collapsible-header">
              Listagem dos 5 clientes que mais consumiram em valor{" "}
            </div>
            <div id="collapsibleBody" className="collapsible-body">
              <span>1º - Rafa</span>
              <br />
              <span>2º - Fabia</span>
              <br />
              <span>3º - Francisco</span>
              <br />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
