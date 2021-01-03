import './App.css';
import {HomePage} from './pages/homepage/homepage.components';
import {Switch, Route} from 'react-router-dom';

const HatsPage = (props) => (
  <div>
    Another Component
    <br/>
    <button onClick={() => props.history.push('/')}>Back</button>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route exact={true} path='/shop/:id' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
