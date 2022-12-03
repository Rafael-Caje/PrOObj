"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../../io/entrada"));
var produto_1 = __importDefault(require("../../modelo/produto"));
var cadastro_1 = __importDefault(require("../../modelo/cadastro"));
var verificacaoNumero_1 = __importDefault(require("../verificacoes/verificacaoNumero"));
var CadastroProduto = /** @class */ (function (_super) {
    __extends(CadastroProduto, _super);
    function CadastroProduto(produtos) {
        var _this = _super.call(this) || this;
        _this.entrada = new entrada_1.default();
        _this.produtos = produtos;
        return _this;
    }
    CadastroProduto.prototype.cadastrar = function () {
        var verificacao = new verificacaoNumero_1.default();
        console.log("\nIn\u00EDcio do cadastro do produto:");
        var nome = this.entrada.receberTexto("Nome: ");
        while (this.produtos.find(function (item) { return item.nome == nome || nome.length == 0; })) {
            var mensagem = nome.length == 0 ? 'Nome: ' : 'Produto já cadastrado. Nome: ';
            nome = this.entrada.receberTexto("".concat(mensagem));
        }
        var preco = this.entrada.receberTexto("Pre\u00E7o, R$: ");
        while (preco.length == 0 || verificacao.verificar(preco) || new Number(preco).valueOf() <= 0) {
            var mensagem = preco.length == 0 ? 'Preço, R$: ' : 'Inválido. Preço, R$: ';
            preco = this.entrada.receberTexto("".concat(mensagem));
        }
        var produto = new produto_1.default(nome, new Number(preco).valueOf());
        this.produtos.push(produto);
        console.log("\nCadastro conclu\u00EDdo :)");
    };
    return CadastroProduto;
}(cadastro_1.default));
exports.default = CadastroProduto;
