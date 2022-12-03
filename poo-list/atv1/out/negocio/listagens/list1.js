"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var List1 = /** @class */ (function () {
    function List1(empresa) {
        this.empresa = empresa;
    }
    List1.prototype.listar = function () {
        var posicao = 1;
        var clientes = this.empresa.getClientes;
        clientes.sort(function compare(a, b) {
            var quantidadeA = 0;
            a.getHistoricoConsumo.forEach(function (item) { return quantidadeA += item.quantidade; });
            var quantidadeB = 0;
            b.getHistoricoConsumo.forEach(function (item) { return quantidadeB += item.quantidade; });
            if (quantidadeB > quantidadeA) {
                return -1;
            }
            if (quantidadeA > quantidadeB) {
                return 1;
            }
            return 0;
        }).reverse().forEach(function (item) {
            if (posicao <= 10) {
                var quantidadeConsumida_1 = 0;
                item.getHistoricoConsumo.forEach(function (i) { return quantidadeConsumida_1 += i.quantidade; });
                console.log("".concat(posicao, "\u00BA Cliente: ").concat(item.nome, " , Quantidade: ").concat(quantidadeConsumida_1));
            }
            posicao++;
        });
    };
    return List1;
}());
exports.default = List1;
