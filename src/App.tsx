import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Feed } from "./pages/feed";
import { CreateAccount } from "./pages/create-account";


function App() {
  return (
    <Router>
    <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/create-account" element={<CreateAccount />}/>
        <Route path="/feed" element={<Feed />}/>
      </Routes>
    </Router>
  );
}

export default App;
