import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom'
import TextinputPage from './page/Textinput-page';


function App() {
  return (
    <div className="App">
      		<HashRouter>
			<Switch> 
        <Route exact path='/' component={TextinputPage} />
      </Switch>
				</HashRouter>
    </div>
  );
}

export default App;
