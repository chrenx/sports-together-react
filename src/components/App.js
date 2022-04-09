import Navbar from './Shared/Navbar';
import AboutUs from './Intro/AboutUs';
import MainPage from './Main/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={ <AboutUs /> } />
            <Route exact path='/main' element={ <MainPage /> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
