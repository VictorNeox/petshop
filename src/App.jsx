import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Pagina404 from './paginas/Pagina404';
import Post from './paginas/Post';

import Cabecalho from './components/Cabecalho';
import Categoria from './paginas/Categoria';

function App() {

  return (
   <Router>
     <Cabecalho />
     <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/sobre' component={Sobre}/>
      <Route path='/posts/:id' component={Post}/>
      <Route path='/categoria/:id' component={Categoria}/>
      <Route component={Pagina404}/>
     </Switch>
   </Router>
  )
}

export default App
