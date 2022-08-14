const crypto = require("crypto");
const base32Encode = require("base32-encode");
const base32Decode = require("base32-decode");

/**
 * ### Install
 * ```
 * npm install @ndiing/crypto
 * ```
 * @see {@link ./test.js}
 */
class Crypto {
    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String} options.algorithm=aes256
     * @param {String} options.key
     * @param {String} options.iv
     * @param {String} options.encoding=hex
     * @returns {String}
     */
    static encrypt(data, options = {}) {
        const { algorithm = "aes256", key, iv, encoding = "hex" } = options;
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        return Buffer.concat([cipher.update(data), cipher.final()]).toString(encoding);
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String} options.algorithm=aes256
     * @param {String} options.key
     * @param {String} options.iv
     * @param {String} options.encoding=hex
     * @returns {String}
     */
    static decrypt(data, options = {}) {
        const { algorithm = "aes256", key, iv, encoding = "hex" } = options;
        const cipher = crypto.createDecipheriv(algorithm, key, iv);
        return Buffer.concat([cipher.update(data, encoding), cipher.final()]).toString();
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String} options.privateKey
     * @param {String} options.encoding=hex
     * @returns {String}
     */
    static privateEncrypt(data, options = {}) {
        const { privateKey, encoding = "hex" } = options;
        const buffer = Buffer.from(data);
        return crypto.privateEncrypt(privateKey, buffer).toString(encoding);
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String} options.publicKey
     * @param {String} options.encoding=hex
     * @returns {String}
     */
    static publicDecrypt(data, options = {}) {
        const { publicKey, encoding = "hex" } = options;
        const buffer = Buffer.from(data, encoding);
        return crypto.publicDecrypt(publicKey, buffer).toString();
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String} options.publicKey
     * @param {String} options.encoding=hex
     * @returns {String}
     */
    static publicEncrypt(data, options = {}) {
        const { publicKey, encoding = "hex" } = options;
        const buffer = Buffer.from(data);
        return crypto.publicEncrypt(publicKey, buffer).toString(encoding);
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String} options.privateKey
     * @param {String} options.encoding=hex
     * @returns {String}
     */
    static privateDecrypt(data, options = {}) {
        const { privateKey, encoding = "hex" } = options;
        const buffer = Buffer.from(data, encoding);
        return crypto.privateDecrypt(privateKey, buffer).toString();
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String} options.algorithm=sha256
     * @param {String/Object} options.privateKey
     * @param {String} options.privateKey.key
     * @param {String} options.privateKey.padding
     * @param {String} options.privateKey.saltLength
     * @param {String} options.privateKey.dsaEncoding
     * @param {String} options.encoding=hex
     * @returns {String}
     */
    static sign(data, options = {}) {
        const { algorithm = "sha256", privateKey, encoding = "hex" } = options;
        const buffer = crypto.createSign(algorithm);
        buffer.write(data);
        buffer.end();
        return buffer.sign(privateKey, encoding);
    }

    /**
     *
     * @param {String} data
     * @param {String} signature
     * @param {Object} options
     * @param {String} options.algorithm=sha256
     * @param {String/Object} options.privateKey
     * @param {String} options.privateKey.key
     * @param {String} options.privateKey.padding
     * @param {String} options.privateKey.saltLength
     * @param {String} options.privateKey.dsaEncoding
     * @param {String} options.encoding=hex
     * @returns {String}
     */
    static verify(data, signature, options = {}) {
        const { algorithm = "sha256", privateKey, encoding = "hex" } = options;
        const buffer = crypto.createVerify(algorithm);
        buffer.write(data);
        buffer.end();
        return buffer.verify(privateKey, signature, encoding);
    }

    /**
     *
     * @param {String} data
     * @returns {String}
     */
    static base64Encode(data) {
        return Buffer.from(data).toString("base64");
    }

    /**
     *
     * @param {String} data
     * @returns {String}
     */
    static base64Decode(data) {
        return Buffer.from(data, "base64").toString();
    }

    /**
     *
     * @param {String} data
     * @returns {String}
     */
    static base64UrlEncode(data) {
        return Buffer.from(data).toString("base64url");
    }

    /**
     *
     * @param {String} data
     * @returns {String}
     */
    static base64UrlDecode(data) {
        return Buffer.from(data, "base64url").toString();
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String} options.algorithm=sha256
     * @param {String} options.encoding=hex
     * @returns {String}
     */
    static hash(data, options = {}) {
        const { algorithm = "sha256", encoding = "hex" } = options;
        return crypto.createHash(algorithm).update(data).digest(encoding);
    }

    /**
     *
     * @param {String} data
     * @param {Object} options
     * @param {String} options.algorithm=sha256
     * @param {String} options.key
     * @param {String} options.encoding=hex
     * @returns {String}
     */
    static hmac(data, options = {}) {
        const { algorithm = "sha256", key, encoding = "hex" } = options;
        return crypto.createHmac(algorithm, key).update(data).digest(encoding);
    }
}

/**
 * @param {String} input
 * @param {String} variant - `RFC3548`,`RFC4648`,`RFC4648-HEX`,`Crockford`
 * @method base32Encode
 */
Crypto.base32Encode = (input, variant = "RFC4648") => base32Encode(input, variant);

/**
 * @param {String} input
 * @param {String} variant - `RFC3548`,`RFC4648`,`RFC4648-HEX`,`Crockford`
 * @method base32Decode
 */
Crypto.base32Decode = (input, variant = "RFC4648") => base32Decode(input, variant);

module.exports = Crypto;

// jsdoc2md crypto/index.js > crypto/README.md
