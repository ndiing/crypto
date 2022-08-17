# [crypto](https://ndiing.github.io/crypto/)
crypto

### Install
```
npm install @ndiinginc/crypto
```

### Usage
```js

const Crypto = require('@ndiinginc/crypto')

var options = {
    key: crypto.randomBytes(16).toString("hex"),
    iv: crypto.randomBytes(8).toString("hex"),
};

var encoded = Crypto.encrypt("data", options);
console.log(encoded);
var decoded = Crypto.decrypt(encoded, options);
console.log(decoded);

var options = crypto.generateKeyPairSync("rsa", {
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

var encoded = Crypto.privateEncrypt("data", options);
console.log(encoded);
var decoded = Crypto.publicDecrypt(encoded, options);
console.log(decoded);

var encoded = Crypto.publicEncrypt("data", options);
console.log(encoded);
var decoded = Crypto.privateDecrypt(encoded, options);
console.log(decoded);

var sign = Crypto.sign("data", options);
console.log(sign);
var verify = Crypto.verify("data", sign, options);
console.log(verify);

var encoded = Crypto.base64Encode("data");
console.log(encoded);
var decoded = Crypto.base64Decode(encoded);
console.log(decoded);

var encoded = Crypto.base64UrlEncode("data");
console.log(encoded);
var decoded = Crypto.base64UrlDecode(encoded);
console.log(decoded);

var encoded = Crypto.base32Encode("data");
console.log(encoded);
var decoded = Crypto.base32Decode(encoded);
console.log(decoded);

var hash = Crypto.hash("data");
console.log(hash);
var hmac = Crypto.hmac("data");
console.log(hmac);

```