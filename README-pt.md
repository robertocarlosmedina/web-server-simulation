# web-serve-semulation
Esta é uma simulação de projeto simples de um servidor Web real,
Onde é possível fazer várias solicitações da web para um servidor local.

# Objetivo principal
O objetivo principal é simular, de forma mais eficiente,
a funcionalidade de um servidor web.

## Dependências / bibliotecas usam:
As bibliotecas que utilizo são as seguintes:
```shell
    import socket
    import request
    import Thread
```
## Executando e depurando
### O servidor web
Para depurar / executar o servidor web, siga as etapas:
#### 1º - execute o script do servidor.
```shell
    python3 webserver.py
```
A saída será assim:
```shell
Port 3000: trying to connect.
Port 3000: already connected.

The server is under state active.
```
#### 2º - Vá ao navegador e acesse os sites que estão disponíveis no servidor.
Exemplos:
    - [http://localhost:3000/Facebook.html] ()
    - [http://localhost:3000/Google.html] ()
    - [http://localhost:3000/ArqRedes.html] ()

### O cliente
Para conectar o servidor como um cliente, você deve executar o script do cliente:
```shell
    python3 client.py
```
a saída será um terminal onde é possível executar dois comandos.
#### Os comandos
* Para exibir o código de resposta, use:
```shell
    TCP/Server -> localhost 3000 -h ArqRedes.html
```
* Para exibir o conteúdo do arquivo html:
```shell
    TCP/Server -> localhost 3000 -t ArqRedes.html 
```