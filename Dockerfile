# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:14
WORKDIR /app
COPY package*.json ./
#RUN npm install
RUN npm ci --only=production
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]

#FROM postgres
#WORKDIR /database
#ENV POSTGRES_PASSWORD docker
#ENV POSTGRESS_DB world
#COPY db-schema.sql /docker-entrypoint-initdb.d/
#COPY db-dump.sql /docker-entrypoint-initdb.d