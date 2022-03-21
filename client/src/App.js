import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddContact from './Components/AddContact';
import EditContact from './Components/EditContact';
import Home from './Components/Home';
import ListContact from './Components/ListContact';
import NavContact from './Components/NavContact';

function App() {
  return (
     <div>
       <NavContact/>

       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/Contacts' element={<ListContact/>}/>
         <Route path='/AddContact' element={<AddContact/>}/>
         <Route path='/UpdateContact/:id' element={<EditContact/>}/>
       </Routes>
       
     </div>
  );
}

export default App;
