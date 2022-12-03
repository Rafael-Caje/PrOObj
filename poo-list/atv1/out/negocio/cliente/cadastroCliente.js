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
var cliente_1 = __importDefault(require("../../modelo/cliente"));
var cpf_1 = __importDefault(require("../../modelo/cpf"));
var cadastro_1 = __importDefault(require("../../modelo/cadastro"));
var rg_1 = __importDefault(require("../../modelo/rg"));
var telefone_1 = __importDefault(require("../../modelo/telefone"));
var verificacaoNumero_1 = __importDefault(require("../verificacoes/verificacaoNumero"));
var CadastroCliente = /** @class */ (function (_super) {
    __extends(CadastroCliente, _super);
    function CadastroCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroCliente.prototype.cadastrar = function () {
        var verificador = new verificacaoNumero_1.default();
        console.log("In\u00EDcio do cadastro do cliente:");
        var nome = this.entrada.receberTexto("Nome: ");
        while (nome.length == 0 || nome == " ") {
            nome = this.entrada.receberTexto("Inv\u00E1lido. Nome: ");
        }
        var nomeSocial = this.entrada.receberTexto("Nome social: ");
        while (nomeSocial.length == 0 || nomeSocial == " ") {
            nomeSocial = this.entrada.receberTexto("Inv\u00E1lido. Nome social: ");
        }
        var sexo = this.entrada.receberTexto("Sexo (M,F,O): ").toUpperCase();
        while (sexo != "M" && sexo != "F" && sexo != "O") {
            sexo = this.entrada.receberTexto("Inv\u00E1lido. Sexo (M,F,O): ").toUpperCase();
        }
        var rgValor = this.entrada.receberTexto("RG (Somente n\u00FAmeros): ");
        while (rgValor.length != 9 || verificador.verificar(rgValor) || this.clientes.find(function (item) { return item.getRg.getValor == rgValor; }) != undefined || rgValor == " ") {
            var mensagem = rgValor.length == 0 ? 'RG (Somente números): ' : 'Inválido. RG (Somente números): ';
            rgValor = this.entrada.receberTexto("".concat(mensagem));
        }
        var rgData = this.entrada.receberTexto("Data de emiss\u00E3o do RG (dd/mm/yyyy): ");
        while (!rgData.includes("/") ||
            rgData.split("/").length != 3 ||
            rgData.split("/")[0].length != 2 ||
            rgData.split("/")[1].length != 2 ||
            rgData.split("/")[2].length != 4 ||
            verificador.verificar(rgData.split("/")[0]) ||
            (new Number(rgData.split("/")[0]).valueOf() > 31 || new Number(rgData.split("/")[0]).valueOf() <= 0) ||
            verificador.verificar(rgData.split("/")[1]) ||
            (new Number(rgData.split("/")[1]).valueOf() > 12 || new Number(rgData.split("/")[1]).valueOf() <= 0) ||
            verificador.verificar(rgData.split("/")[2]) ||
            (new Number(rgData.split("/")[2]).valueOf() > 2022 || new Number(rgData.split("/")[2]).valueOf() <= 0)) {
            rgData = this.entrada.receberTexto("Inv\u00E1lido. Data de emiss\u00E3o do RG (dd/mm/yyyy): ");
        }
        var cpfValor = this.entrada.receberTexto("CPF (Somente n\u00FAmeros): ");
        while (cpfValor.length != 11 || verificador.verificar(cpfValor) || this.clientes.find(function (item) { return item.getCpf.getValor == cpfValor; }) != undefined || cpfValor == " ") {
            var mensagem = cpfValor.length == 0 ? 'CPF (Somente números): ' : 'Inválido. CPF (Somente números): ';
            cpfValor = this.entrada.receberTexto("".concat(mensagem));
        }
        var cpfData = this.entrada.receberTexto("Data de emiss\u00E3o do CPF (dd/mm/yyyy): ");
        while (!cpfData.includes("/") ||
            cpfData.split("/").length != 3 ||
            cpfData.split("/")[0].length != 2 ||
            cpfData.split("/")[1].length != 2 ||
            cpfData.split("/")[2].length != 4 ||
            verificador.verificar(cpfData.split("/")[0]) ||
            (new Number(cpfData.split("/")[0]).valueOf() > 31 || new Number(cpfData.split("/")[0]).valueOf() <= 0) ||
            verificador.verificar(cpfData.split("/")[1]) ||
            (new Number(cpfData.split("/")[1]).valueOf() > 12 || new Number(cpfData.split("/")[1]).valueOf() <= 0) ||
            verificador.verificar(cpfData.split("/")[2]) ||
            (new Number(cpfData.split("/")[2]).valueOf() > 2022 || new Number(cpfData.split("/")[2]).valueOf() <= 0)) {
            cpfData = this.entrada.receberTexto("Inv\u00E1lido. Data de emiss\u00E3o do CPF (dd/mm/yyyy): ");
        }
        var telefoneDDD = this.entrada.receberTexto("DDD (Somente n\u00FAmeros): ");
        while (telefoneDDD.length != 2 || verificador.verificar(telefoneDDD) || telefoneDDD == " ") {
            var mensagem = telefoneDDD.length == 0 ? 'DDD (Somente números): ' : 'Inválido. DDD (Somente números): ';
            telefoneDDD = this.entrada.receberTexto("".concat(mensagem));
        }
        var telefoneNumero = this.entrada.receberTexto("N\u00FAmero telefone: ");
        while (telefoneNumero.length != 9 || verificador.verificar(telefoneNumero) || telefoneNumero == " ") {
            var mensagem = telefoneNumero.length == 0 ? 'Número telefone: ' : 'Inválido. Número telefone: ';
            telefoneNumero = this.entrada.receberTexto("".concat(mensagem));
        }
        var cpfPartesData = cpfData.split('/');
        var cpfAno = new Number(cpfPartesData[2].valueOf()).valueOf();
        var cpfMes = new Number(cpfPartesData[1].valueOf()).valueOf();
        var cpfDia = new Number(cpfPartesData[0].valueOf()).valueOf();
        var cpfDataEmissao = new Date(cpfAno, cpfMes, cpfDia);
        var cpf = new cpf_1.default(cpfValor, cpfDataEmissao);
        var rgPartesData = rgData.split('/');
        var rgAno = new Number(rgPartesData[2].valueOf()).valueOf();
        var rgMes = new Number(rgPartesData[1].valueOf()).valueOf();
        var rgDia = new Number(rgPartesData[0].valueOf()).valueOf();
        var rgDataEmissao = new Date(rgAno, rgMes, rgDia);
        var rg = new rg_1.default(rgValor, rgDataEmissao);
        var telefone = new telefone_1.default(telefoneDDD, telefoneNumero);
        var cliente = new cliente_1.default(nome, nomeSocial, cpf, rg, sexo, telefone);
        this.clientes.push(cliente);
        console.log("\nCadastro conclu\u00EDdo :)\n");
    };
    return CadastroCliente;
}(cadastro_1.default));
exports.default = CadastroCliente;
