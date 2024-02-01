import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home.js';
import SignInSide from './components/home/SignInSide.js';

function App() {
  return (
    <div style={{ margin: '1vh' }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/signin"
            element={<SignInSide />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
