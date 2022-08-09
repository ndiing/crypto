const Crypto = require("./index");
const crypto = require("crypto");

var key = crypto.randomBytes(16).toString("hex");
var iv = crypto.randomBytes(8).toString("hex");

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

var data = "message";
// var options = { key, iv };

var encrypted = Crypto.encrypt(data, { key, iv });
console.log(encrypted);

var decrypted = Crypto.decrypt(encrypted, { key, iv });
console.log(decrypted);

var hash = Crypto.hash(data);
console.log(hash);

var hmac = Crypto.hmac(data, { key, iv });
console.log(hmac);

// var options = { privateKey, publicKey };

var encrypted = Crypto.privateEncrypt(data, { privateKey, publicKey });
console.log(encrypted);

var decrypted = Crypto.publicDecrypt(encrypted, { privateKey, publicKey });
console.log(decrypted);

var encrypted = Crypto.publicEncrypt(data, { privateKey, publicKey });
console.log(encrypted);

var decrypted = Crypto.privateDecrypt(encrypted, { privateKey, publicKey });
console.log(decrypted);

var signature = Crypto.sign(data, { privateKey, publicKey });
console.log(signature);

var verified = Crypto.verify(data, signature, { privateKey, publicKey });
console.log(verified);

var encoded = Crypto.base64Encode(data);
console.log(encoded);

var decoded = Crypto.base64Decode(encoded);
console.log(decoded);

var encoded = Crypto.base64UrlEncode(data);
console.log(encoded);

var decoded = Crypto.base64UrlDecode(encoded);
console.log(decoded);
