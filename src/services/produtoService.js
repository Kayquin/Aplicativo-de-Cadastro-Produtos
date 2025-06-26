// src/services/produtoService.js
import api from "./api";

const listar = async () => {
  const { data } = await api.get("/produtos");
  return data;
};

const obter = async (id) => {
  const { data } = await api.get(`/produtos/${id}`);
  return data;
};

const criar = async (produto) => {
  const { data } = await api.post("/produtos", produto);
  return data;
};

const atualizar = async (id, produto) => {
  const { data } = await api.put(`/produtos/${id}`, produto);
  return data;
};

const excluir = async (id) => {
  await api.delete(`/produtos/${id}`);
};

export default {
  listar,
  obter,
  criar,
  atualizar,
  excluir,
};
