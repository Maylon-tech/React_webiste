
import './App.css'
import Header from './components/header/Header'
import HomePage from './components/pageContent/HomePage'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header>
        
      </Header>

    <Routes>
      <Route path="/" element={ <HomePage /> } />
    </Routes>

    </Router>
  );
}

export default App;
