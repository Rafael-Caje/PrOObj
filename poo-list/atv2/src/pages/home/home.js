import React from 'react';
import BotaoHome from "./botaoHome";
import "./home.css"

const Home = () => { 
    return (
        <div className=" form">
            <div id="imagem2">
                <img src={require('./Imagem2.png')} alt='logo' width="85" height = "80"/>
            </div>
            <div className="tituloHome">Home</div>
            
            <form action="#">
                <div className="Home">
                    <BotaoHome home="Cliente">CLIENTES</BotaoHome>
                    <BotaoHome home="Servico">SERVIÇOS</BotaoHome>
                    <BotaoHome home="Produto">PRODUTOS</BotaoHome>
                    <BotaoHome home="Consulta">CONSULTAS</BotaoHome>
                </div>
            </form>

        </div>
    );
}

export default Home;