SENAI-exam
Este é um projeto desenvolvido utilizando Vite + React com JavaScript e gerenciado com pnpm.

Pré-requisitos
Antes de começar, é necessário ter instalado os seguintes programas no seu computador:
- Node.js (versão recomendada 18 ou superior)
- pnpm (para gerenciar os pacotes do projeto)

Instalação
Para configurar o projeto corretamente, siga os passos abaixo:
- Clone este repositório para o seu ambiente de desenvolvimento
- Acesse a pasta do projeto
- Instale as dependências utilizando o comando pnpm install

Execução do projeto
Para rodar o ambiente de desenvolvimento localmente:
- Execute o comando pnpm run dev
- O servidor será iniciado e a aplicação ficará disponível em uma URL gerada pelo terminal

Produção
Caso queira gerar uma versão otimizada do projeto para produção:
- Execute o comando pnpm run build
- O sistema criará uma pasta chamada dist com os arquivos prontos para deploy

Estrutura do projeto
O projeto segue uma organização clara para facilitar o desenvolvimento:
- public → Contém arquivos estáticos
- src → Armazena o código-fonte principal, incluindo:
  - components → Componentes reutilizáveis
  - pages → Páginas da aplicação
  - assets → Imagens e estilos
  - main.js → Ponto de entrada da aplicação
  - App.jsx → Estrutura geral do projeto
- package.json → Configuração dos pacotes utilizados
- pnpm-lock.yaml → Registro das versões travadas das dependências
- README.md → Documentação do projeto

Licença
Este projeto está sob a licença MIT.