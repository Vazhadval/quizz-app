import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main } from './components/main-screen/main';
import { Settings } from './components/settings-screen/settings';
import { Navbar } from './components/navbar/navbar';
import { ContextWrapper } from './appContext';
import { Create } from './components/create-screen/create';

function App() {
  return (
    <ContextWrapper>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Main />
          </Route>
          <Route path='/settings'>
            <Settings />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
        </Switch>

      </BrowserRouter>
    </ContextWrapper>

  );
}

export default App;
