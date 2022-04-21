import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import UpdateUser from './components/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
       <Header />
      <Routes>
        <Route path='user/add' element={<AddUser/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/update' element={<UpdateUser/>}></Route>
        <Route path='/update/:id' element={<UpdateUser/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
