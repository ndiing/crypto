const crypto = require("crypto");

/**
 * Cryptography
 */
class Crypto {
    /**
     * AES Encryption
     * @param {String} data
     * @param {Object} options
     * @param {String} options.algorithm=aes256
     * @param {String} options.key
     * @param {String} options.iv
     * @param {String} options.encoding=hex
     * @returns {String}
     */
    static encrypt(data, options = {}) {
        const { algorithm = "aes256", key = "", iv = "", encoding = "hex" } = options;
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        return Buffer.concat([cipher.update(data), cipher.final()]).toString(encoding);
    }

    /**
     * AES Decryption
     * @param {String} data
     * @param {Object} options
     * @param {String} options.algorithm=aes256
     * @param {String} options.key
     * @param {String} options.iv
     * @param {String} options.encoding=hex
     * @returns {String}
     */
    static decrypt(data, options = {}) {
        const { algorithm = "aes256", key = "", iv = "", encoding = "hex" } = options;
        const cipher = crypto.createDecipheriv(algorithm, key, iv);
        return Buffer.concat([cipher.update(data, encoding), cipher.final()]).toString();
    }

    /**
     * RSA Private Encryption
     * @param {String} data
     * @param {Object} options
     * @param {String} options.privateKey
     * @param {String} options.encoding=hex
     * @returns {String}
     */
    static privateEncrypt(data, options = {}) {
        const { privateKey = "", encoding = "hex" } = options;
        data = Buffer.from(data);
        return crypto.privateEncrypt(privateKey, data).toString(encoding);
    }

    /**
     * RSA Private Decryption
     * @param {String} data
     * @param {Object} options
     * @param {String} options.privateKey
     * @param {String} options.encoding=hex
     * @returns {String}
     */
    static privateDecrypt(data, options = {}) {
        const { privateKey = "", encoding = "hex" } = options;
        data = Buffer.from(data, encoding);
        return crypto.privateDecrypt(privateKey, data).toString();
    }

    /**
     * RSA Public Encryption
     * @param {String} data
     * @param {Object} options
     * @param {String} options.privateKey
     * @param {String} options.encoding=hex
     * @returns {String}
     */
    static publicEncrypt(data, options = {}) {
        const { publicKey = "", encoding = "hex" } = options;
        data = Buffer.from(data);
        return crypto.publicEncrypt(publicKey, data).toString(encoding);
    }

    /**
     * RSA Public Decryption
     * @param {String} data
     * @param {Object} options
     * @param {String} options.privateKey
     * @param {String} options.encoding=hex
     * @returns {String}
     */
    static publicDecrypt(data, options = {}) {
        const { publicKey = "", encoding = "hex" } = options;
        data = Buffer.from(data, encoding);
        return crypto.publicDecrypt(publicKey, data).toString();
    }

    /**
     * Create Signature
     * @param {String} data
     * @param {Object} options
     * @param {String} options.algorithm=sha256
     * @param {String} options.privateKey
     * @param {String} options.encoding=hex
     * @returns {String}
     */
    static sign(data, options = {}) {
        const { algorithm = "sha256", privateKey = "", encoding = "hex" } = options;
        const writable = crypto.createSign(algorithm);
        writable.write(data);
        writable.end();
        return writable.sign(privateKey, encoding);
    }

    /**
     * Verify Signature
     * @param {String} data
     * @param {String} signature
     * @param {Object} options
     * @param {String} options.algorithm=sha256
     * @param {String} options.privateKey
     * @param {String} options.encoding=hex
     * @returns {String}
     */
    static verify(data, signature, options = {}) {
        const { algorithm = "sha256", privateKey = "", encoding = "hex" } = options;
        const writable = crypto.createVerify(algorithm);
        writable.write(data);
        writable.end();
        return writable.verify(privateKey, signature, encoding);
    }

    /**
     * HASH
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
     * HMAC
     * @param {String} data
     * @param {Object} options
     * @param {String} options.algorithm=sha256
     * @param {String} options.key
     * @param {String} options.encoding=hex
     * @returns {String}
     */
    static hmac(data, options = {}) {
        const { algorithm = "sha256", key = "", encoding = "hex" } = options;
        return crypto.createHmac(algorithm, key).update(data).digest(encoding);
    }

    /**
     * Base64 Encode
     * @param {String} data
     * @returns {String}
     */
    static base64Encode(data) {
        return Buffer.from(data).toString("base64");
    }

    /**
     * Base64 Decode
     * @param {String} data
     * @returns {String}
     */
    static base64Decode(data) {
        return Buffer.from(data, "base64").toString();
    }

    /**
     * Base64URL Encode
     * @param {String} data
     * @returns {String}
     */
    static base64UrlEncode(data) {
        return Buffer.from(data).toString("base64Url");
    }

    /**
     * Base64URL Decode
     * @param {String} data
     * @returns {String}
     */
    static base64UrlDecode(data) {
        return Buffer.from(data, "base64Url").toString();
    }

    // https://www.rfc-editor.org/rfc/rfc4648
    static base32Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

    /**
     * Base32 Encode
     * @param {String} data
     * @returns {String}
     */
    static base32Encode(data) {
        data = Buffer.from(data);

        let alphabet = this.base32Alphabet;
        let view = new DataView(data.buffer, data.byteOffset, data.byteLength);
        let bits = 0;
        let value = 0;
        let output = "";

        for (let i = 0; i < view.byteLength; i++) {
            value = (value << 8) | view.getUint8(i);
            bits += 8;

            while (bits >= 5) {
                output += alphabet[(value >>> (bits - 5)) & 31];
                bits -= 5;
            }
        }

        if (bits > 0) {
            output += alphabet[(value << (5 - bits)) & 31];
        }

        while (output.length % 8 !== 0) {
            output += "=";
        }

        return output;
    }

    /**
     * Base32 Decode
     * @param {String} data
     * @returns {String}
     */
    static base32Decode(data) {
        data = data.replace(/=+$/, "");

        let alphabet = this.base32Alphabet;
        let length = data.length;
        let bits = 0;
        let value = 0;
        let index = 0;
        let output = new Uint8Array(((length * 5) / 8) | 0);

        for (let i = 0; i < length; i++) {
            value = (value << 5) | alphabet.indexOf(data[i]);
            bits += 5;

            if (bits >= 8) {
                output[index++] = (value >>> (bits - 8)) & 255;
                bits -= 8;
            }
        }

        return Buffer.from(output).toString();
    }
}

module.exports = Crypto;
