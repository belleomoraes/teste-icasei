# Use a imagem base do Node.js versão 14
FROM node:14

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de configuração do pacote (package.json e package-lock.json, se existir)
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o código fonte da aplicação para dentro do contêiner
COPY src ./src

# Expõe a porta 3000 (ou a porta que a aplicação usa)
EXPOSE 3000

# Comando padrão para iniciar a aplicação
CMD ["npm", "start"]