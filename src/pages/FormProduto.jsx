import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Paper,
  Typography,
  CircularProgress,
  Box,
  Button,
  Stack,
  TextField,
} from "@mui/material";
import produtoService from "../services/produtoService";

export default function FormProdutoPage() {
  const { id } = useParams();
  const [produto, setProduto] = useState({ nome: "", preco: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setLoading(true);
      produtoService
        .obter(id)
        .then((data) => setProduto({ nome: data.nome, preco: data.preco }))
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto((prev) => ({
      ...prev,
      [name]: name === "preco" ? value.replace(",", ".") : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (id) {
        await produtoService.atualizar(id, {
          nome: produto.nome,
          preco: parseFloat(produto.preco),
        });
      } else {
        await produtoService.criar({
          nome: produto.nome,
          preco: parseFloat(produto.preco),
        });
      }
      navigate("/");
    } catch {
      alert("Erro ao salvar produto");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 420,
        mx: "auto",
        mt: 6,
        px: 3,
      }}
    >
      <Paper
        elevation={8}
        sx={{
          p: { xs: 3, sm: 5 },
          borderRadius: 3,
          boxShadow: 4,
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          align="center"
          color="primary"
          fontWeight="bold"
          gutterBottom
          mb={4}
        >
          {id ? "Editar Produto" : "Novo Produto"}
        </Typography>

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
            <CircularProgress size={48} />
          </Box>
        ) : (
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <Stack spacing={3}>
              <TextField
                label="Nome"
                name="nome"
                value={produto.nome}
                onChange={handleChange}
                required
                fullWidth
                disabled={loading}
                variant="outlined"
              />
              <TextField
                label="Preço (R$)"
                name="preco"
                value={produto.preco}
                onChange={handleChange}
                required
                fullWidth
                disabled={loading}
                variant="outlined"
                type="number"
                inputProps={{ step: "0.01", min: 0 }}
              />

              <Stack direction="row" spacing={2} justifyContent="flex-end">
                <Button
                  variant="outlined"
                  onClick={() => navigate("/")}
                  disabled={loading}
                >
                  Cancelar
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={loading}
                  startIcon={loading ? <CircularProgress size={18} /> : null}
                >
                  {loading ? "Salvando..." : "Salvar"}
                </Button>
              </Stack>
            </Stack>
          </form>
        )}
      </Paper>
    </Box>
  );
}
