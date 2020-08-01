import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './pages/home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Video from "./pages/cadastro/Video";
import CadastroCategoria from "./pages/cadastro/Categoria";


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Index}/>
            <Route path="/cadastro/video" component={Video}/>
            <Route path="/cadastro/categoria" component={CadastroCategoria}/>
            <Route component={() => (<div>Página 404</div>)}/>
        </Switch>
     </BrowserRouter>,
  document.getElementById('root')
);


