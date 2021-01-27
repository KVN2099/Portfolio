import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './Components/sidebar';
import MainContent from './Components/mainContent';

function App() {
  return (
    <Router>
      <Route path="/" component={Sidebar} />
      <Route path="/" component={MainContent} />
    </Router>
  );
}

export default App;
