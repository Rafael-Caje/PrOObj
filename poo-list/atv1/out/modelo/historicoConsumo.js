"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HistoricoConsumo = /** @class */ (function () {
    function HistoricoConsumo(tipo, nome, quantidade, valorPago) {
        this.tipo = tipo;
        this.nome = nome;
        this.quantidade = quantidade;
        this.dataConsumo = new Date();
        this.valorPago = valorPago;
    }
    return HistoricoConsumo;
}());
exports.default = HistoricoConsumo;
