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
var update_1 = __importDefault(require("../../modelo/update"));
var verificacaoNumero_1 = __importDefault(require("../verificacoes/verificacaoNumero"));
var UpdateServico = /** @class */ (function (_super) {
    __extends(UpdateServico, _super);
    function UpdateServico(servico, empresa) {
        var _this = _super.call(this) || this;
        _this.servico = servico;
        _this.empresa = empresa;
        _this.execucao = true;
        _this.wasUpdated = false;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    UpdateServico.prototype.atualizar = function () {
        var _this = this;
        var verificacao = new verificacaoNumero_1.default();
        var _loop_1 = function () {
            console.log("___________________________________________________");
            console.log("In\u00EDcio do update do servi\u00E7o ".concat(this_1.servico.nome));
            console.log("\nOp\u00E7\u00F5es de update:");
            console.log("1 - Trocar nome");
            console.log("2 - Alterar valor");
            console.log("\n0 - Voltar");
            console.log("___________________________________________________");
            var opcao = this_1.entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
            console.log("___________________________________________________");
            switch (opcao) {
                case 1:
                    var newName_1 = this_1.entrada.receberTexto("Novo nome: ");
                    while (this_1.empresa.getServicos.find(function (item) { return item.nome == newName_1 || newName_1.length == 0 || _this.servico.nome == newName_1 || newName_1 == " "; })) {
                        var mensagem = newName_1.length == 0 || newName_1 == " " ? 'Novo nome: ' : 'Serviço já cadastrado. Novo nome: `';
                        mensagem = this_1.servico.nome == newName_1 ? "N\u00E3o pode ser igual ao anterior. Novo nome: " : mensagem;
                        newName_1 = this_1.entrada.receberTexto("".concat(mensagem));
                    }
                    this_1.servico.nome = newName_1;
                    console.log("Succeso, agora o servico se chama ".concat(this_1.servico.nome));
                    this_1.wasUpdated = true;
                    break;
                case 2:
                    var newValor = this_1.entrada.receberTexto("Pre\u00E7o, R$: ");
                    while (this_1.servico.preco == new Number(newValor).valueOf() || new Number(newValor).valueOf() <= 0 || newValor.length == 0 || verificacao.verificar(newValor)) {
                        var mensagem = newValor.length == 0 ? 'Preço, R$: ' : new Number(newValor).valueOf() <= 0 || verificacao.verificar(newValor) ? 'Inválido. Preço, R$: ' : 'Não pode ser o mesmo do anterior. Preço, R$: ';
                        newValor = this_1.entrada.receberTexto("".concat(mensagem));
                    }
                    this_1.servico.preco = new Number(newValor).valueOf();
                    console.log("\nValor alterado com sucesso!");
                    this_1.wasUpdated = true;
                    break;
                case 0:
                    this_1.execucao = false;
                    if (this_1.wasUpdated)
                        console.log("\nAtualiza\u00E7\u00F5es salvas!");
                    else
                        console.log("\nNenhuma atualiza\u00E7\u00E3o feita.");
                    console.log("\nVoltando ao menu principal");
                    break;
                default:
                    console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
            }
        };
        var this_1 = this;
        while (this.execucao) {
            _loop_1();
        }
    };
    return UpdateServico;
}(update_1.default));
exports.default = UpdateServico;
