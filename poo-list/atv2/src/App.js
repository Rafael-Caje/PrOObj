import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import CadastroCli from './pages/cliente/cadastroCliente';
import Cliente from './pages/cliente/cliente';
import ConsultarCli from './pages/cliente/consultarCliente';
import CliFeminino from './pages/consulta/cliFeminino';
import CliMasculino from './pages/consulta/cliMasculino';
import Consulta from './pages/consulta/consulta';
import DezMaisConsumo from './pages/consulta/dezMaisConsumo';
import DezMaisValor from './pages/consulta/dezMaisValor';
import ProdMais from './pages/consulta/prodMais';
import ServMais from './pages/consulta/servMais';
import Home from './pages/home/home';
import CadastroProd from './pages/produto/cadastrarProd';
import ConsultarProduto from './pages/produto/consultarServico';
import Produto from './pages/produto/produto';
import CadastroServ from './pages/servico/cadastroServico';
import ConsultarServico from './pages/servico/consultarServico';
import Servico from './pages/servico/serviço';



function App() {
  return (
    <div className="App">
      <Router>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cliente" element={<Cliente />} />
            <Route exact path="/cadastroCliente" element={<CadastroCli />} />
            <Route exact path="/consultarCliente" element={<ConsultarCli />} />
            <Route exact path="/produto" element={<Produto />} />
            <Route exact path="/cadastrarProduto" element={<CadastroProd />} />
            <Route exact path="/servico" element={<Servico />} />
            <Route exact path="/cadastrarServico" element={<CadastroServ />} />
            <Route exact path="/consultarProduto" element={<ConsultarProduto/>}/>
            <Route exact path="/consultarServico" element={<ConsultarServico/>}/>
            <Route exact path="/consulta" element={<Consulta />} />
            <Route exact path="/clientesFeminino" element={<CliFeminino />} />
            <Route exact path="/clientesMasculino" element={<CliMasculino />} />
            <Route exact path="/dezMaisValor" element={<DezMaisValor />} />
            <Route exact path="/dezMaisConsumo" element={<DezMaisConsumo />} />
            <Route exact path="/produtosMaisConsumido" element={<ProdMais />} />
            <Route exact path="/servicosMaisConsumido" element={<ServMais />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
