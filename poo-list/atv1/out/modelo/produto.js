"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeVendida = 0;
    }
    Object.defineProperty(Produto.prototype, "getQuantidadeVendida", {
        get: function () { return this.quantidadeVendida; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setQuantidadeVendida", {
        set: function (quantidadeVendida) { this.quantidadeVendida = quantidadeVendida; },
        enumerable: false,
        configurable: true
    });
    Produto.prototype.visualizar = function () {
        console.log("______________________________________________________");
        console.log("Informa\u00E7\u00F5es do produto ".concat(this.nome, ":"));
        console.log("____________________________________");
        console.log("Pre\u00E7o: ".concat(this.preco));
        console.log("Quantidade vendida: ".concat(this.quantidadeVendida));
    };
    return Produto;
}());
exports.default = Produto;
