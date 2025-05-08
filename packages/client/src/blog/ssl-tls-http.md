---
title: How to Use SSL/TLS with Node.js and production environment
description: The HTTP/2 specification was published as RFC 7540 in May 2015, which means at this point it’s a part of the standard. This was a major milestone. Now we can all upgrade our servers to use HTTP/2. One of the most important aspects is the backwards compatibility with HTTP 1.1 and the negotiation mechanism to choose a different protocol. Although the standard doesn’t specify mandatory encryption, currently no browser supports HTTP/2 unencrypted. This gives HTTPS another boost. Finally we’ll get HTTPS everywhere!
authors: ['Tres-Paylas']
card: true
date: April 9, 2024
tags: ['NODEJS']
---

<ul class="feature-list">
<li>
<code>
In 2020, there’s no reason for your website not to use HTTPS. Visitors expect it, Google uses it as a ranking factor and browser makers will happily name and shame those sites not using it.
In this tutorial, I’ll walk you through a practical example of how to add a Let’s Encrypt–generated certificate to your Express.js server.
But protecting our sites and apps with HTTPS isn’t enough. We should also demand encrypted connections from the servers we’re talking to. We’ll see that possibilities exist to activate the SSL/TLS layer even when it’s not enabled by default.
Note: if you’re looking for instructions on how to set up SSL with NGINX when configuring it to work as a reverse proxy for a Node app, check out our quick tip, “Configuring NGINX and SSL with Node.js”.
Let’s start with a short review of the current state of HTTPS.
</code>
</li>
</ul>

## HTTPS Everywhere

<ul class="feature-list">
<li>
<code>
The HTTP/2 specification was published as RFC 7540 in May 2015, which means at this point it’s a part of the standard. This was a major milestone. Now we can all upgrade our servers to use HTTP/2. One of the most important aspects is the backwards compatibility with HTTP 1.1 and the negotiation mechanism to choose a different protocol. Although the standard doesn’t specify mandatory encryption, currently no browser supports HTTP/2 unencrypted. This gives HTTPS another boost. Finally we’ll get HTTPS everywhere!
</code>
</li>
</ul>


<code class="feature-list">
What does our stack actually look like? From the perspective of a website running in the browser (at the application level) we have to traverse the following layers to reach the IP level:
</code>

<ol class="feature-list">
<li>
1. Client browser
</li>
<li>
2. HTTP
</li>
<li>
3. SSL/TLS
</li>
<li>
4. TCP
</li>
<li>
5. IP
</li>
</ol>

<summary>
HTTPS is nothing more than the HTTP protocol on top of SSL/TLS. Hence all of HTTP’s rules still apply. What does this additional layer actually give us? There are multiple advantages: we get authentication by having keys and certificates; a certain kind of privacy and confidentiality is guaranteed, as the connection is encrypted in an asymmetric manner; and data integrity is also preserved, as transmitted data can’t be changed during transit.
</summary>

