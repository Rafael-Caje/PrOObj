"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente = /** @class */ (function () {
    function Cliente(nome, nomeSocial, cpf, rg, sexo, telefone) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.rg = rg;
        this.dataCadastro = new Date();
        this.telefone = telefone;
        this.historicoConsumo = [];
        this.sexo = sexo;
        this.quantidadeProdutos = 0;
        this.quantidadeServicos = 0;
    }
    Object.defineProperty(Cliente.prototype, "getCpf", {
        get: function () {
            return this.cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getRg", {
        get: function () {
            return this.rg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getDataCadastro", {
        get: function () {
            return this.dataCadastro;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getTelefone", {
        get: function () {
            return this.telefone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getSexo", {
        get: function () {
            return this.sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getHistoricoConsumo", {
        get: function () {
            return this.historicoConsumo;
        },
        enumerable: false,
        configurable: true
    });
    Cliente.prototype.visualizar = function () {
        console.log("____________________________________");
        console.log("\nInforma\u00E7\u00F5es do cliente ".concat(this.nome, ":"));
        console.log("____________________________________");
        console.log("Nome social: ".concat(this.nomeSocial));
        console.log("Sexo: ".concat(this.sexo));
        console.log("CPF, data emiss\u00E3o: ".concat(this.getCpf.getValor, " - ").concat(this.getCpf.getDataEmissao.toLocaleDateString()));
        console.log("RG, data emiss\u00E3o: ".concat(this.getRg.getValor, " - ").concat(this.getRg.getDataEmissao.toLocaleDateString()));
        console.log("Telefone: (".concat(this.getTelefone.getDdd, ") ").concat(this.getTelefone.getNumero));
        var printar = [];
        if (this.historicoConsumo.length > 0) {
            var totalGasto_1 = 0;
            this.historicoConsumo.forEach(function (element) {
                if (element.tipo == "produto") {
                    totalGasto_1 += element.valorPago;
                    printar.push(" . ".concat(element.quantidade, "x ").concat(element.nome, ", valor: ").concat(element.valorPago, " - ").concat(element.dataConsumo.toLocaleDateString()));
                }
            });
            if (printar.length > 0) {
                console.log("____________________________________");
                console.log("Produtos consumidos: ");
                printar.forEach(function (item) { return console.log(item); });
                console.log("\nTotal gasto em produtos: ".concat(totalGasto_1));
            }
            else {
                console.log("Nenhum produto consumido.");
            }
            printar = [];
            totalGasto_1 = 0;
            this.historicoConsumo.forEach(function (element) {
                if (element.tipo == "serviço") {
                    totalGasto_1 += element.valorPago;
                    printar.push(" . ".concat(element.quantidade, "x ").concat(element.nome, ", valor: ").concat(element.valorPago, " - ").concat(element.dataConsumo.toLocaleDateString()));
                }
            });
            if (printar.length > 0) {
                console.log("____________________________________");
                console.log("Servi\u00E7os consumidos: ");
                printar.forEach(function (item) { return console.log(item); });
                console.log("\nTotal gasto em produtos: ".concat(totalGasto_1));
            }
            else {
                console.log("____________________________________");
                console.log("Nenhum servi\u00E7o consumido.");
            }
        }
        else {
            console.log("Nenhum consumo registrado.");
        }
    };
    return Cliente;
}());
exports.default = Cliente;
