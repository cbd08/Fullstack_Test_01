# Etapa 1: build con Vite
FROM node:20-alpine AS build

WORKDIR /app

# Copiamos package.json / package-lock.json
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del código
COPY . .

# Recibimos la URL de la API como ARG para Vite
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

# Vite genera el build en /app/dist
RUN npm run build

# Etapa 2: servir el build con Nginx
FROM nginx:1.27-alpine

# Copiamos el build de Vite
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
