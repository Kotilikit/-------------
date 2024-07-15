import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserListPage from './pages/UserListPage';
import UserFormPage from './pages/UserFormPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserListPage />} />
        <Route path="/create" element={<UserFormPage />} />
        <Route path="/edit/:id" element={<UserFormPage />} />
      </Routes>
    </Router>
  );
};

export default App;
