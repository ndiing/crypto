# Crypto

### Install
for nodejs

```
npm install @ndiing/crypto
```

for web

```
https://cdn.jsdelivr.net/gh/ndiing/crypto/crypto.js
```


### Usage

```js
const crypto = require('@ndiing/crypto')
var data = "message";
var key = crypto.randomBytes(16).toString("hex");
var iv = crypto.randomBytes(8).toString("hex");

var encrypted = Crypto.encrypt(data, { key, iv });
console.log(encrypted)
console.log(Crypto.decrypt(encrypted, { key, iv }));

var { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
modulusLength: 4096,
publicKeyEncoding: {
    type: "spki",
    format: "pem",
},
privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
},
});
var options={privateKey, publicKey}
var data='message'

var encrypted = Crypto.privateEncrypt(data, options);
console.log(encrypted);
console.log(Crypto.publicDecrypt(encrypted, options));
var encrypted = Crypto.publicEncrypt(data, options);
console.log(encrypted);
console.log(Crypto.privateDecrypt(encrypted, options));
var signature=Crypto.sign(encrypted, options)
console.log(signature);
console.log(Crypto.verify(encrypted,signature, options));

var encoded=Crypto.base64Encode('message')
console.log(encoded)
console.log(Crypto.base64Decode(encoded))

var encoded=Crypto.base64UrlEncode('message')
console.log(encoded)
console.log(Crypto.base64UrlDecode(encoded))

console.log(Crypto.hash("password"));
console.log(Crypto.hmac("password", { key: "secret" }));
```