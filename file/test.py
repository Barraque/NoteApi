import urllib.request
import urllib.parse
url='https://cas.uvsq.fr/login?service=http%3A%2F%2Fbulletins.iut-velizy.uvsq.fr%2Findex.php%3Flogin'
user_agent='Mozilla/5.0 (Windows NT 6.1; Win64; x64)'
values={'username' :'21808160','password':'blablabla'}
headers = {'User-Agent': user_agent}
data=urllib.parse.urlencode(values)
data=data.encode('ascii') 
req=urllib.request.Request(url,data,headers)
with urllib.request.urlopen(req) as response:
    page=response.read()
print(page)
