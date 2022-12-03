"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Servico = /** @class */ (function () {
    function Servico(nome, preco) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeVendida = 0;
    }
    Object.defineProperty(Servico.prototype, "getQuantidadeVendida", {
        get: function () { return this.quantidadeVendida; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "setQuantidadeVendida", {
        set: function (input) { this.quantidadeVendida = input; },
        enumerable: false,
        configurable: true
    });
    Servico.prototype.visualizar = function () {
        console.log("______________________________________________________");
        console.log("Informa\u00E7\u00F5es do servi\u00E7o ".concat(this.nome, ":"));
        console.log("____________________________________");
        console.log("Pre\u00E7o: ".concat(this.preco));
        console.log("Quantidade vendida: ".concat(this.quantidadeVendida));
    };
    return Servico;
}());
exports.default = Servico;
