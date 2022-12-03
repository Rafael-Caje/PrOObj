"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../io/entrada"));
var empresa_1 = __importDefault(require("../modelo/empresa"));
var listagemDados_1 = __importDefault(require("../negocio/listagens/listagemDados"));
var opcoesCliente_1 = __importDefault(require("../negocio/opcoes/opcoesCliente"));
var opcoesProduto_1 = __importDefault(require("../negocio/opcoes/opcoesProduto"));
var opcoesServico_1 = __importDefault(require("../negocio/opcoes/opcoesServico"));
var vender_1 = __importDefault(require("../negocio/vendas/vender"));
var teste_1 = __importDefault(require("./teste"));
console.log("Cadastro de clientes do Grupo World Beauty");
var empresa = new empresa_1.default();
var exec = true;
var testes = new teste_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
testes.gerarUsuariosTeste();
while (exec) {
    console.log("________________________________________________");
    console.log("Op\u00E7\u00F5es:");
    console.log("\n1 - Clientes");
    console.log("2 - Produtos");
    console.log("3 - Servi\u00E7os");
    console.log("4 - Vender produto/servi\u00E7o");
    console.log("\n5 - Listagens de neg\u00F3cio");
    console.log("\n0 - Sair");
    var entrada = new entrada_1.default();
    console.log("________________________________________________");
    var opcao = entrada.receberNumero("Escolha uma op\u00E7\u00E3o: ");
    switch (opcao) {
        case 1:
            var clientes = new opcoesCliente_1.default(empresa);
            clientes.runOpcoes();
            break;
        case 2:
            var produtos = new opcoesProduto_1.default(empresa);
            produtos.runOpcoes();
            break;
        case 3:
            var servicos = new opcoesServico_1.default(empresa);
            servicos.runOpcoes();
            break;
        case 5:
            var listarDados = new listagemDados_1.default(empresa);
            listarDados.listar();
            break;
        case 4:
            var vender = new vender_1.default(empresa);
            vender.runOpcoes();
            break;
        case 0:
            exec = false;
            console.log("At\u00E9 mais");
            break;
        default:
            console.log("Inv\u00E1lido");
    }
}
