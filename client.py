from socket import *
import requests

serverName = 'localhost'
serverPort = 80

def verifyCmd(cmd):
    cmd = cmd.split(" ")
    if len(cmd) < 3:
        return None
    else:
        return cmd
count = 0
while True:
    cmd = input("TCP/Teste -> ")
    verfcmd = verifyCmd(cmd)
    if verfcmd != None:
        serverName = verfcmd[0]
        serverPort = int(verfcmd[1])
        aux = verfcmd[2]

        try:
            clientSocket = socket(AF_INET, SOCK_STREAM)
            clientSocket.connect((serverName, serverPort))
            clientSocket.send(f'''Get /{aux} HTTP/1.1
Host: localhost:{serverPort}
User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:86.0) Gecko/20100101 Firefox/86.0
Accept: image/webp,*/*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Connection: keep-alive
Referer: http://{serverName}:{serverPort}/{aux}
Upgrade-Insecure-Requests: {count}'''.encode())
            modifiedSentence = clientSocket.recv(1024).decode()
            print('From Server: ', modifiedSentence[:1000])
            clientSocket.close()
            count += 1
        except OSError:
            print("File not found")