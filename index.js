const crypto = require("crypto");

class Crypto {
    static encrypt(data, options = {}) {
        const { algorithm = "aes256", key = "", iv = "", chunk = data, encoding = "hex" } = options;
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        return Buffer.concat([cipher.update(chunk), cipher.final()]).toString(encoding);
    }

    static decrypt(data, options = {}) {
        const { algorithm = "aes256", key = "", iv = "", chunk = data, encoding = "hex" } = options;
        const cipher = crypto.createDecipheriv(algorithm, key, iv);
        return Buffer.concat([cipher.update(chunk, encoding), cipher.final()]).toString();
    }

    static privateEncrypt(data, options = {}) {
        const { privateKey = "", encoding = "hex" } = options;
        return crypto.privateEncrypt(privateKey, Buffer.from(data)).toString(encoding);
    }

    static publicDecrypt(data, options = {}) {
        const { publicKey = "", encoding = "hex" } = options;
        return crypto.publicDecrypt(publicKey, Buffer.from(data, encoding)).toString();
    }

    static publicEncrypt(data, options = {}) {
        const { publicKey = "", encoding = "hex" } = options;
        return crypto.publicEncrypt(publicKey, Buffer.from(data)).toString(encoding);
    }

    static privateDecrypt(data, options = {}) {
        const { privateKey = "", encoding = "hex" } = options;
        return crypto.privateDecrypt(privateKey, Buffer.from(data, encoding)).toString();
    }

    static sign(data, options = {}) {
        const { algorithm = "sha256", encoding = "hex" } = options;
        const buffer = crypto.createSign(algorithm);
        buffer.update(data);
        buffer.end();
        return buffer.sign(privateKey, encoding);
    }

    static verify(data, signature, options = {}) {
        const { algorithm = "sha256", encoding = "hex" } = options;
        const buffer = crypto.createVerify(algorithm);
        buffer.update(data);
        buffer.end();
        return buffer.verify(privateKey, signature, encoding);
    }

    static base64Encode(data) {
        return Buffer.from(data).toString("base64");
    }

    static base64Decode(data) {
        return Buffer.from(data, "base64").toString();
    }

    static base64UrlEncode(data) {
        return Buffer.from(data).toString("base64url");
    }

    static base64UrlDecode(data) {
        return Buffer.from(data, "base64url").toString();
    }

    static hash(data, options = {}) {
        const { algorithm = "sha256", encoding = "hex" } = options;
        return crypto.createHash(algorithm).update(data).digest(encoding);
    }

    static hmac(data, options = {}) {
        const { algorithm = "sha256", key = "", encoding = "hex" } = options;
        return crypto.createHmac(algorithm, key).update(data).digest(encoding);
    }
}
// // Crypto
// //
// // Usage
// //
// var data = "message";
// var key = crypto.randomBytes(16).toString("hex");
// var iv = crypto.randomBytes(8).toString("hex");
// //
// var encrypted = Crypto.encrypt(data, { key, iv });
// console.log(encrypted)
// console.log(Crypto.decrypt(encrypted, { key, iv }));
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
// var encrypted = Crypto.privateEncrypt(data, options);
// console.log(encrypted);
// console.log(Crypto.publicDecrypt(encrypted, options));
// var encrypted = Crypto.publicEncrypt(data, options);
// console.log(encrypted);
// console.log(Crypto.privateDecrypt(encrypted, options));
// var signature=Crypto.sign(encrypted, options)
// console.log(signature);
// console.log(Crypto.verify(encrypted,signature, options));
// //
// var encoded=Crypto.base64Encode('message')
// console.log(encoded)
// console.log(Crypto.base64Decode(encoded))
// //
// var encoded=Crypto.base64UrlEncode('message')
// console.log(encoded)
// console.log(Crypto.base64UrlDecode(encoded))
// //
// console.log(Crypto.hash("password"));
// console.log(Crypto.hmac("password", { key: "secret" }));

module.exports = Crypto;
