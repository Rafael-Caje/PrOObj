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
var servico_1 = __importDefault(require("../../modelo/servico"));
var cadastro_1 = __importDefault(require("../../modelo/cadastro"));
var verificacaoNumero_1 = __importDefault(require("../verificacoes/verificacaoNumero"));
var CadastroServico = /** @class */ (function (_super) {
    __extends(CadastroServico, _super);
    function CadastroServico(servicos) {
        var _this = _super.call(this) || this;
        _this.entrada = new entrada_1.default();
        _this.servicos = servicos;
        return _this;
    }
    CadastroServico.prototype.cadastrar = function () {
        var verificacao = new verificacaoNumero_1.default();
        console.log("\nIn\u00EDcio do cadastro do servi\u00E7o:");
        var nome = this.entrada.receberTexto("Nome: ");
        while (this.servicos.find(function (item) { return item.nome == nome || nome.length == 0 || nome == " "; })) {
            var mensagem = nome.length == 0 || nome == " " ? 'Nome: ' : 'Produto já cadastrado. Nome: ';
            nome = this.entrada.receberTexto("".concat(mensagem));
        }
        var preco = this.entrada.receberTexto("Pre\u00E7o, R$: ");
        while (preco.length == 0 || preco == " " || verificacao.verificar(preco) || new Number(preco).valueOf() <= 0) {
            var mensagem = preco.length == 0 || preco == " " ? 'Preço, R$: ' : 'Inválido. Preço, R$: ';
            preco = this.entrada.receberTexto("".concat(mensagem));
        }
        var servico = new servico_1.default(nome, new Number(preco).valueOf());
        this.servicos.push(servico);
        console.log("\nCadastro conclu\u00EDdo :)");
    };
    return CadastroServico;
}(cadastro_1.default));
exports.default = CadastroServico;
