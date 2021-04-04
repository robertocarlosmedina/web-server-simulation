from socket import *
import requests

serverName = 'localhost'
serverPort = 80

def verifyCmd(cmd):
    cmd = cmd.split(" ")
    if len(cmd) < 4:
        return None
    else:
        return cmd
count = 0
print("____________________Web Server client___________________________\n")
print("The command is to be donne like the following explanation: ")
print("TCP/Server -> [server_name] [server_port] [display_type] [site_or_file]")
print("   * [server_name] - is the web server name, ex: 'localhost'")
print("   * [server_port] - is the web server port, ex: '3000'")
print("""   * [display_type] - is the output type that you want, it could be text
         or response code, ex: '-h' output is the response code, or '-t' output
         is the html file content.""")
print("""   * [site_or_file] - is the site that you are trying to connect,
             ex: 'Facebook.html'""")
print("Commands examples: ")
print("Ex.1: whit response conde: ")
print("TCP/Server -> localhost 3000 -h Facebook.html")
print("Ex.2: whit html file display: ")
print("TCP/Server -> localhost 3000 -t Facebook.html\n\n")

print("____________________Web Server client___________________________\n")

while True:
    # the cmd variable is to receive an string like this: localhost 3000 -h Facebook.html
    cmd = input("TCP/Server -> ")
    verfcmd = verifyCmd(cmd)
    if verfcmd != None:
        serverName = verfcmd[0]
        serverPort = int(verfcmd[1])
        opc = verfcmd[2]
        site = verfcmd[3]

        if opc == "-h":
            try:
                clientSocket = socket(AF_INET, SOCK_STREAM)
                clientSocket.connect((serverName, serverPort))
                clientSocket.send(f'''Get /{site} HTTP/1.1
Host: localhost:{serverPort}
User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:86.0) Gecko/20100101 Firefox/86.0
Accept: image/webp,*/*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Connection: keep-alive
Referer: http://{serverName}:{serverPort}/{site}
Upgrade-Insecure-Requests: {count}'''.encode())
                modifiedSentence = clientSocket.recv(1024).decode()
                print('From Server: ', modifiedSentence[:1000])
                clientSocket.close()
                count += 1
            except OSError:
                print("File not found")
        elif opc == "-t":
            res = requests.get(f'http://{serverName}:{serverPort}/{site}')
            print(res.text[:1000])
            print("\n")
        else:
            print("OSCommand: [Erro:01]")
    else:
        print("OSCommand: [Erro:01]")
        