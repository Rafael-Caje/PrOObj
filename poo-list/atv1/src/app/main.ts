import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import ListagemDados from "../negocio/listagens/listagemDados";
import OpcoesCliente from "../negocio/opcoes/opcoesCliente";
import OpcoesProduto from "../negocio/opcoes/opcoesProduto";
import OpcoesServico from "../negocio/opcoes/opcoesServico";
import Vender from "../negocio/vendas/vender";
import Testes from "./teste";

console.log(`Cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let exec = true

let testes = new Testes(
    empresa.getClientes,empresa.getProdutos, empresa.getServicos)
testes.gerarUsuariosTeste()

while (exec) {
    console.log(`________________________________________________`);
    console.log(`Opções:`);
    console.log(`\n1 - Clientes`);
    console.log(`2 - Produtos`);
    console.log(`3 - Serviços`);
    console.log(`4 - Vender produto/serviço`)
    console.log(`\n5 - Listagens de negócio`);
    console.log(`\n0 - Sair`);
     let entrada = new Entrada()

    console.log(`________________________________________________`);

    let opcao = entrada.receberNumero(`Escolha uma opção: `)
    switch (opcao) {
        case 1:
            let clientes = new OpcoesCliente(empresa)
            clientes.runOpcoes()
            break;
        case 2:
            let produtos = new OpcoesProduto(empresa)
            produtos.runOpcoes()
            break;
        case 3:
            let servicos = new OpcoesServico(empresa)
            servicos.runOpcoes()
            break;
        case 5:
            let listarDados = new ListagemDados(empresa);
            listarDados.listar();
            break;
        case 4:
            let vender = new Vender(empresa);
            vender.runOpcoes();
            break;
        case 0:
            exec = false
            console.log(`Finalizado`)
            break;
        default:
            console.log(`Inválido`)
    }
}