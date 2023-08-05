# ベースイメージの指定
FROM python:3

# 環境変数の設定
ENV PYTHONUNBUFFERED 1

# docker内に作業ディレクトリの作成
RUN mkdir /work

# 作業ディレクトリの指定
WORKDIR /work

# zip 解凍用意
#  nodejs git のインストール
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash \
  && apt-get update && apt-get install -y zip unzip nodejs git

# django のインストール
RUN pip install django
RUN pip install djangorestframework
RUN pip install django-filter
RUN pip install django-cors-headers

# Angular のインストール
RUN npm install -g @angular/cli

# リッスンポートのオープン（4200:angular 8000:django）
EXPOSE 4200
EXPOSE 8000
