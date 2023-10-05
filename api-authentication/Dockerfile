# Use uma imagem base Node.js
FROM node:14

# Crie e defina o diretório de trabalho na imagem
WORKDIR /usr/src/app

# Copie os arquivos de dependência do projeto e o arquivo package.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o código-fonte para a imagem
COPY . .

# Exponha a porta em que a aplicação estará em execução
EXPOSE 3000

# Comando para iniciar a aplicação quando o contêiner for iniciado
CMD ["node", "app.js"]
