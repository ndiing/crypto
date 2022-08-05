const crypto = require("crypto");

/**
 * Nodejs and Web Cryptography module
 * 
 * ### Install
 * ```
 * npm install @ndiing/crypto
 * ```
 * 
 * ### CDN
 * ```
 * https://cdn.jsdelivr.net/gh/ndiing/crypto/crypto.js
 * ```
 * @module crypto
 */

/**
 * AES Encryption
 * @param {String} data -
 * @param {Object} options -
 * @param {String} [options.algorithm=aes256] -
 * @param {String} options.key -
 * @param {String} options.iv -
 * @param {String} [options.encoding=hex] -
 * @returns {String}
 * @memberOf module:crypto
 */
function encrypt(data, options = {}) {
    const { algorithm = "aes256", key = "", iv = "", chunk = data, encoding = "hex" } = options;
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    return Buffer.concat([cipher.update(chunk), cipher.final()]).toString(encoding);
}

/**
 * AES Eecryption
 * @param {String} data -
 * @param {Object} options -
 * @param {String} [options.algorithm=aes256] -
 * @param {String} options.key -
 * @param {String} options.iv -
 * @param {String} [options.encoding=hex] -
 * @returns {String}
 * @memberOf module:crypto
 */
function decrypt(data, options = {}) {
    const { algorithm = "aes256", key = "", iv = "", chunk = data, encoding = "hex" } = options;
    const cipher = crypto.createDecipheriv(algorithm, key, iv);
    return Buffer.concat([cipher.update(chunk, encoding), cipher.final()]).toString();
}

/**
 * RSA Private Encryption
 * @param {String} data -
 * @param {Object} options -
 * @param {String} options.privateKey -
 * @param {String} [options.encoding=hex] -
 * @returns {String}
 * @memberOf module:crypto
 */
function privateEncrypt(data, options = {}) {
    const { privateKey = "", encoding = "hex" } = options;
    return crypto.privateEncrypt(privateKey, Buffer.from(data)).toString(encoding);
}

/**
 * RSA Public Decryption
 * @param {String} data -
 * @param {Object} options -
 * @param {String} options.privateKey -
 * @param {String} [options.encoding=hex] -
 * @returns {String}
 * @memberOf module:crypto
 */
function publicDecrypt(data, options = {}) {
    const { publicKey = "", encoding = "hex" } = options;
    return crypto.publicDecrypt(publicKey, Buffer.from(data, encoding)).toString();
}

/**
 * RSA Private Decryption
 * @param {String} data -
 * @param {Object} options -
 * @param {String} options.privateKey -
 * @param {String} [options.encoding=hex] -
 * @returns {String}
 * @memberOf module:crypto
 */
function publicEncrypt(data, options = {}) {
    const { publicKey = "", encoding = "hex" } = options;
    return crypto.publicEncrypt(publicKey, Buffer.from(data)).toString(encoding);
}

/**
 * RSA Private Decryption
 * @param {String} data -
 * @param {Object} options -
 * @param {String} options.privateKey -
 * @param {String} [options.encoding=hex] -
 * @returns {String}
 * @memberOf module:crypto
 */
function privateDecrypt(data, options = {}) {
    const { privateKey = "", encoding = "hex" } = options;
    return crypto.privateDecrypt(privateKey, Buffer.from(data, encoding)).toString();
}

/**
 * Create Signature
 * @param {String} data -
 * @param {String/Object} options.privateKey -
 * @param {String/String} options.privateKey.key -
 * @param {String/String} options.privateKey.dsaEncoding -
 * @param {String/String} options.privateKey.padding -
 * @param {String/String} options.privateKey.saltLength -
 * @param {String} [options.algorithm=sha256] -
 * @param {String} [options.encoding=hex] -
 * @returns {String}
 * @memberOf module:crypto
 */
function sign(data, options = {}) {
    const { privateKey = "", algorithm = "sha256", encoding = "hex" } = options;
    const buffer = crypto.createSign(algorithm);
    buffer.update(data);
    buffer.end();
    return buffer.sign(privateKey, encoding);
}

/**
 * Verify Signature
 * @param {String} data -
 * @param {String/Object} options.privateKey -
 * @param {String/String} options.privateKey.key -
 * @param {String/String} options.privateKey.dsaEncoding -
 * @param {String/String} options.privateKey.padding -
 * @param {String/String} options.privateKey.saltLength -
 * @param {String} [options.algorithm=sha256] -
 * @param {String} [options.encoding=hex] -
 * @returns {String}
 * @memberOf module:crypto
 */
function verify(data, signature, options = {}) {
    const { privateKey = "", algorithm = "sha256", encoding = "hex" } = options;
    const buffer = crypto.createVerify(algorithm);
    buffer.update(data);
    buffer.end();
    return buffer.verify(privateKey, signature, encoding);
}

/**
 * Base64 Encode
 * @param {String} data -
 * @returns {String}
 * @memberOf module:crypto
 */
function base64Encode(data) {
    return Buffer.from(data).toString("base64");
}

/**
 * Base64 Decode
 * @param {String} data -
 * @returns {String}
 * @memberOf module:crypto
 */
function base64Decode(data) {
    return Buffer.from(data, "base64").toString();
}

/**
 * Base64URL Encode
 * @param {String} data -
 * @returns {String}
 * @memberOf module:crypto
 */
function base64UrlEncode(data) {
    return Buffer.from(data).toString("base64url");
}

/**
 * Base64URL Decode
 * @param {String} data -
 * @returns {String}
 * @memberOf module:crypto
 */
function base64UrlDecode(data) {
    return Buffer.from(data, "base64url").toString();
}

/**
 * Create HASH
 * @param {String} data -
 * @param {Object} options -
 * @param {String} [options.algorithm=sha256] -
 * @param {String} [options.encoding=hex] -
 * @returns {String}
 * @memberOf module:crypto
 */
function hash(data, options = {}) {
    const { algorithm = "sha256", encoding = "hex" } = options;
    return crypto.createHash(algorithm).update(data).digest(encoding);
}

/**
 * Create HMAC
 * @param {String} data -
 * @param {Object} options -
 * @param {String} [options.algorithm=sha256] -
 * @param {String} options.key -
 * @param {String} [options.encoding=hex] -
 * @returns {String}
 * @memberOf module:crypto
 */
function hmac(data, options = {}) {
    const { algorithm = "sha256", key = "", encoding = "hex" } = options;
    return crypto.createHmac(algorithm, key).update(data).digest(encoding);
}

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
};
module.exports = Crypto;
// window.Crypto = Crypto;
