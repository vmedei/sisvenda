import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import LandingPage from "./Pages/LandingPage";
import Vendas from "./Pages/Vendas";
import NovaVenda from "./Pages/NovaVenda";
import EditarVenda from "./Pages/EditarVenda";
import './App.css';

function App() {
    return (   
    
    <body>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/landing-page" element={<LandingPage />}/>
                <Route path="/vendas" element={ <Vendas /> }/>
                <Route path="/vendas/nova-venda" element={ <NovaVenda /> }/>
                <Route path="/vendas/editar-venda/:id" element={ <EditarVenda /> }/>
            </Routes>
        </Router>
    </body>

    );
}

export default App;
