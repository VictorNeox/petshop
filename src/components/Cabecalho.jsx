import React from 'react';

import { Link } from 'react-router-dom';

import Imagem from '../assets/img/doguito.svg';
import '../assets/css/componentes/cabecalho.css';

const Cabecalho = () => {
    return (
        <header className="cabecalho container">
            <div className="menu-hamburger">
                <span className="menu-hamburger__icone"></span>
            </div>
            <div className="cabecalho-contaienr">
                <Link to="/" className="flex flex--centro">
                    <img src={Imagem} alt="Logo Doguito" className="cabecalho__logo"/>
                    <h1 className="cabecalho__titulo">PetShop</h1>
                </Link>
            </div>

            <nav className="menu-cabecalho">
                <ul className="menu-itens">
                    <li><a className="menu-item menu-item--entrar" href="#">Entrar</a></li>
                    <li><Link className="menu-item" href="#">Produtos</Link></li>
                    <li><Link className="menu-item" href="/">Blog</Link></li>
                    <li><Link className="menu-item" to="/sobre">Sobre</Link></li>
                </ul>
            </nav>
            <div className="menu-cabecalho-background">

            </div>
        </header>
    );
}

export default Cabecalho;