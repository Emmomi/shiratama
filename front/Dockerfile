# 使用する基本イメージ
FROM node:18

# 作業ディレクトリを設定
WORKDIR /usr/src/app

# 依存関係のインストール
COPY package*.json ./
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# ポートの公開
EXPOSE 3000

# アプリケーションの起動コマンド
CMD ["npm", "run", "dev"]
