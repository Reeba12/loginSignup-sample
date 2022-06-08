import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Login from './Screens/Login';
import Signup from './Screens/SignUp';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
     <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path='/' element={<Signup />} />
     
    </Routes>
    </>
  );
}

export default App;
