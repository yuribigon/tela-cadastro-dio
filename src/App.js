import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Feed } from "./pages/feed";
import { GlobalStyle } from "./styles/global";


function App() {
  return (
    <Router>
    <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/feed" element={<Feed />}/>
      </Routes>
    </Router>
  );
}

export default App;
