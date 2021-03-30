from socket import *

serverName = 'localhost'
serverPort = 80

def verifyCmd(cmd):
    cmd = cmd.split(" ")
    if len(cmd) < 3:
        return None
    else:
        return cmd

while True:
    cmd = input("TCP/Teste -> ")
    verfcmd = verifyCmd(cmd)
    if verfcmd != None:
        serverName = verfcmd[0]
        serverPort = int(verfcmd[1])
        aux = verfcmd[2]
        sentence = f'http://{serverName}:{serverPort}/{aux}'

        try:
            clientSocket = socket(AF_INET, SOCK_STREAM)
            clientSocket.connect((serverName, serverPort))
            clientSocket.send(sentence.encode())
            modifiedSentence = clientSocket.recv(1024)
            print('From Server: ', modifiedSentence.decode())
            clientSocket.close()
        except OSError:
            print("File not found")