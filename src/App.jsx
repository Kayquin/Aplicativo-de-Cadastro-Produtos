import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

function App() {
  const [logado, setLogado] = useState(false);

  // Função para deslogar
  const handleLogout = () => {
    setLogado(false);
    // aqui pode limpar token/localStorage se usar
  };

  return (
    <BrowserRouter>
      {logado && <NavBar onLogout={handleLogout} />}
      <div style={{ marginTop: 32 }}>
        <AppRoutes logado={logado} setLogado={setLogado} />
      </div>
    </BrowserRouter>
  );
}

export default App;
