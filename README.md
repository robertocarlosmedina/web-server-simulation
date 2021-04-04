# web-serve-semulation
This is a simple project simulation of a real Web Server,
Where it is possible to do multiple web request to a local server.

# Main objective
The main objective is to simulate, more efficiently,
the functionality of a web server.

## Dependences/libraries use:
The libraries that i use are the following one's:
```shell
    import socket
    import request
    import Thread
```
## Running & Debugging
### The Web Server
To debug/run the web server, follow the steps:
#### 1º - run the server script.
```shell
    python3 webserver.py
```
The output will be like this:
```shell
Port 3000: trying to connect.
Port 3000: already connected.

The server is under state active.
```
#### 2º - Go to the browser and access the sites that are available in the server.
Examples:
    - [http://localhost:3000/Facebook.html]()
    - [http://localhost:3000/Google.html]()
    - [http://localhost:3000/ArqRedes.html]()

### The Client
To connect the server as a client, you have to run the client script:
```shell
    python3 client.py
```
the output will be a terminal where is possible to execute two commands.
#### The commands
* To display the response code use:
```shell
    TCP/Server -> localhost 3000 -h ArqRedes.html
```
* To display the contents of the html file:
```shell
    TCP/Server -> localhost 3000 -t ArqRedes.html
```