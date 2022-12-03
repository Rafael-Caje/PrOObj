"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../../io/entrada"));
var historicoConsumo_1 = __importDefault(require("../../modelo/historicoConsumo"));
var verificacaoNumero_1 = __importDefault(require("../verificacoes/verificacaoNumero"));
var Vender = /** @class */ (function () {
    function Vender(empresa) {
        this.empresa = empresa;
        this.entrada = new entrada_1.default();
        this.execucao = true;
        this.verificador = new verificacaoNumero_1.default();
    }
    Vender.prototype.runOpcoes = function () {
        while (this.execucao) {
            console.log("___________________________________________________");
            console.log("Op\u00E7\u00F5es de vendas");
            console.log("\n1 - Vender produto");
            console.log("2 - Vender servi\u00E7o");
            console.log("\n0 - Voltar");
            console.log("___________________________________________________");
            var opcao = this.entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
            console.log("___________________________________________________");
            var receberNomeCliente = void 0;
            switch (opcao) {
                case 1:
                    receberNomeCliente = this.entrada.receberTexto("Nome do cliente: ");
                    var clienteProduto = this.getCliente(receberNomeCliente);
                    if (clienteProduto == undefined) {
                        console.log("\nCliente n\u00E3o encontrado!");
                        break;
                    }
                    var receberNomeProduto = this.entrada.receberTexto("Nome do produto: ");
                    var produto = this.getProduto(receberNomeProduto);
                    if (produto == undefined) {
                        console.log("\nProduto n\u00E3o encontrado!");
                        break;
                    }
                    var quantidadeProdutos = this.entrada.receberTexto("Quantidade: ");
                    while (this.verificador.verificar(quantidadeProdutos) || quantidadeProdutos == " " || new Number(quantidadeProdutos).valueOf() <= 0) {
                        quantidadeProdutos = this.entrada.receberTexto("Quantidade: ");
                    }
                    var quantidadeProdutosN = new Number(quantidadeProdutos).valueOf();
                    var newProdutoConsumido = new historicoConsumo_1.default("produto", produto.nome, quantidadeProdutosN, (quantidadeProdutosN * produto.preco));
                    clienteProduto.getHistoricoConsumo.push(newProdutoConsumido);
                    console.log("\nVenda realizada com sucesso!");
                    produto.setQuantidadeVendida = produto.getQuantidadeVendida + quantidadeProdutosN;
                    clienteProduto.quantidadeProdutos += quantidadeProdutosN;
                    this.execucao = false;
                    break;
                case 2:
                    receberNomeCliente = this.entrada.receberTexto("Nome do cliente: ");
                    var clienteServico = this.getCliente(receberNomeCliente);
                    if (clienteServico == undefined) {
                        console.log("\nCliente n\u00E3o encontrado!");
                        break;
                    }
                    var receberNomeServico = this.entrada.receberTexto("Nome do servi\u00E7o: ");
                    var servico = this.getServico(receberNomeServico);
                    if (servico == undefined) {
                        console.log("\nServi\u00E7o n\u00E3o encontrado!");
                        break;
                    }
                    var quantidadeServicos = this.entrada.receberTexto("Quantidade: ");
                    while (this.verificador.verificar(quantidadeServicos) || quantidadeServicos == " " || new Number(quantidadeServicos).valueOf() <= 0) {
                        quantidadeServicos = this.entrada.receberTexto("Quantidade: ");
                    }
                    var quantidadeServicosN = new Number(quantidadeServicos).valueOf();
                    var newServicoConsumido = new historicoConsumo_1.default("serviço", servico.nome, quantidadeServicosN, (quantidadeServicosN * servico.preco));
                    clienteServico.getHistoricoConsumo.push(newServicoConsumido);
                    servico.setQuantidadeVendida = servico.getQuantidadeVendida + quantidadeServicosN;
                    clienteServico.quantidadeServicos += quantidadeServicosN;
                    console.log("\nVenda realizada com sucesso!");
                    this.execucao = false;
                    break;
                case 0:
                    this.execucao = false;
                    console.log("\nVoltando ao menu principal");
                    break;
                default:
                    console.log("Inv\u00E1lido");
            }
        }
    };
    Vender.prototype.clienteExists = function (nomeCliente) {
        var cliente = this.empresa.getClientes.find(function (client) { return client.nome == nomeCliente; });
        return cliente != undefined;
    };
    Vender.prototype.getCliente = function (nomeCliente) {
        var cliente = this.empresa.getClientes.find(function (client) { return client.nome == nomeCliente; });
        return cliente;
    };
    Vender.prototype.produtoExists = function (nomeProduto) {
        var produto = this.empresa.getProdutos.find(function (prod) { return prod.nome == nomeProduto; });
        return produto != undefined;
    };
    Vender.prototype.getProduto = function (nomeProduto) {
        var produto = this.empresa.getProdutos.find(function (prod) { return prod.nome == nomeProduto; });
        return produto;
    };
    Vender.prototype.servicoExists = function (nomeServico) {
        var servico = this.empresa.getServicos.find(function (serv) { return serv.nome == nomeServico; });
        return servico != undefined;
    };
    Vender.prototype.getServico = function (nomeServico) {
        var servico = this.empresa.getServicos.find(function (serv) { return serv.nome == nomeServico; });
        return servico;
    };
    return Vender;
}());
exports.default = Vender;
