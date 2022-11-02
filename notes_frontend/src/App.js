import './App.css';
import HomePage from './Pages/HomePage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import AddNotePage from './Pages/AddNotePage';
import SingleNotePage from './Pages/SingleNotePage';
import EditNotePage from './Pages/EditNotePage';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <div> 
      <Router>
        <Routes>
          <Route element={<HomePage/>} path='/'>
          </Route>
          <Route element={<AddNotePage/>} path='/add-note'/>
          <Route element={<SingleNotePage/>} path='/view-note/:id' />
          <Route element={<EditNotePage/>} path='/edit-note/:id'/>
          <Route element={<NotFoundPage/>} path='*'/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
