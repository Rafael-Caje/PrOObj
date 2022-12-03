"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../../io/entrada"));
var listagemServico_1 = __importDefault(require("../listagens/listagemServico"));
var cadastroServico_1 = __importDefault(require("../servico/cadastroServico"));
var updateServico_1 = __importDefault(require("../servico/updateServico"));
var OpcoesServico = /** @class */ (function () {
    function OpcoesServico(empresa) {
        this.empresa = empresa;
        this.entrada = new entrada_1.default();
        this.execucao = true;
    }
    OpcoesServico.prototype.runOpcoes = function () {
        var _loop_1 = function () {
            console.log("___________________________________________________");
            console.log("Op\u00E7\u00F5es de cadastro de servi\u00E7os");
            console.log("\n1 - Cadastro servi\u00E7o");
            console.log("2 - Listar todos os servi\u00E7os");
            console.log("3 - Visualizar servi\u00E7o");
            console.log("4 - Atualizar servi\u00E7o");
            console.log("5 - Deletar servi\u00E7o");
            console.log("\n0 - Voltar");
            console.log("___________________________________________________");
            var opcao = this_1.entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
            console.log("___________________________________________________");
            switch (opcao) {
                case 1:
                    var cadastroServico = new cadastroServico_1.default(this_1.empresa.getServicos);
                    cadastroServico.cadastrar();
                    break;
                case 2:
                    var listagemServico = new listagemServico_1.default(this_1.empresa.getServicos);
                    listagemServico.listar();
                    break;
                case 3:
                    var nome_1 = this_1.entrada.receberTexto("Por favor informe o nome do servi\u00E7o: ");
                    var s = this_1.empresa.getServicos.find(function (produt) { return produt.nome == nome_1; });
                    if (s != undefined) {
                        s.visualizar();
                    }
                    else {
                        console.log("Servi\u00E7o n\u00E3o encontrado!");
                    }
                    break;
                case 4:
                    var nomeServico_1 = this_1.entrada.receberTexto("Por favor informe o nome do servi\u00E7o: ");
                    var servico = this_1.empresa.getServicos.find(function (servic) { return servic.nome == nomeServico_1; });
                    if (servico != undefined) {
                        var atualizarServicos = new updateServico_1.default(servico, this_1.empresa);
                        atualizarServicos.atualizar();
                    }
                    else {
                        console.log("Servi\u00E7o n\u00E3o encontrado!");
                    }
                    break;
                case 5:
                    var nomeServicoDelete_1 = this_1.entrada.receberTexto("Por favor informe o nome do servi\u00E7o: ");
                    var servicoDelete = this_1.empresa.getServicos.find(function (servic) { return servic.nome == nomeServicoDelete_1; });
                    if (servicoDelete != undefined) {
                        var indexServico = this_1.empresa.getServicos.indexOf(servicoDelete);
                        this_1.empresa.getServicos.splice(indexServico, 1);
                        console.log("\nServi\u00E7o exclu\u00EDdo com sucesso!\n");
                    }
                    else {
                        console.log("Servi\u00E7o n\u00E3o encontrado!");
                    }
                    break;
                case 0:
                    this_1.execucao = false;
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
    return OpcoesServico;
}());
exports.default = OpcoesServico;
