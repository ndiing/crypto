const crypto = require("crypto");

/**
 * Todo description...
 * @example
 * // encode>decode base32
 * const encoded = Crypto.base32Encode("data");
 * console.log(encoded); //MRQXIYI=
 * const decoded = Crypto.base32Decode(encoded);
 * console.log(decoded); //data
 */
class Crypto {
    /**
     * Todo description...
     */
    static encrypt(data, options = {}) {
        const { algorithm = "aes256", key = "", iv = "", encoding = "hex" } = options;
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        return Buffer.concat([cipher.update(data), cipher.final()]).toString(encoding);
    }

    /**
     * Todo description...
     */
    static decrypt(data, options = {}) {
        const { algorithm = "aes256", key = "", iv = "", encoding = "hex" } = options;
        const cipher = crypto.createDecipheriv(algorithm, key, iv);
        return Buffer.concat([cipher.update(data, encoding), cipher.final()]).toString();
    }

    /**
     * Todo description...
     */
    static privateEncrypt(data, options = {}) {
        const { privateKey = "", encoding = "hex" } = options;
        data = Buffer.from(data);
        return crypto.privateEncrypt(privateKey, data).toString(encoding);
    }

    /**
     * Todo description...
     */
    static privateDecrypt(data, options = {}) {
        const { privateKey = "", encoding = "hex" } = options;
        data = Buffer.from(data, encoding);
        return crypto.privateDecrypt(privateKey, data).toString();
    }

    /**
     * Todo description...
     */
    static publicEncrypt(data, options = {}) {
        const { publicKey = "", encoding = "hex" } = options;
        data = Buffer.from(data);
        return crypto.publicEncrypt(publicKey, data).toString(encoding);
    }

    /**
     * Todo description...
     */
    static publicDecrypt(data, options = {}) {
        const { publicKey = "", encoding = "hex" } = options;
        data = Buffer.from(data, encoding);
        return crypto.publicDecrypt(publicKey, data).toString();
    }

    /**
     * Todo description...
     */
    static sign(data, options = {}) {
        const { algorithm = "sha256", privateKey = "", encoding = "hex" } = options;
        const writable = crypto.createSign(algorithm);
        writable.write(data);
        writable.end();
        return writable.sign(privateKey, encoding);
    }

    /**
     * Todo description...
     */
    static verify(data, signature, options = {}) {
        const { algorithm = "sha256", privateKey = "", encoding = "hex" } = options;
        const writable = crypto.createVerify(algorithm);
        writable.write(data);
        writable.end();
        return writable.verify(privateKey, signature, encoding);
    }

    /**
     * Todo description...
     */
    static hash(data, options = {}) {
        const { algorithm = "sha256", encoding = "hex" } = options;
        return crypto.createHash(algorithm).update(data).digest(encoding);
    }

    /**
     * Todo description...
     */
    static hmac(data, options = {}) {
        const { algorithm = "sha256", key = "", encoding = "hex" } = options;
        return crypto.createHmac(algorithm, key).update(data).digest(encoding);
    }

    /**
     * Todo description...
     */
    static base64Encode(data) {
        return Buffer.from(data).toString("base64");
    }

    /**
     * Todo description...
     */
    static base64Decode(data) {
        return Buffer.from(data, "base64").toString();
    }

    /**
     * Todo description...
     */
    static base64UrlEncode(data) {
        return Buffer.from(data).toString("base64Url");
    }

    /**
     * Todo description...
     */
    static base64UrlDecode(data) {
        return Buffer.from(data, "base64Url").toString();
    }

    /**
     * Todo description...
     * @see {@link https://www.rfc-editor.org/rfc/rfc4648}
     */
    static base32Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

    /**
     * Todo description...
     * @example
     * // encode>decode base32
     * const encoded = Crypto.base32Encode("data");
     * console.log(encoded); //MRQXIYI=
     * const decoded = Crypto.base32Decode(encoded);
     * console.log(decoded); //data
     * @param {String} data - data to be encoded to base32
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
     * Todo description...
     * @example
     * // encode>decode base32
     * const encoded = Crypto.base32Encode("data");
     * console.log(encoded); //MRQXIYI=
     * const decoded = Crypto.base32Decode(encoded);
     * console.log(decoded); //data
     * @param {String} data - encoded base32 data
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
