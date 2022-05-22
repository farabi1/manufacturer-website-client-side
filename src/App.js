import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <h1>Twelve Assignment Manufacturer</h1>
      <button class="btn btn-primary">Button</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
