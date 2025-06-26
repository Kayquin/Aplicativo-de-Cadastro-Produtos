# 💻 Trabalho Final - Frontend React CRUD Produtos

Este projeto é um frontend desenvolvido com **React + Vite**, que realiza operações de **CRUD (Create, Read, Update, Delete)** para produtos, utilizando uma API pública.

---

## 🔗 Demo Online

Acesse a aplicação hospedada na Vercel:  
👉 [https://aplicativo-de-cadastro-produtos-ledflpv1s-kayquins-projects.vercel.app](https://aplicativo-de-cadastro-produtos-ledflpv1s-kayquins-projects.vercel.app)

---

## 🚀 Funcionalidades

- 📋 Listagem de produtos
- ➕ Cadastro de novo produto
- ✏️ Edição de produto
- ❌ Exclusão de produto
- 🔐 Tela de login (usuário: `admin` | senha: `admin`)

---

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [React Router DOM](https://reactrouter.com/)
- [Material UI (MUI)](https://mui.com/)

---

## 🌐 API Pública

Este projeto consome a seguinte API:

```
http://leoproti.com.br:8004/produtos
```

---

## ⚠️ Atenção sobre a API

A aplicação está configurada para consumir a API via **HTTP**, pois essa é a forma funcional no momento.

### 🔐 Alternativa segura (HTTPS)

A API também está disponível por HTTPS:

```
https://apipw.leoproti.com.br/produtos
```

> ❗ Porém, essa URL pode apresentar problemas de **CORS** ou instabilidade em produção (como na Vercel), por isso mantemos o uso do HTTP até que esteja totalmente funcional.

### 📁 Exemplo de configuração (`src/services/api.js`)

```js
// HTTP funcional
const api = axios.create({
  baseURL: "http://leoproti.com.br:8004/",
});

// HTTPS (opcional - pode falhar)
const api = axios.create({
  baseURL: "https://apipw.leoproti.com.br/",
});
```

---

## 📂 Organização de Pastas

```
src/
├── components/        # Componentes reutilizáveis (NavBar, FormProduto, etc)
├── pages/             # Páginas principais (ListaProdutos, FormProduto, Login)
├── routes/            # Arquivo de rotas (AppRoutes.jsx)
├── services/          # Comunicação com API (api.js, produtoService.js)
└── App.jsx            # Componente principal
```

---

## ✅ Como rodar localmente

```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

---

## 📝 Licença

Projeto com fins educacionais.
