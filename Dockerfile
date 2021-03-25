FROM nginx
# 创作者 nosaj
MAINTAINER nosaj
COPY dist /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
RUN echo 'complate'
