import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./View/Home";
import Login from "./View/Login";
import LandingPage from "./View/LandingPage";
import Vendas from "./View/Vendas";
import NovaVenda from "./View/NovaVenda";
import EditarVenda from "./View/EditarVenda";
import './App.css';

function App() {
    
    return (   
    
    <div className="body">
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
    </div>

    );
}

export default App;
