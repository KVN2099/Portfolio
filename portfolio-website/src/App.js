import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './Components/sidebar';
import Home from './Components/Home';
import MainContent from './Components/mainContent';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar>
          <Route path="/" component={Home} />
        </Sidebar>
        <MainContent>
        </MainContent>
      </div>
    </Router>
  );
}

export default App;
