# 使用する基本イメージ
FROM python:3.10

# 作業ディレクトリを設定
WORKDIR /app

# 依存関係のインストール
COPY ./pyproject.toml /app/pyproject.toml
RUN pip install --upgrade pip && pip install poetry && poetry config virtualenvs.create false && poetry install

# アプリケーションのソースコードをコピー
COPY . .

# ポートの公開
EXPOSE 8000

# アプリケーションの起動コマンド
CMD ["poetry", "run", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