- **One of the most common myths is that using SSL/TLS is computationally expensive and slows the server down. This is**  certainly not true anymore. We also don’t need any specialized hardware with cryptography units. Even for Google, [the SSL/TLS layer accounts for less than 1% of the CPU load and the the network overhead](https://www.imperialviolet.org/2010/06/25/overclocking-ssl.html) of HTTPS as compared to HTTP is below 2%. All in all, it wouldn’t make sense to forgo HTTPS for the sake of a little overhead.

<ul class="feature-list">
<li>
As Ilya Grigorik puts it, there is but one performance problem:

TLS has exactly one performance problem: it is not used widely enough. Everything else can be optimized: [https://t.co/1kH8qh89Eg](https://t.co/1kH8qh89Eg)

— Ilya Grigorik (@igrigorik) [February 20, 2014](https://twitter.com/igrigorik/status/436618170397646848?ref_src=twsrc%5Etfw)
</li>
</ul>

  - **The most recent version is TLS 1.3. TLS is the successor of SSL, which is available in its latest release SSL 3.0**  The changes from SSL to TLS preclude interoperability, but the basic procedure is, however, unchanged. We have three different encrypted channels. The first is a public key infrastructure for certificate chains. The second provides public key cryptography for key exchanges. Finally, the third one is symmetric. Here we have cryptography for data transfers.

- **TLS 1.3 uses hashing for some important operations.**
  Theoretically, it’s possible to use any hashing algorithm, butit’s highly recommended to use SHA2 or a stronger algorithm. SHA1 has been a standard for a long time but has recently become obsolete.

 - **HTTPS is also gaining more attention for clients. Privacy and security concerns have always been around,**
   but with the growing amount of online accessible data and services, people are getting more and more concerned. For those sites that don’t implement it, there is a useful browser extension — HTTPS Everywhere from the EFF — which encrypts our communications with most websites.

<img src="/web-server.jpg"  alt="HTTPS Everywhere"  />


The creators realized that many websites offer HTTPS only partially. The plugin allows us to rewrite requests for those sites that offer only partial HTTPS support. Alternatively, we can also block HTTP altogether (see the screenshot above).

## Basic Communication

<ul class="feature-list">
<li>
The certificate’s validation process involves validating the certificate signature and expiration. We also need to verify that it chains to a trusted root. Finally, we need to check to see if it’s been revoked. There are dedicated, trusted authorities in the world that grant certificates. In case one of these were to become compromised, all other certificates from the said authority would get revoked.

The sequence diagram for an HTTPS handshake looks as follows. We start with the initialization from the client, which is followed by a message with the certificate and key exchange. After the server sends its completed package, the client can start the key exchange and cipher specification transmission. At this point, the client is finished. Finally the server confirms the cipher specification selection and closes the handshake.
</li>
</ul>


```js
const https = require("https"),
  fs = require("fs");

const options = {
  key: fs.readFileSync("/srv/www/keys/my-site-key.pem"),
  cert: fs.readFileSync("/srv/www/keys/chain.pem")
};

const app = express();

app.use((req, res) => {
  res.writeHead(200);
  res.end("hello world\n");
});

app.listen(8000);

https.createServer(options, app).listen(8080);
```

<code>
Ignore the /srv/www/keys/my-site-key.pem and and /srv/www/keys/chain.pem files for the moment. Those are the SSL certificates we need to generate, which we’ll do a bit later. This is the part that changed with Let’s Encrypt. Previously, we had to generate a private/public key pair, send it to a trusted authority, pay them and probably wait for a bit in order to get an SSL certificate. Nowadays, Let’s Encrypt instantly generates and validates your certificates for free!
</code>

<img src="/1719900270wasm-vs-js-300x170.jpg"  alt="Basic Communication"  />

# Generating Certificates

### Certbot

<strong  class="featured-list">
The TLS specification demands a certificate, which is signed by a trusted certificate authority (CA). The CA ensures that the certificate holder is really who they claim to be. So basically when you see the green lock icon (or any other 

greenish sign to the left side of the URL in your browser) it means that the server you’re communicating with is really who it claims to be. If you’re on facebook.com and you see a green lock, it’s almost certain you really are communicating with Facebook and no one else can see your communication — or rather, no one else can read it.

It’s worth noting that this certificate doesn’t necessarily have to be verified by an authority such as Let’s Encrypt. There are other paid services as well. You can technically sign it yourself, but then (as you’re not a trusted CA) the users visiting your site will likely see a large scary warning offering to get them back to safety.
In the following example, we’ll use the Certbot, which is used to generate and manage certificates with Let’s Encrypt.

On the Certbot site you can find instructions on how to install Certbot for almost any OS/server combination. You should choose the options that are applicable to you. A common combination for deploying Node apps is NGINX on the latest LTS Ubuntu and that’s what I’ll use here.
</strong>

```diff
sudo apt-get update
sudo apt-get install software-properties-common
sudo add-apt-repository universe
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
```


<code>
certbot certonly --webroot -w /var/www/example/ -d www.example.com -d example.com
</code>

You may have to run this command as <pre>sudo, as it will try to write to /var/log/letsencrypt.</pre>


 - **You’ll also be asked for your email address.** It’s a good idea to put in a real address you use often, as you’ll get a notification if your certificate is about to expire. The trade-off for Let’s Encrypt issuing a free certificate is that it expires every three months. Luckily, renewal is as easy as running one simple command, which we can assign to a cron job and then not have to worry about expiration. Additionally, it’s a good security practice to renew SSL certificates, as it gives attackers less time to break the encryption. Sometimes developers even set up this cron to run daily, which is completely fine and even recommended.

 - **Keep in mind that you have to run this command on a server to which the domain specified under the -d (for domain) flag resolves — that is**, your production server. Even if you have the DNS resolution in your local hosts file, this   won’t work, as the domain will be verified from outside. So if you’re doing this locally, it will most likely fail, unless you opened up a port from your local machine to the outside world and have it running behind a domain name which resolves to your machine. This is a highly unlikely scenario.

 - **Last but not least, after running this command, the output will contain paths to your private key and certificate files.** Copy these values into the previous code snippet — into the cert property for certificate, and the key property for the key:



```js
const options = {
  key: fs.readFileSync("/var/www/example/sslcert/privkey.pem"),
  cert: fs.readFileSync("/var/www/example/sslcert/fullchain.pem") 
};
```



## Tighetning It Up

# HTTP Strict Transport Security

<code class="feature-list">
Have you ever had a website where you switched from HTTP to HTTPS and there were some residual redirects still redirecting to HTTP? HTTP Strict Transport Security (HSTS) is a web security policy mechanism to mitigate protocol downgrade attacks and cookie hijacking.

HSTS effectively forces the client (browser accessing your server) to direct all traffic through HTTPS — a “secure or not at all” ideology!

Express JS doesn’t allow us to add this header by default, so we’ll use Helmet, a Node module that allows us to do this. Install Helmet by running the following:

</code>


<pre>
npm install helmet
</pre>

```js
const https = require("https"),
  fs = require("fs"),
  helmet = require("helmet");

const options = {
  key: fs.readFileSync("/srv/www/keys/my-site-key.pem"),
  cert: fs.readFileSync("/srv/www/keys/chain.pem")
};

const app = express();

app.use(helmet()); // Add Helmet as a middleware

app.use((req, res) => {
  res.writeHead(200);
  res.end("hello world\n");
});

app.listen(8000);

https.createServer(options, app).listen(8080);
```

## Diffie–Hellman Strong(er) Parameters

<summary>
In order to skip some complicated math, let’s cut to the chase. In very simple terms, there are two different keys used for encryption: the certificate we get from the certificate authority, and one that’s generated by the server for key exchange. The default key for key exchange (also called [Diffie–Hellman key exchange](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange), or DH) uses a “smaller” key than the one for the certificate. In order to remedy this, we’ll generate a strong DH key and feed it to our secure server for use.

In order to generate a longer (2048 bit) key, you’ll need openssl, which you probably have installed by default. In case you’re unsure, run openssl -v. If the command isn’t found, install openssl by running sudo apt install openssl (or visit their download page here):

</summary>

<pre>openssl dhparam -out /var/www/example/sslcert/dh-strong.pem 2048</pre>

```js
const options = {
  key: fs.readFileSync("/var/www/example/sslcert/privkey.pem"),
  cert: fs.readFileSync("/var/www/example/sslcert/fullchain.pem"), 
  dhparam: fs.readFileSync("/var/www/example/sslcert/dh-strong.pem")
};
```

## Conclusion

In 2020 and beyond, there’s no excuse to dismiss HTTPS. The future direction is clearly visible: HTTPS everywhere! In Node.js, we have lots of options for utilizing SSL/TLS. We can publish our websites in HTTPS, we can create requests to encrypted websites, and we can authorize otherwise untrusted certificates.




