# Meu Front-end em React

Api externa:

Quote: http://api.forismatic.com/api/1.0/

Fun Fact: https://uselessfacts.jsph.pl/api/v2/facts/random?language=en

## Como executar através do Docker

Certifique-se de ter o [Docker](https://docs.docker.com/engine/install/) instalado e em execução em sua máquina.

Navegue até o diretório que contém o Dockerfile no terminal e seus arquivos de aplicação e
Execute **como administrador** o seguinte comando para construir a imagem Docker:

```
$ docker build -t front .
```

Uma vez criada a imagem, para executar o container basta executar, **como administrador**, seguinte o comando:

```
$ docker run -d -p 3000:3000 front
```

Uma vez executando, para acessar o front-end, basta abrir o [http://localhost:3000/#/](http://localhost:3000/#/) no navegador.
