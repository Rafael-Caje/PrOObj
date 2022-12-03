"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VerificacaoNumero = /** @class */ (function () {
    function VerificacaoNumero() {
    }
    VerificacaoNumero.prototype.verificar = function (valor) {
        var numero = new Number(valor);
        return Number.isNaN(numero.valueOf());
    };
    return VerificacaoNumero;
}());
exports.default = VerificacaoNumero;
