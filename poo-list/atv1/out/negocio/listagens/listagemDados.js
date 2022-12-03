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
var listagem_1 = __importDefault(require("../../modelo/listagem"));
var entrada_1 = __importDefault(require("../../io/entrada"));
var list1_1 = __importDefault(require("./list1"));
var list4_1 = __importDefault(require("./list4"));
var ListagemDados = /** @class */ (function (_super) {
    __extends(ListagemDados, _super);
    function ListagemDados(empresa) {
        var _this = _super.call(this) || this;
        _this.empresa = empresa;
        _this.entrada = new entrada_1.default();
        _this.execucao = true;
        return _this;
    }
    ListagemDados.prototype.listar = function () {
        var _loop_1 = function () {
            console.log("____________________________________");
            console.log("Escolha uma op\u00E7\u00E3o de dado para visualizar:");
            console.log("____________________________________");
            console.log("\n1 - Listar 10 clientes que mais consumiram produtos e servi\u00E7os em quantidade");
            console.log("2 - Listagem de todos os clientes por g\u00EAnero");
            console.log("3 - Listagem geral de produtos e servi\u00E7os mais consumidos");
            console.log("4 - Listagem dos produtos e servi\u00E7os mais consumidos por g\u00EAnero");
            console.log("5 - Listagem dos 10 clientes que menos consumiram produtos e servi\u00E7os");
            console.log("6 - Listagem dos 5 clientes que mais consumiram em valor");
            console.log("\n0 - Voltar");
            console.log("____________________________________");
            var opcao = this_1.entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
            switch (opcao) {
                case 1: // Listar 10 clientes que mais consumiram produtos e serviços em quantidade
                    console.log("____________________________________");
                    console.log("Listagem de 10 clientes que mais consumiram produtos e servi\u00E7os:");
                    console.log("____________________________________");
                    new list1_1.default(this_1.empresa).listar();
                    break;
                case 2: // Listagem de todos os clientes por gênero
                    console.log("____________________________________");
                    console.log("Listagem de clientes por g\u00EAnero:");
                    console.log("____________________________________");
                    console.log("\nSexo masculino: ");
                    console.log("____________________________________");
                    this_1.empresa.getClientes.forEach(function (item) {
                        if (item.sexo == "M") {
                            console.log(". ".concat(item.nome));
                        }
                    });
                    console.log(" ");
                    console.log("Sexo feminino:");
                    console.log("____________________________________");
                    this_1.empresa.getClientes.forEach(function (item) {
                        if (item.sexo == "F") {
                            console.log(". ".concat(item.nome));
                        }
                    });
                    console.log(" ");
                    console.log("Outro(s) sexo(s):");
                    console.log("____________________________________");
                    this_1.empresa.getClientes.forEach(function (item) {
                        if (item.sexo == "O") {
                            console.log(". ".concat(item.nome));
                        }
                    });
                    break;
                case 3: // Listagem geral de produtos e serviços mais consumidos
                    console.log("____________________________________");
                    console.log("\nProdutos mais consumidos: ");
                    console.log("____________________________________");
                    var posicao_1 = 1;
                    this_1.empresa.getProdutos.sort(function compare(a, b) {
                        if (b.getQuantidadeVendida > a.getQuantidadeVendida)
                            return -1;
                        if (a.getQuantidadeVendida > b.getQuantidadeVendida)
                            return 1;
                        return 0;
                    }).reverse().forEach(function (item) {
                        console.log("".concat(posicao_1, "\u00BA Produto: ").concat(item.nome, ", quantidade: ").concat(item.getQuantidadeVendida));
                        posicao_1++;
                    });
                    posicao_1 = 1;
                    console.log("\nServi\u00E7os mais consumidos: ");
                    console.log("____________________________________");
                    this_1.empresa.getServicos.sort(function compare(a, b) {
                        if (b.getQuantidadeVendida > a.getQuantidadeVendida)
                            return -1;
                        if (a.getQuantidadeVendida > b.getQuantidadeVendida)
                            return 1;
                        return 0;
                    }).reverse().forEach(function (item) {
                        console.log("".concat(posicao_1, "\u00BA Servi\u00E7o: ").concat(item.nome, ", quantidade: ").concat(item.getQuantidadeVendida));
                        posicao_1++;
                    });
                    break;
                case 4: // Listagem dos produtos e serviços mais consumidos por gênero
                    new list4_1.default(this_1.empresa).listar();
                    break;
                case 5: // Listagem dos 10 clientes que menos consumiram produtos e serviços
                    console.log("____________________________________");
                    console.log("Listagem de 10 clientes que menos consumiram produtos e servi\u00E7os:");
                    console.log("____________________________________");
                    var posicaoMenos_1 = 1;
                    var clientesMenos = this_1.empresa.getClientes;
                    clientesMenos.sort(function compare(a, b) {
                        if ((b.quantidadeServicos + b.quantidadeProdutos) > (a.quantidadeProdutos + a.quantidadeServicos)) {
                            return -1;
                        }
                        if ((a.quantidadeProdutos + a.quantidadeServicos) > (b.quantidadeProdutos + b.quantidadeServicos)) {
                            return 1;
                        }
                        return 0;
                    });
                    clientesMenos.forEach(function (item) {
                        if (posicaoMenos_1 <= 10) {
                            var quantidadeConsumida = item.quantidadeProdutos + item.quantidadeServicos;
                            console.log("".concat(posicaoMenos_1, "\u00BA Cliente: ").concat(item.nome, " , Quantidade: ").concat(quantidadeConsumida));
                        }
                        posicaoMenos_1++;
                    });
                    break;
                case 6: // Listagem dos 5 clientes que mais consumiram em valor
                    console.log("____________________________________");
                    console.log("Listagem de 5 clientes que mais consumiram em valor:");
                    console.log("____________________________________");
                    var posicaoValor_1 = 1;
                    var clientesValor = this_1.empresa.getClientes;
                    clientesValor.sort(function compare(a, b) {
                        var aSoma = 0;
                        a.getHistoricoConsumo.forEach(function (item) {
                            aSoma += item.valorPago;
                        });
                        var bSoma = 0;
                        b.getHistoricoConsumo.forEach(function (item) {
                            bSoma += item.valorPago;
                        });
                        if (bSoma > aSoma) {
                            return -1;
                        }
                        if (aSoma > bSoma) {
                            return 1;
                        }
                        return 0;
                    }).reverse().forEach(function (item) {
                        if (posicaoValor_1 <= 5) {
                            var somaItem_1 = 0;
                            item.getHistoricoConsumo.forEach(function (it) {
                                somaItem_1 += it.valorPago;
                            });
                            console.log("".concat(posicaoValor_1, "\u00BA Cliente: ").concat(item.nome, " , Valor: ").concat(somaItem_1));
                        }
                        posicaoValor_1++;
                    });
                    break;
                case 0: // outro
                    this_1.execucao = false;
                    console.log("____________________________________");
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
    ListagemDados.prototype.produtoExists = function (nomeProduto) {
        var produto = this.empresa.getProdutos.find(function (prod) { return prod.nome == nomeProduto; });
        return produto != undefined;
    };
    ListagemDados.prototype.getProduto = function (nomeProduto) {
        var produto = this.empresa.getProdutos.find(function (prod) { return prod.nome == nomeProduto; });
        return produto;
    };
    return ListagemDados;
}(listagem_1.default));
exports.default = ListagemDados;
