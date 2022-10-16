import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ComponenteParametros from './Componentes/ComponenteParametros/ComponenteParametros';
import Home from './Componentes/Home/Home';

const App = () => {

  return(
    <BrowserRouter>
      <div class="position-absolute top-50 start-50 translate-middle">
        <Switch>
          <Route path="/home" render={() => <Home />} />
          <Route path="/:palabra" exact render={(routeProps) => <ComponenteParametros {...routeProps} /> } />
          <Route path="/:palabra/:color/:bg" exact render={(routeProps) => <ComponenteParametros {...routeProps} />} />
        </Switch>
      </div>
    </BrowserRouter>
  )

}



export default App;
