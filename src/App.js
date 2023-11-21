import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Sorter } from "./pages/sorter";
import { Form } from "./pages/form";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/login" element={<Login/>}>Login</Route>
        <Route path="/sorter" element={<Sorter/>}>Sorteador</Route>
        <Route path="/form" element={<Form/>}>Formulário</Route>
      </Routes>
    </Router>
  );
}

export default App;
