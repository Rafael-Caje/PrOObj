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
var telefone_1 = __importDefault(require("../../modelo/telefone"));
var update_1 = __importDefault(require("../../modelo/update"));
var verificacaoNumero_1 = __importDefault(require("../verificacoes/verificacaoNumero"));
var UpdateCliente = /** @class */ (function (_super) {
    __extends(UpdateCliente, _super);
    function UpdateCliente(cliente, empresa) {
        var _this = _super.call(this) || this;
        _this.cliente = cliente;
        _this.entrada = new entrada_1.default();
        _this.empresa = empresa;
        _this.execucao = true;
        _this.wasUpdated = false;
        return _this;
    }
    UpdateCliente.prototype.atualizar = function () {
        var verificador = new verificacaoNumero_1.default();
        while (this.execucao) {
            console.log("______________________________________________________");
            console.log("In\u00EDcio do update do cliente ".concat(this.cliente.nome));
            console.log("\nOp\u00E7\u00F5es de update:");
            console.log("1 - Trocar nome");
            console.log("2 - Trocar nome social");
            console.log("3 - Alterar sexo");
            console.log("4 - Alterar telefone");
            console.log("\n0 - Voltar");
            console.log("______________________________________________________");
            var opcao = this.entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
            console.log("______________________________________________________");
            switch (opcao) {
                case 1:
                    var newName = this.entrada.receberTexto("Novo nome: ");
                    while (newName.length == 0 || this.cliente.nome == newName || newName == " ") {
                        var mensagem = newName.length == 0 || newName == " " ? 'Novo nome: ' : 'Não pode ser igual ao anterior, novo nome: ';
                        newName = this.entrada.receberTexto("".concat(mensagem));
                    }
                    this.cliente.nome = newName;
                    this.wasUpdated = true;
                    console.log("\nSucesso, agora o cliente se chama: ".concat(newName));
                    break;
                case 2:
                    var newSocialName = this.entrada.receberTexto("Novo nome social: ");
                    while (newSocialName.length == 0 || this.cliente.nomeSocial == newSocialName || newSocialName == " ") {
                        var mensagem = newSocialName.length == 0 || newSocialName == " " ? 'Novo nome social: ' : 'Não pode ser igual ao anterior, novo nome social: ';
                        newSocialName = this.entrada.receberTexto("".concat(mensagem));
                    }
                    this.cliente.nomeSocial = newSocialName;
                    this.wasUpdated = true;
                    console.log("\nSucesso, agora o nome social do cliente \u00E9: ".concat(newSocialName));
                    break;
                case 3:
                    var newSexo = this.entrada.receberTexto("Novo sexo: ").toUpperCase();
                    while (this.cliente.sexo == newSexo || (newSexo != "M" && newSexo != "F" && newSexo != "O")) {
                        var mensagem = this.cliente.sexo == newSexo ? 'Não pode ser igual ao anterior, novo sexo: ' : 'Inválido, novo sexo: ';
                        newSexo = this.entrada.receberTexto("".concat(mensagem)).toUpperCase();
                    }
                    this.cliente.sexo = newSexo;
                    this.wasUpdated = true;
                    console.log("\nSucesso, agora o sexo do cliente \u00E9: ".concat(newSexo));
                    break;
                case 4:
                    var newPhoneDdd = this.entrada.receberTexto("Novo DDD: ");
                    while (newPhoneDdd.length != 2 || verificador.verificar(newPhoneDdd) || newPhoneDdd == " ") {
                        var mensagem = newPhoneDdd.length == 0 || newPhoneDdd == " " ? 'Novo DDD: ' : 'Inválido, novo DDD: ';
                        newPhoneDdd = this.entrada.receberTexto("".concat(mensagem));
                    }
                    var newPhoneNumber = this.entrada.receberTexto("Novo n\u00FAmero de telefone: ");
                    while (newPhoneNumber.length == 0 || verificador.verificar(newPhoneNumber) || this.cliente.telefone.getNumero == newPhoneNumber || newPhoneNumber == " ") {
                        var mensagem = newPhoneNumber.length == 0 || newPhoneNumber == " " ? 'Novo número de telefone: ' : verificador.verificar(newPhoneNumber) ? 'Inválido, novo número de telefone: ' : 'Não pode ser igual ao anterior, novo número de telefone: ';
                        newPhoneNumber = this.entrada.receberTexto("".concat(mensagem));
                    }
                    var newPhone = new telefone_1.default(newPhoneDdd, newPhoneNumber);
                    this.cliente.telefone = newPhone;
                    this.wasUpdated = true;
                    console.log("\nSucesso, alterado o telefone: (".concat(newPhone.getDdd, ") ").concat(newPhone.getNumero, " "));
                    break;
                case 0:
                    this.execucao = false;
                    if (this.wasUpdated)
                        console.log("Atualiza\u00E7\u00F5es salvas!");
                    else
                        console.log("\nNenhuma atualiza\u00E7\u00E3o feita.");
                    console.log("\nVoltando ao menu principal");
                    break;
                default:
                    console.log("Inv\u00E1lido");
            }
        }
    };
    return UpdateCliente;
}(update_1.default));
exports.default = UpdateCliente;
