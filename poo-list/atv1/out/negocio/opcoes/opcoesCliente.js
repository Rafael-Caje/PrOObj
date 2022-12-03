"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../../io/entrada"));
var cadastroCliente_1 = __importDefault(require("../cliente/cadastroCliente"));
var updateCliente_1 = __importDefault(require("../cliente/updateCliente"));
var listagemClientes_1 = __importDefault(require("../listagens/listagemClientes"));
var OpcoesCliente = /** @class */ (function () {
    function OpcoesCliente(empresa) {
        this.empresa = empresa;
        this.entrada = new entrada_1.default();
        this.execucao = true;
    }
    OpcoesCliente.prototype.runOpcoes = function () {
        var _loop_1 = function () {
            console.log("______________________________________________________");
            console.log("Op\u00E7\u00F5es de cadastro de clientes");
            console.log("\n1 - Cadastrar cliente");
            console.log("2 - Listar todos os clientes");
            console.log("3 - Visualizar cliente");
            console.log("4 - Atualizar cliente");
            console.log("5 - Deletar cliente");
            console.log("\n0 - Voltar");
            console.log("______________________________________________________");
            var opcao = this_1.entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
            console.log("______________________________________________________");
            switch (opcao) {
                case 1:
                    var cadastro = new cadastroCliente_1.default(this_1.empresa.getClientes);
                    cadastro.cadastrar();
                    break;
                case 2:
                    var listagem = new listagemClientes_1.default(this_1.empresa.getClientes);
                    listagem.listar();
                    break;
                case 3:
                    var nomeClienteView_1 = this_1.entrada.receberTexto("Por favor informe o nome do cliente: ");
                    var clienteView = this_1.empresa.getClientes.find(function (client) { return client.nome == nomeClienteView_1; });
                    7;
                    if (clienteView != undefined) {
                        clienteView.visualizar();
                    }
                    else {
                        console.log("Cliente n\u00E3o encontrado!");
                    }
                    break;
                case 4:
                    var nomeCliente_1 = this_1.entrada.receberTexto("Por favor informe o nome do cliente: ");
                    var cliente = this_1.empresa.getClientes.find(function (client) { return client.nome == nomeCliente_1; });
                    if (cliente != undefined) {
                        var atualizarCliente = new updateCliente_1.default(cliente, this_1.empresa);
                        atualizarCliente.atualizar();
                    }
                    else {
                        console.log("Cliente n\u00E3o encontrado!");
                    }
                    break;
                case 5:
                    var nomeClienteDelete_1 = this_1.entrada.receberTexto("Por favor informe o nome do cliente: ");
                    var clienteDelete = this_1.empresa.getClientes.find(function (client) { return client.nome == nomeClienteDelete_1; });
                    if (clienteDelete != undefined) {
                        var indexCliente = this_1.empresa.getClientes.indexOf(clienteDelete);
                        this_1.empresa.getClientes.splice(indexCliente, 1);
                        console.log("\nCliente exclu\u00EDdo com sucesso!");
                    }
                    else {
                        console.log("\nCliente n\u00E3o encontrado!");
                    }
                    break;
                case 0:
                    this_1.execucao = false;
                    console.log("\nVoltando ao menu principal");
                    break;
                default:
                    console.log("Inv\u00E1lido");
            }
        };
        var this_1 = this;
        while (this.execucao) {
            _loop_1();
        }
    };
    return OpcoesCliente;
}());
exports.default = OpcoesCliente;
