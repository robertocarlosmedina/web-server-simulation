from socket import *
from threading import Thread
import sys

class th(Thread):
    def __init__(self, connectionSocket, output):
        Thread.__init__(self)
        self.outputdata = output
        self.connectionSocket = connectionSocket

    def run(self):
        self.connectionSocket.send("HTTP/1.1 200 OK\r\n\r\n".encode())
        for i in range(0, len(self.outputdata)):
            self.connectionSocket.send(self.outputdata[i].encode())
        self.connectionSocket.send("\r\n".encode())
        self.connectionSocket.close()

class Get():
    def __init__(self, port):
        self.serverPort = port
        self.files = []
        
    def run(self):
        self.serverSocket = socket(AF_INET, SOCK_STREAM)
        self.serverSocket.bind(("localhost", self.serverPort))
        self.serverSocket.listen(1)
        while True:
            
            print('The server is ready to receive')

            connectionSocket, addr = self.serverSocket.accept()
            try:
                message = connectionSocket.recv(1024).decode()
                filename = message.split()[1]
                
                f = open(filename[1:])
                outputdata = f.read()
                self.files.append(outputdata)
                for file in self.files:
                    thread = th(connectionSocket, outputdata)
                    thread.start()
                # connectionSocket.send("HTTP/1.1 200 OK\r\n\r\n".encode())
                # for i in range(0, len(outputdata)):
                #     connectionSocket.send(outputdata[i].encode())
                # connectionSocket.send("\r\n".encode())
                # connectionSocket.close()
            except IOError:
                connectionSocket.send("HTTP/1.1 404 Not Found\r\n\r\n".encode())
                connectionSocket.send("<html><head></head><body><h1>404 Not Found</h1></body></html>\r\n".encode())
                connectionSocket.close()

all_ports=[3000, 3001, 3002, 3003]
get = Get(3000)
get.run()


# serverSocket.close()  
# sys.exit()
            




