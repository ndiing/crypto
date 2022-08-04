# Crypto

### Install

```
npm install @ndiing/crypto
```

### CDN

```
https://cdn.jsdelivr.net/gh/ndiing/crypto/crypto.js
```

### Usage

```js
const crypto = require("@ndiing/crypto");
var data = "message";
var key = crypto.randomBytes(16).toString("hex");
var iv = crypto.randomBytes(8).toString("hex");

var encrypted = encrypt(data, { key, iv });
console.log(encrypted);
console.log(decrypt(encrypted, { key, iv }));

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
var options = { privateKey, publicKey };
var data = "message";

var encrypted = privateEncrypt(data, options);
console.log(encrypted);
console.log(publicDecrypt(encrypted, options));
var encrypted = publicEncrypt(data, options);
console.log(encrypted);
console.log(privateDecrypt(encrypted, options));
var signature = sign(encrypted, options);
console.log(signature);
console.log(verify(encrypted, signature, options));

var encoded = base64Encode("message");
console.log(encoded);
console.log(base64Decode(encoded));

var encoded = base64UrlEncode("message");
console.log(encoded);
console.log(base64UrlDecode(encoded));

console.log(hash("password"));
console.log(hmac("password", { key: "secret" }));
```
