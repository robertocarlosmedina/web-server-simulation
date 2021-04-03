import requests
r = requests.get('http://localhost:3000/Google.html')
print(r.text[:1000])