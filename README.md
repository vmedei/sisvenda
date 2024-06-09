# SisVenda

SisVenda é uma aplicação web desenvolvida para uma task do processo seletivo para o cargo de estágio em desenvolvimento para a empresa Solução Tributos. Feito em React, trata-se de um sistema simples para gerenciamento de vendas.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Redux**: Integração do Redux com o React para gerenciamento de estado.
- **Redux Toolkit**: Conjunto de ferramentas para simplificar a utilização do Redux.
- **FontAwesome**: Conjunto de ícones para uso em interfaces web.

## Configuração e Execução

### Pré-requisitos

Certifique-se de ter o Node.js e npm (ou yarn) instalados na sua máquina.

### Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/vmedei/sisvenda.git
   cd sisvenda
   ```

2. Instale as Dependências: 
   ```
   npm install
   ```

### Executando a aplicação

1. Para iniciar a aplicação em modo de desenvolvimento, execute:
   ```
   npm start
   ```

A aplicação estará disponível em http://localhost:3000.

2. Faça login utilizando um dos dados mockados:
   ```
   email: 'usuario1@teste.com', senha: '001'
   email: 'usuaria2@teste.com', senha: '002'
   ```

## Arquitetura do Projeto

### Estrutura de Pastas

```
   SisVenda/
   ├── public/
   ├── src/
   │   ├── components/
   │   ├── Store/
   │   ├── utils/
   │   ├── View/
   │   │   ├── EditarVenda/
   │   │   │   ├── EditarVenda.css
   │   │   │   └── EditarVenda.js
   │   │   ├── LandingPage/
   │   │   │   ├── LandingPage.css
   │   │   │   └── LandingPage.js
   │   │   ├── Login/
   │   │   │   ├── Login.css
   │   │   │   └── Login.js
   │   │   │   └── LoginUtils.js
   │   │   ├── NovaVenda/
   │   │   │   ├── NovaVenda.css
   │   │   │   └── NovaVenda.js
   │   │   ├── Vendas/
   │   │   │   ├── Vendas.css
   │   │   │   └── Vendas.js
   │   │   │   └── VendasUtils.js
   │   │   └── Home.js
   │   ├── App.js
   │   └── index.js
   ├── .gitignore
   ├── package.json
   └── README.md
```

- **src/:** Contém todo o código-fonte da aplicação.
- **src/components/:** Componentes reutilizáveis.
- **src/utils/:** Funções reutilizáveis em várias páginas.
- **src/View/... :** Pastas contendo arquivo com a página principal, arquivo com funções úteis modularizadas e arquivo de estilização.
- **App.js e index.js:** Componente principal e ponto de entrada da aplicação.

### Escolhas Arquitetônicas

- **React:** Eficiência e flexibilidade na construção de interfaces de usuário.
- **Redux Toolkit:** Utilizado para gerenciamento de estado e melhor estruturação do código.
- **Estilização** Toda estilização foi feita utilizando CSS e SCSS.
- **Dados iniciais** O sistema foi implementado com dados mockados no sistema, presentes no arquivo **src/Store/mockData.js** e as alterações foram feitas no gerenciador de estados globais.