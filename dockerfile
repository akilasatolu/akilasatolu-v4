# Dockerfile 開発・本番ビルド共通

# Stage 1: 共通ベース
FROM node:22-alpine AS base
WORKDIR /app

# パッケージインストール
COPY package*.json ./
RUN npm install

# ソースコードコピー
COPY . .

# Stage 2: 開発用
FROM base AS dev
EXPOSE 5173
CMD ["npm", "run", "dev"]

# Stage 3: 本番用ビルド
FROM base AS build
RUN npm run build
