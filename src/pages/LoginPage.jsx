import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  CircularProgress,
  Alert,
} from "@mui/material";

export default function LoginPage({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");

    if (!usuario.trim() || !senha.trim()) {
      setErro("Por favor, preencha usuário e senha.");
      return;
    }

    setLoading(true);

    try {
      // Simula autenticação - substitua pela chamada real da API
      await new Promise((res) => setTimeout(res, 1500));

      // Exemplo simples: usuário "admin" e senha "1234"
      if (usuario === "admin" && senha === "admin") {
        if (onLogin) onLogin();
      } else {
        setErro("Usuário ou senha inválidos.");
      }
    } catch {
      setErro("Erro ao tentar fazer login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f5f5f5",
        px: 2,
      }}
    >
      <Paper
        elevation={8}
        sx={{
          p: 4,
          maxWidth: 360,
          width: "100%",
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h5"
          align="center"
          fontWeight="bold"
          color="primary"
          gutterBottom
        >
          Acesse sua conta
        </Typography>

        {erro && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {erro}
          </Alert>
        )}

        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <Stack spacing={3}>
            <TextField
              label="Usuário"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              disabled={loading}
              required
              fullWidth
              autoFocus
            />
            <TextField
              label="Senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              disabled={loading}
              required
              fullWidth
            />

            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              size="large"
              startIcon={loading && <CircularProgress size={20} color="inherit" />}
            >
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}
