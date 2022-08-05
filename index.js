const crypto = require("crypto");

function encrypt(data, options = {}) {
    const { algorithm = "aes256", key = "", iv = "", chunk = data, encoding = "hex" } = options;
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    return Buffer.concat([cipher.update(chunk), cipher.final()]).toString(encoding);
}

function decrypt(data, options = {}) {
    const { algorithm = "aes256", key = "", iv = "", chunk = data, encoding = "hex" } = options;
    const cipher = crypto.createDecipheriv(algorithm, key, iv);
    return Buffer.concat([cipher.update(chunk, encoding), cipher.final()]).toString();
}

function privateEncrypt(data, options = {}) {
    const { privateKey = "", encoding = "hex" } = options;
    return crypto.privateEncrypt(privateKey, Buffer.from(data)).toString(encoding);
}

function publicDecrypt(data, options = {}) {
    const { publicKey = "", encoding = "hex" } = options;
    return crypto.publicDecrypt(publicKey, Buffer.from(data, encoding)).toString();
}

function publicEncrypt(data, options = {}) {
    const { publicKey = "", encoding = "hex" } = options;
    return crypto.publicEncrypt(publicKey, Buffer.from(data)).toString(encoding);
}

function privateDecrypt(data, options = {}) {
    const { privateKey = "", encoding = "hex" } = options;
    return crypto.privateDecrypt(privateKey, Buffer.from(data, encoding)).toString();
}

function sign(data, options = {}) {
    const { privateKey = "", algorithm = "sha256", encoding = "hex" } = options;
    const buffer = crypto.createSign(algorithm);
    buffer.update(data);
    buffer.end();
    return buffer.sign(privateKey, encoding);
}

function verify(data, signature, options = {}) {
    const { privateKey = "", algorithm = "sha256", encoding = "hex" } = options;
    const buffer = crypto.createVerify(algorithm);
    buffer.update(data);
    buffer.end();
    return buffer.verify(privateKey, signature, encoding);
}

function base64Encode(data) {
    return Buffer.from(data).toString("base64");
}

function base64Decode(data) {
    return Buffer.from(data, "base64").toString();
}

function base64UrlEncode(data) {
    return Buffer.from(data).toString("base64url");
}

function base64UrlDecode(data) {
    return Buffer.from(data, "base64url").toString();
}

function hash(data, options = {}) {
    const { algorithm = "sha256", encoding = "hex" } = options;
    return crypto.createHash(algorithm).update(data).digest(encoding);
}

function hmac(data, options = {}) {
    const { algorithm = "sha256", key = "", encoding = "hex" } = options;
    return crypto.createHmac(algorithm, key).update(data).digest(encoding);
}

// // # Crypto
// //
// // ### Install
// // ```
// // npm install @ndiing/crypto
// // ```
// //
// // ### CDN
// // ```
// // https://cdn.jsdelivr.net/gh/ndiing/crypto/crypto.js
// // ```
// //
// // ### Usage
// //
// // const crypto = require('@ndiing/crypto')
// var data = "message";
// var key = crypto.randomBytes(16).toString("hex");
// var iv = crypto.randomBytes(8).toString("hex");
// //
// var encrypted = encrypt(data, { key, iv });
// console.log(encrypted)
// console.log(decrypt(encrypted, { key, iv }));
// //
// var { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
//     modulusLength: 4096,
//     publicKeyEncoding: {
//         type: "spki",
//         format: "pem",
//     },
//     privateKeyEncoding: {
//         type: "pkcs8",
//         format: "pem",
//     },
// });
// var options={privateKey, publicKey}
// var data='message'
// //
// var encrypted = privateEncrypt(data, options);
// console.log(encrypted);
// console.log(publicDecrypt(encrypted, options));
// var encrypted = publicEncrypt(data, options);
// console.log(encrypted);
// console.log(privateDecrypt(encrypted, options));
// var signature=sign(encrypted, options)
// console.log(signature);
// console.log(verify(encrypted,signature, options));
// //
// var encoded=base64Encode('message')
// console.log(encoded)
// console.log(base64Decode(encoded))
// //
// var encoded=base64UrlEncode('message')
// console.log(encoded)
// console.log(base64UrlDecode(encoded))
// //
// console.log(hash("password"));
// console.log(hmac("password", { key: "secret" }));

const Crypto = {
    encrypt,
    decrypt,
    privateEncrypt,
    publicDecrypt,
    publicEncrypt,
    privateDecrypt,
    sign,
    verify,
    base64Encode,
    base64Decode,
    base64UrlEncode,
    base64UrlDecode,
    hash,
    hmac,
}
module.exports = Crypto;
// window.Crypto = Crypto;
