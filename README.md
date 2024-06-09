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
   ```sh
   git clone https://github.com/seu-usuario/sisvenda.git
   cd sisvenda
2. Instale as Dependências: 
   ```sh
   npm install
### Executando a aplicação

3. Para iniciar a aplicação em modo de desenvolvimento, execute:
   ```sh
   npm install

A aplicação estará disponível em http://localhost:3000.

## Arquitetura do Projeto

### Estrutura de Pastas

- **src/:** Contém todo o código-fonte da aplicação.
- **components/:** Componentes React reutilizáveis.
- **features/:** Funcionalidades específicas do Redux Toolkit.
- **pages/:** Páginas da aplicação.
- **assets/:** Recursos estáticos como imagens e estilos.
- **App.js:** Componente principal da aplicação.
- **index.js:** Ponto de entrada da aplicação.

### Escolhas Arquitetônicas

- **React:** Escolhido pela sua eficiência e flexibilidade na construção de interfaces de usuário.
- **Redux Toolkit:** Utilizado para gerenciamento de estado, simplificando a configuração e proporcionando uma melhor estruturação do código.
- **React Router:** Para gerenciamento de rotas, permitindo uma navegação fluida entre diferentes páginas.
- **FontAwesome:** Para ícones consistentes e visualmente atraentes.
- **Testing Library:** Para garantir a qualidade do código e a funcionalidade correta dos componentes através de testes.