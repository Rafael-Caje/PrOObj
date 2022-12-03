"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = __importDefault(require("../modelo/cliente"));
var cpf_1 = __importDefault(require("../modelo/cpf"));
var produto_1 = __importDefault(require("../modelo/produto"));
var rg_1 = __importDefault(require("../modelo/rg"));
var servico_1 = __importDefault(require("../modelo/servico"));
var telefone_1 = __importDefault(require("../modelo/telefone"));
var Testes = /** @class */ (function () {
    function Testes(clientes, produtos, servicos) {
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
    }
    Testes.prototype.gerarUsuariosTeste = function () {
        // Clientes
        this.clientes.push(new cliente_1.default('Tiago', 'Tiago', new cpf_1.default('87233765626', new Date()), new rg_1.default('322581965', new Date()), 'M', new telefone_1.default('91', '997350162')));
        this.clientes.push(new cliente_1.default('Andreia', 'Andreia', new cpf_1.default('66158113247', new Date()), new rg_1.default('195674492', new Date()), 'F', new telefone_1.default('86', '985190294')));
        this.clientes.push(new cliente_1.default('Sarah', 'Sarah', new cpf_1.default('77513597901', new Date()), new rg_1.default('117409170', new Date()), 'F', new telefone_1.default('91', '927583467')));
        this.clientes.push(new cliente_1.default('Elaine', 'Elaine', new cpf_1.default('52179724918', new Date()), new rg_1.default('120991524', new Date()), 'F', new telefone_1.default('91', '997350162')));
        this.clientes.push(new cliente_1.default('Fatima', 'Fatima', new cpf_1.default('12154974155', new Date()), new rg_1.default('562241691', new Date()), 'F', new telefone_1.default('41', '984758385')));
        this.clientes.push(new cliente_1.default('Bruno', 'Bruno', new cpf_1.default('77753398024', new Date()), new rg_1.default('496612062', new Date()), 'M', new telefone_1.default('11', '983957194')));
        this.clientes.push(new cliente_1.default('Nina', 'Nina', new cpf_1.default('33203424010', new Date()), new rg_1.default('488688279', new Date()), 'F', new telefone_1.default('11', '985462856')));
        this.clientes.push(new cliente_1.default('Catarina', 'Catarina', new cpf_1.default('23572520061', new Date()), new rg_1.default('492910285', new Date()), 'O', new telefone_1.default('84', '984148597')));
        this.clientes.push(new cliente_1.default('Fernando', 'Fernando', new cpf_1.default('81161508040', new Date()), new rg_1.default('201233538', new Date()), 'M', new telefone_1.default('95', '998505825')));
        this.clientes.push(new cliente_1.default('Fernanda', 'Fernanda', new cpf_1.default('82191377033', new Date()), new rg_1.default('351163311', new Date()), 'O', new telefone_1.default('96', '96989531259')));
        this.clientes.push(new cliente_1.default('Maria', 'Maria', new cpf_1.default('52376507081', new Date()), new rg_1.default('274090193', new Date()), 'F', new telefone_1.default('51', '986280540')));
        this.clientes.push(new cliente_1.default('Beatriz', 'Beatriz', new cpf_1.default('11836899009', new Date()), new rg_1.default('323565815', new Date()), 'F', new telefone_1.default('69', '982689441')));
        this.clientes.push(new cliente_1.default('Daiane', 'Daiane', new cpf_1.default('33851696077', new Date()), new rg_1.default('210919590', new Date()), 'F', new telefone_1.default('98', '981102471')));
        this.clientes.push(new cliente_1.default('Mario', 'Mario', new cpf_1.default('20294030085', new Date()), new rg_1.default('239764079', new Date()), 'O', new telefone_1.default('45', '994179996')));
        this.clientes.push(new cliente_1.default('Marcos', 'Marcos', new cpf_1.default('39387663019', new Date()), new rg_1.default('410483606', new Date()), 'M', new telefone_1.default('63', '999437784')));
        this.clientes.push(new cliente_1.default('Rodrigo', 'Rodrigo', new cpf_1.default('01671415035', new Date()), new rg_1.default('159574870', new Date()), 'M', new telefone_1.default('63', '984565215')));
        this.clientes.push(new cliente_1.default('Elias', 'Elias', new cpf_1.default('28641837060', new Date()), new rg_1.default('242908974', new Date()), 'M', new telefone_1.default('67', '984755496')));
        this.clientes.push(new cliente_1.default('Jose', 'Jose', new cpf_1.default('26494158005', new Date()), new rg_1.default('297085840', new Date()), 'M', new telefone_1.default('61', '993276454')));
        this.clientes.push(new cliente_1.default('Joao', 'Joao', new cpf_1.default('96200240019', new Date()), new rg_1.default('286902886', new Date()), 'M', new telefone_1.default('98', '8989705422')));
        this.clientes.push(new cliente_1.default('Gabriel', 'Gabriel', new cpf_1.default('66847450096', new Date()), new rg_1.default('438990493', new Date()), 'M', new telefone_1.default('95', '992656998')));
        this.clientes.push(new cliente_1.default('Lorenzo', 'Lorenzo', new cpf_1.default('10970330073', new Date()), new rg_1.default('459248431', new Date()), 'M', new telefone_1.default('84', '987072367')));
        this.clientes.push(new cliente_1.default('Isaque', 'Isaque', new cpf_1.default('77607516050', new Date()), new rg_1.default('500704880', new Date()), 'M', new telefone_1.default('95', '989765489')));
        this.clientes.push(new cliente_1.default('Otavio', 'Otavio', new cpf_1.default('17064086093', new Date()), new rg_1.default('133697502', new Date()), 'M', new telefone_1.default('92', '993909673')));
        this.clientes.push(new cliente_1.default('Theo', 'Theo', new cpf_1.default('17325679050', new Date()), new rg_1.default('183423410', new Date()), 'O', new telefone_1.default('82', '997775330')));
        this.clientes.push(new cliente_1.default('Thales', 'Thales', new cpf_1.default('22586438051', new Date()), new rg_1.default('481418350', new Date()), 'M', new telefone_1.default('75', '982780314')));
        this.clientes.push(new cliente_1.default('Gabriela', 'Gabriela', new cpf_1.default('29971566028', new Date()), new rg_1.default('327253290', new Date()), 'F', new telefone_1.default('82', '986477097')));
        this.clientes.push(new cliente_1.default('Victoria', 'Victoria', new cpf_1.default('67342794058', new Date()), new rg_1.default('398410513', new Date()), 'F', new telefone_1.default('95', '989765489')));
        this.clientes.push(new cliente_1.default('Renata', 'Renata', new cpf_1.default('78111707010', new Date()), new rg_1.default('414311668', new Date()), 'F', new telefone_1.default('62', '987557786')));
        this.clientes.push(new cliente_1.default('Alana', 'Alana', new cpf_1.default('91882130057', new Date()), new rg_1.default('459779096', new Date()), 'F', new telefone_1.default('27', '986148484')));
        this.clientes.push(new cliente_1.default('Aline', 'Aline', new cpf_1.default('12448918007', new Date()), new rg_1.default('213479588', new Date()), 'F', new telefone_1.default('79', '993196411')));
        //Produtos
        this.produtos.push(new produto_1.default('Esmalte Preto', 5));
        this.produtos.push(new produto_1.default('Esmalte Branco', 4));
        this.produtos.push(new produto_1.default('Esmalte Rosa', 4));
        this.produtos.push(new produto_1.default('Shampoo', 15));
        this.produtos.push(new produto_1.default('Condicionador', 17));
        this.produtos.push(new produto_1.default('Creme Hidratante', 20));
        this.produtos.push(new produto_1.default('Creme Pentear', 10));
        this.produtos.push(new produto_1.default('Ativador Cachos', 13));
        this.produtos.push(new produto_1.default('Shampoo Barba', 25));
        this.produtos.push(new produto_1.default('Agua Oxigenada', 5));
        this.produtos.push(new produto_1.default('Tinta Cabelo', 20));
        this.produtos.push(new produto_1.default('Pente', 7));
        this.produtos.push(new produto_1.default('Peruca', 80));
        this.produtos.push(new produto_1.default('Escova', 35));
        this.produtos.push(new produto_1.default('Tesoura', 15));
        this.produtos.push(new produto_1.default('Agua', 2));
        this.produtos.push(new produto_1.default('Cafe', 3));
        this.produtos.push(new produto_1.default('Bolacha', 3));
        this.produtos.push(new produto_1.default('Fruta', 1));
        this.produtos.push(new produto_1.default('Agua com gas', 5));
        //Serviços
        this.servicos.push(new servico_1.default('Corte de cabelo masculino', 25));
        this.servicos.push(new servico_1.default('Corte de cabelo feminino', 30));
        this.servicos.push(new servico_1.default('Tintura', 50));
        this.servicos.push(new servico_1.default('Luzes', 80));
        this.servicos.push(new servico_1.default('Progressiva', 100));
        this.servicos.push(new servico_1.default('Manicure', 25));
        this.servicos.push(new servico_1.default('Pedicure', 30));
    };
    return Testes;
}());
exports.default = Testes;
