# TreeChat AI

TreeChat AI é um aplicativo web que organiza conversas com IA em uma estrutura de árvore, permitindo criar ramificações em qualquer ponto do diálogo. Este repositório fornece a fundação inicial do backend em FastAPI e frontend em React/Vite.

## Estrutura
- **backend**: API FastAPI com modelos iniciais de usuário, conversa e nó.
- **frontend**: Interface React com pré-visualização estática da árvore e painel de chat demonstrativo.
- **docker-compose**: Orquestra backend, Postgres e frontend para desenvolvimento.

## Primeiros passos
1. Copie `.env.example` para `.env` e ajuste variáveis conforme necessário.
2. Inicie os serviços: `docker-compose up --build`.
3. Acesse a API em `http://localhost:8000/health` e o frontend em `http://localhost:5173`.

## Próximos passos
- Implementar autenticação real com JWT.
- Integrar cliente OpenAI para streaming de respostas.
- Persistir e navegar em árvores completas de conversas.

## Deploy na Vercel
- Importe o repositório na Vercel e mantenha o diretório raiz do projeto (o `vercel.json` já aponta para a pasta `frontend`).
- Nas configurações do projeto, defina a variável de ambiente `VITE_API_URL` para o endpoint público do backend FastAPI.
- A Vercel executará `npm install` e `npm run build` dentro de `frontend`, gerando os arquivos em `frontend/dist`.
- O arquivo `vercel.json` também inclui um rewrite para que o Vite SPA responda a todas as rotas em produção.
