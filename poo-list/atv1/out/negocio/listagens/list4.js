"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var historicoConsumo_1 = __importDefault(require("../../modelo/historicoConsumo"));
var List4 = /** @class */ (function () {
    function List4(empresa) {
        this.empresa = empresa;
    }
    List4.prototype.listar = function () {
        // Listagem dos produtos e serviços mais consumidos por gênero
        var consumosMasculinosBruto = [];
        var consumosMasculinosFinal = [];
        var consumosFemininosBruto = [];
        var consumosFemininosFinal = [];
        var consumosOutrosBruto = [];
        var consumosOutrosFinal = [];
        this.empresa.getClientes.forEach(function (item) {
            if (item.sexo == "M") {
                item.getHistoricoConsumo.forEach(function (c) {
                    var h = new historicoConsumo_1.default(c.tipo, c.nome, c.quantidade, c.valorPago);
                    consumosMasculinosBruto.push(h);
                });
            }
        });
        this.empresa.getClientes.forEach(function (item) {
            if (item.sexo == "F") {
                item.getHistoricoConsumo.forEach(function (c) {
                    var h = new historicoConsumo_1.default(c.tipo, c.nome, c.quantidade, c.valorPago);
                    consumosFemininosBruto.push(h);
                });
            }
        });
        this.empresa.getClientes.forEach(function (item) {
            if (item.sexo == "O") {
                item.getHistoricoConsumo.forEach(function (c) {
                    var h = new historicoConsumo_1.default(c.tipo, c.nome, c.quantidade, c.valorPago);
                    consumosOutrosBruto.push(h);
                });
            }
        });
        consumosMasculinosBruto.forEach(function (item) {
            var consumido = consumosMasculinosFinal.find(function (t) { return t.nome == item.nome; });
            if (consumido == undefined) {
                consumosMasculinosFinal.push(item);
            }
            else {
                consumido.quantidade += item.quantidade;
            }
        });
        consumosFemininosBruto.forEach(function (item) {
            var consumido = consumosFemininosFinal.find(function (t) { return t.nome == item.nome; });
            if (consumido == undefined) {
                consumosFemininosFinal.push(item);
            }
            else {
                consumido.quantidade += item.quantidade;
            }
        });
        consumosOutrosBruto.forEach(function (item) {
            var consumido = consumosOutrosFinal.find(function (t) { return t.nome == item.nome; });
            if (consumido == undefined) {
                consumosOutrosFinal.push(item);
            }
            else {
                consumido.quantidade += item.quantidade;
            }
        });
        console.log("_____________________________________________");
        console.log("Produtos e servi\u00E7os mais consumidos (Masculino): ");
        var posicao = 1;
        console.log("___________________________");
        consumosMasculinosFinal.sort(function compare(a, b) {
            var quantidadeA = a.quantidade;
            var quantidadeB = b.quantidade;
            if (quantidadeB > quantidadeA)
                return -1;
            if (quantidadeA > quantidadeB)
                return 1;
            return 0;
        }).reverse().forEach(function (item) {
            console.log("".concat(posicao, "\u00BA ").concat(item.nome, " (").concat(item.tipo, "), quantidade: ").concat(item.quantidade));
            posicao++;
        });
        console.log("\nProdutos e servi\u00E7os mais consumidos (Feminino): ");
        posicao = 1;
        console.log("___________________________");
        consumosFemininosFinal.sort(function compare(a, b) {
            var quantidadeA = a.quantidade;
            var quantidadeB = b.quantidade;
            if (quantidadeB > quantidadeA)
                return -1;
            if (quantidadeA > quantidadeB)
                return 1;
            return 0;
        }).reverse().forEach(function (item) {
            console.log("".concat(posicao, "\u00BA ").concat(item.nome, " (").concat(item.tipo, "), quantidade: ").concat(item.quantidade));
            posicao++;
        });
        console.log("\nProdutos e servi\u00E7os mais consumidos pelo g\u00EAnero Outros: ");
        posicao = 1;
        console.log("___________________________");
        consumosOutrosFinal.sort(function compare(a, b) {
            var quantidadeA = a.quantidade;
            var quantidadeB = b.quantidade;
            if (quantidadeB > quantidadeA)
                return -1;
            if (quantidadeA > quantidadeB)
                return 1;
            return 0;
        }).reverse().forEach(function (item) {
            console.log("".concat(posicao, "\u00BA ").concat(item.nome, " (").concat(item.tipo, "), quantidade: ").concat(item.quantidade));
            posicao++;
        });
    };
    return List4;
}());
exports.default = List4;
