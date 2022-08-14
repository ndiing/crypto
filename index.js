const crypto = require("crypto");

function toDataView(data) {
    if (data instanceof Int8Array || data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
        return new DataView(data.buffer, data.byteOffset, data.byteLength);
    }

    if (data instanceof ArrayBuffer) {
        return new DataView(data);
    }

    throw new TypeError("Expected `data` to be an ArrayBuffer, Buffer, Int8Array, Uint8Array or Uint8ClampedArray");
}

const RFC4648 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
const RFC4648_HEX = "0123456789ABCDEFGHIJKLMNOPQRSTUV";
const CROCKFORD = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";

function base32Encode(data, variant = "RFC4648", options) {
    data = Buffer.from(data);//+
    options = options || {};
    let alphabet, defaultPadding;

    switch (variant) {
        case "RFC3548":
        case "RFC4648":
            alphabet = RFC4648;
            defaultPadding = true;
            break;
        case "RFC4648-HEX":
            alphabet = RFC4648_HEX;
            defaultPadding = true;
            break;
        case "Crockford":
            alphabet = CROCKFORD;
            defaultPadding = false;
            break;
        default:
            throw new Error("Unknown base32 variant: " + variant);
    }

    const padding = options.padding !== undefined ? options.padding : defaultPadding;
    const view = toDataView(data);

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

    if (padding) {
        while (output.length % 8 !== 0) {
            output += "=";
        }
    }

    return output;
}

function readChar(alphabet, char) {
    var idx = alphabet.indexOf(char);

    if (idx === -1) {
        throw new Error("Invalid character found: " + char);
    }

    return idx;
}

function base32Decode(input, variant = "RFC4648") {
    var alphabet;

    switch (variant) {
        case "RFC3548":
        case "RFC4648":
            alphabet = RFC4648;
            input = input.replace(/=+$/, "");
            break;
        case "RFC4648-HEX":
            alphabet = RFC4648_HEX;
            input = input.replace(/=+$/, "");
            break;
        case "Crockford":
            alphabet = CROCKFORD;
            input = input.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1");
            break;
        default:
            throw new Error("Unknown base32 variant: " + variant);
    }

    var length = input.length;

    var bits = 0;
    var value = 0;

    var index = 0;
    var output = new Uint8Array(((length * 5) / 8) | 0);

    for (var i = 0; i < length; i++) {
        value = (value << 5) | readChar(alphabet, input[i]);
        bits += 5;

        if (bits >= 8) {
            output[index++] = (value >>> (bits - 8)) & 255;
            bits -= 8;
        }
    }

    return Buffer.from(output.buffer).toString();//+
    // return output.buffer
}

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

    /**
     *
     * @param {String} data
     * @param {String} variant
     * @returns {String}
     */
    static base32Encode(...args) {
        return base32Encode(...args);
    }

    /**
     *
     * @param {String} input
     * @param {String} variant
     * @returns {String}
     */
    static base32Decode(...args) {
        return base32Decode(...args);
    }
}

module.exports = Crypto;

// jsdoc2md crypto/index.js > crypto/README.md
