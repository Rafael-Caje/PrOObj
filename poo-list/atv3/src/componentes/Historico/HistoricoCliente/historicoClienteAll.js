/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component, useEffect } from "react";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "../../Style/myStyle.css";

export default function HistoricoClienteAll() {
  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems);

    var elemsModal = document.querySelectorAll(".modal");
    M.Modal.init(elemsModal);
  });

  return (
    <div id="historyCollapsibleContainer">
      <ul className="collapsible">
        <li className="">
          <div id="collapsibleHeader" className="collapsible-header">
            Rafa
          </div>
          <div id="collapsibleBody" className="collapsible-body">
            <h5>Produtos</h5>
            <span>4x Shampoo</span>
            <br />
            <span>3x Condicionador</span>
            <br />
            <hr />
            <span>Total Produto: R$: 75,00</span>
            <h5>Serviços</h5>
            <span>2x Corte de Cabelo</span>
            <br />
            <hr />
            <span>Total Serviço: R$: 100,00</span>
            <div id="totalContainer">
              <span id="total">Total: R$: 175,00</span>
            </div>
          </div>
        </li>
        <li>
          <div id="collapsibleHeader" className="collapsible-header">
            Fabia
          </div>
          <div id="collapsibleBody" className="collapsible-body">
            <h5>Produtos</h5>
            <span>3x Esmalte</span>
            <br />
            <span>2x Shampoo</span>
            <br />
            <span>2x Condicionador</span>
            <br />
            <hr />
            <span>Total Produto: R$: 59,00</span>
            <h5>Serviços</h5>
            <span>1x Manicure e Pedicure</span>
            <br />
            <hr />
            <span>Total Serviço: R$: 30,00</span>
            <div id="totalContainer">
              <span id="total">Total: R$: 89,00</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
