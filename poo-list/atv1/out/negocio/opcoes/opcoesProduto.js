"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../../io/entrada"));
var listagemProduto_1 = __importDefault(require("../listagens/listagemProduto"));
var cadastroProduto_1 = __importDefault(require("../produto/cadastroProduto"));
var updateProduto_1 = __importDefault(require("../produto/updateProduto"));
var OpcoesProduto = /** @class */ (function () {
    function OpcoesProduto(empresa) {
        this.empresa = empresa;
        this.entrada = new entrada_1.default();
        this.execucao = true;
    }
    OpcoesProduto.prototype.runOpcoes = function () {
        var _loop_1 = function () {
            console.log("______________________________________________________");
            console.log("Op\u00E7\u00F5es de cadastro de produtos");
            console.log("\n1 - Cadastrar produto");
            console.log("2 - Listar todos os produtos");
            console.log("3 - Visualizar produto");
            console.log("4 - Atualizar produto");
            console.log("5 - Deletar produto");
            console.log("\n0 - Voltar");
            console.log("______________________________________________________");
            var opcao = this_1.entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
            console.log("______________________________________________________");
            switch (opcao) {
                case 1:
                    var cadastroProduto = new cadastroProduto_1.default(this_1.empresa.getProdutos);
                    cadastroProduto.cadastrar();
                    break;
                case 2:
                    var listagemProduto = new listagemProduto_1.default(this_1.empresa.getProdutos);
                    listagemProduto.listar();
                    break;
                case 3:
                    var nome_1 = this_1.entrada.receberTexto("Por favor informe o nome do produto: ");
                    var p = this_1.empresa.getProdutos.find(function (produt) { return produt.nome == nome_1; });
                    if (p != undefined) {
                        p.visualizar();
                    }
                    else {
                        console.log("Produto n\u00E3o encontrado!");
                    }
                    break;
                case 4:
                    var nomeProduto_1 = this_1.entrada.receberTexto("Por favor informe o nome do produto: ");
                    var produto = this_1.empresa.getProdutos.find(function (produt) { return produt.nome == nomeProduto_1; });
                    if (produto != undefined) {
                        var atualizarProduto = new updateProduto_1.default(produto, this_1.empresa);
                        atualizarProduto.atualizar();
                    }
                    else {
                        console.log("Produto n\u00E3o encontrado!");
                    }
                    break;
                case 5:
                    var nomeProdutoDelete_1 = this_1.entrada.receberTexto("Por favor informe o nome do produto: ");
                    var protudoDelete = this_1.empresa.getProdutos.find(function (produt) { return produt.nome == nomeProdutoDelete_1; });
                    if (protudoDelete != undefined) {
                        var indexProduto = this_1.empresa.getProdutos.indexOf(protudoDelete);
                        this_1.empresa.getProdutos.splice(indexProduto, 1);
                        console.log("\nProduto exclu\u00EDdo com sucesso!");
                    }
                    else {
                        console.log("Produto n\u00E3o encontrado!");
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
    return OpcoesProduto;
}());
exports.default = OpcoesProduto;
