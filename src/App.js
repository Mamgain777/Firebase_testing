import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Phone from './components/Phone';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route exact path="/" element={<Signup/>}/>
      <Route exact path="/phone" element={<Phone/>}/>
    </Routes>
    {/* <Signup/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
