from socket import *
from threading import Thread
import base64

# Class thread that is allow multiple file resquest at the same time
class th(Thread):
    def __init__(self, connectionSocket, f, control):
        Thread.__init__(self)
        self.outputdata = f.read()
        self.connectionSocket = connectionSocket
        self.control = control

    def run(self):
        for i in range(0, len(self.outputdata)):
            self.connectionSocket.send(self.outputdata[i].encode())

        if self.control[0] == self.control[1]: # to control if this is the last thread to close all the socket connections
                                               # Allowing to prevent an error
            self.connectionSocket.close()

class Get():
    def __init__(self, port):
        self.serverPort = port
        self.files = [] # array to store all the web request files
        self.cleint = 0
        self.serverSocket = socket(AF_INET, SOCK_STREAM)
        self.serverSocket.setsockopt(SOL_SOCKET, SO_REUSEADDR, 1) ## I the port is in use this instruction will and
                                                                  ## the process in the port to make it able to be use

    def run(self):

        self.serverSocket.bind(("192.168.1.50", self.serverPort))
        self.serverSocket.listen(1)
        
        print(f'Port {all_ports[port]}: already connected.\n')
        while True:
            print('The server is under state active.')
            
            connectionSocket, addr = self.serverSocket.accept()
            try:
                message = connectionSocket.recv(4096).decode()
                if message == "" :
                    connectionSocket.send("HTTP/1.1 404 Not Found\r\n\r\n".encode())
                    connectionSocket.send("<html><head></head><body><h1>404 Not Found</h1></body></html>\r\n".encode())
                    connectionSocket.close()
                print(message)
                filename = message.split()[1]
                f = open(filename[1:])
                
                self.files.append(f)
                i = 0
                maux = len(self.files)-1

                # To run multiple file content's on the same time, they are in threads
                connectionSocket.send("HTTP/1.1 200 OK\r\n\r\n".encode())
                for file in self.files:
                    print(f"Respondendo client: {i}")
                    thread = th(connectionSocket, file, (i, maux))
                    thread.start()
                    if i == maux:
                        i = 0
                    else:
                        i += 1
                # connectionSocket.send("HTTP/1.1 200 Ok\r\n".encode())
                
            except IOError:
                connectionSocket.send("HTTP/1.1 404 Not Found\r\n\r\n".encode())
                connectionSocket.send("<html><head></head><body><h1>404 Not Found</h1></body></html>\r\n".encode())
                connectionSocket.close()
                # self.serverSocket.close()
            self.cleint += 1

# Some port that could be use to run the server
# But the server will take just one, the first one, to all the connections
all_ports=[3000, 3001, 3002,3003]
port = 0
while True:
    stop = True

    ## this exeption is to prevent the end of the program is the port is already in use
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