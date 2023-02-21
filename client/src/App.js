
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/home';
import Register from './pages/register';
import SignUp from './pages/signup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
