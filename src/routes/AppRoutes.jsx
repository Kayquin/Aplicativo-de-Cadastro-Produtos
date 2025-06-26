import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import ListaProdutos from "../pages/ListaProdutos";
import FormProduto from "../pages/FormProduto";
import LoginPage from "../pages/LoginPage";

export default function AppRoutes({ logado, setLogado }) {
  const navigate = useNavigate();

  function handleLogin() {
    setLogado(true);
    navigate("/", { replace: true });
  }

  function PrivateRoute({ children }) {
    return logado ? children : <Navigate to="/login" replace />;
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <ListaProdutos />
          </PrivateRoute>
        }
      />
      <Route
        path="/novo"
        element={
          <PrivateRoute>
            <FormProduto />
          </PrivateRoute>
        }
      />
      <Route
        path="/editar/:id"
        element={
          <PrivateRoute>
            <FormProduto />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
