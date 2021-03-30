from socket import *
from threading import Thread

class th(Thread):
    def __init__(self, connectionSocket, f):
        Thread.__init__(self)
        self.outputdata = f.read()
        self.connectionSocket = connectionSocket

    def run(self):
        self.connectionSocket.send("HTTP/1.1 200 OK\r\n\r\n".encode())
        for i in range(0, len(self.outputdata)):
            self.connectionSocket.send(self.outputdata[i].encode())
        self.connectionSocket.send("\r\n".encode())
        # self.connectionSocket.close()
        

class Get():
    def __init__(self, port):
        self.serverPort = port
        self.files = []
        
    def run(self):
        self.serverSocket = socket(AF_INET, SOCK_STREAM)
        self.serverSocket.bind(("localhost", self.serverPort))
        self.serverSocket.listen(1)
        print(f'Port {all_ports[port]}: already connected.\n')
        while True:
            print('The server is under state active.')

            connectionSocket, addr = self.serverSocket.accept()
            try:
                message = connectionSocket.recv(1024).decode()
                print(message)
                filename = message.split()[1]
                f = open(filename[1:])
                
                self.files.append(f)
                for file in self.files:
                    thread = th(connectionSocket, file)
                    thread.start()
                connectionSocket.send("HTTP/1.1 200 Ok\r\n".encode())
                
            except IOError:
                connectionSocket.send("HTTP/1.1 404 Not Found\r\n".encode())
                connectionSocket.send("<html><head></head><body><h1>404 Not Found</h1></body></html>\r\n".encode())
                connectionSocket.close()

all_ports=[3000, 3001, 3002, 3003]
port = 0

while True:
    stop = True
    try:
        print(f'Port {all_ports[port]}: trying to connect.')
        get = Get(all_ports[port])
        get.run()
    except OSError:
        stop = False
        print(f'Port {all_ports[port]}: is unavailable now.')

    if stop:
        break
    port += 1
# get.run()       
