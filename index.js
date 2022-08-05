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
 * ### Usage
 * 
 * ```js
 * const Crypto = require('../index.js')
 *
 * var key = '40b48051b75df2e6b3d4ab1d47c12e3a'
 * var iv = '37ff47caa152cf56'
 * var options= {key,iv}
 *
 * var encrypted = Crypto.encrypt('data',options)
 * console.log(encrypted)
 *
 * var decrypted = Crypto.decrypt(encrypted,options)
 * console.log(decrypted)
 *
 * var privateKey=`-----BEGIN PRIVATE KEY-----
 * MIIJQgIBADANBgkqhkiG9w0BAQEFAASCCSwwggkoAgEAAoICAQDDh/dJ3tl1bgy1
 * C7YnTbvVoTOTQJM2F4nYxZIwSawGqja7rYHsTnbnV9xjgkN7gxvVt3n1DUbPjJ0X
 * Uy4wNNl/lJzTevANs0Llo4V9AOYjVd8vTbwB6Eez/uATqiT2yxTDQNHSN5u96WBE
 * qFnbjs688bbqVGp29nSZsNUDGBA6n/dq/CvIposHGF4TwGsqw5ZUiiS8n0wt/9Tf
 * n7jTbkfZlaH+0/HNXvsN2rIdNzFsIvA9xlw3hECHKh1+u3ACsgTqg5SGoK45Y83w
 * /WdSo/TS3yLZnKiw4lWNFngO3rIKKoxK1n5GCtD5rZ+1gdk8pUmZmU5xH6Y/EeMA
 * xjWbGWyg9fyLzH1d6IxQWIcgi843F1loNpBi6TWisSLoDELH+m8PdzH9LoTgsUe4
 * Amve3/2WfjrCQjaHGMLCreyQXokJd8Yb/Z7EJx5JY70iS7ylunoclt5FrvrZ0ZeZ
 * UZ3bkHof5A/zbGQ9oib6v8kGJrWUwim4LCP1fRENFT32ylFe9oojYyzR4E8UvPes
 * ru43cRVzJX7ts1EczKQXmlE0UqugaP7ibzq1xCwhSTA8du34egTZlKLk/1yT0GSY
 * XGyNGcYSerdd3P4HbKLuGBrCGKwIVfp3L1E/B6sCtQZ6iGowMii/No47650J8LNn
 * UJ7w59D3ONCPDjvKtq5xs2/kDHza0wIDAQABAoICAQCQxDgYn0ANq38JBDTHAMyT
 * LJjM60CTCfZrYkwMKF+PR7LiXWIWHTn3qptnqWhhJ/8RypgnEL9ep1Mfk9xcoKRv
 * yw4Znanh2tkqwFjy5hl+C/QER99s4hdEcu5gYNahSlaDAZjXtYg/oWw/KQ3uetsi
 * FSxCbmGs1mgZ6kyrz8MkRI+gzDd2haflhusQYKR3svu4d9cfOCnk3Mc1EkJ7d+kG
 * dbzMuQsL7Mifx02cR+L1lyCb/CMGj4pfCJVx4UDbHgZ5wxXSX2De6L/vLw6ypuV6
 * wu5Ag7Z5z/lbTklxaPwUftAEEK7JGPUEBsJ6VjsKpa3KZTEonDAv/gQ97IJ/5OEB
 * OAn0jcHm3YG0WLaM8GA8/QIyCW7BIU4P4OivZoOXWZ1x3cH0dDUIBurCG6L7BRgA
 * hHZT7hfggufan79FI/ybQxmneNgKfTYMWz5VCH47S4pUHicUA7YaImegDo3VWAhZ
 * 26r0YzxogT6POO6sQQxiG8vjaXI6dvD+JWyakW1VaasV2yCsnSPLYfD1F7VVFL5o
 * clb7dswZmmfd3cmAKfUY3Hhdt2Z0aertUu4eY+2B5p2AEZ6bmlZ8vFWjb/KcaOUf
 * rMPJSJCqJ468FSDGVHTxjkvDE7nXnAufqHIhh0xxWRJzsuvlQ5BfsU883z7m6qJC
 * j9/x3NQHdUQ0l5TXBJsaMQKCAQEA4wQraOvLfBAqCJec5UQ/W+r11S8+F85VZ52Y
 * q9TfOCzNCLM0fkma9bZcXADgc+hhfGSgUd4pY/Hu78nknDmF+uey713ERVxAg4y1
 * 52K8XjhH5VasvPol3xA3sR0GAjRocKw6dxgbqkKPNFHtPCWbiuETXyxf2PBzAVfW
 * YYP5avaCf2CEWgl2Psj3mwXE16RhH+hmEAGPmqn4MdH+PF8nMSNsKMiOUYq8+1I0
 * oVzLrxskWkMKx3bgkq9JQd13I5HRdaVBG7pk9TJ5/9EHss7Ss21hx9tlk3WBj80y
 * X1XzmP4JG6Hf8se7KcgsEoZzFUONV9+ELebe6nhTRn7u0Qng9QKCAQEA3H67HaY1
 * TmYAgKYowF/WVt2NjbQx6Z/ampaPkXV3EO4BVJzCxJbBmhUakwdA8OpeS1uUoBlQ
 * rl3Ya1h910y4qRDgjbEjZJwCApsaD8Vc4kogXohVz1QbJym9wTmu5O0fkP5x5o1a
 * /iIldi68kT9kmhIgTcQEjoJkKnHFSx7M3UGkgg2JP9NBNG7ubzjWqaxYQxEEepJ1
 * iQBg599W6AsEAoLIYYAH5UUZJMVCH25YELz0IfQnMzubsgUf+HRzbDK13JtkeXVs
 * 4fzhWaGo+xJu7OHkhRMhFLfdSMudr85ZFJqsdBbPAwc+STrocGs/0mYBpWphXcNN
 * m2vOx+QlDnHPpwKCAQAW8fTxRePrRjb5Z1mUUrGUuMrgIUZFYbWAI42q0Hk/VEfk
 * +Tf1C7t92lC7e9sz2+j+ia0qmSnV0D42PlG8+JNyKLkNOIz99bUPlslL+c7QNyAN
 * LhWHhEEPqrP2UtiooGNt//pozyb8rn2K7DzuN17hSp6KoBGP+72kBRzF/nDXPtMx
 * zK+T6iDpd6aPJKYgpZyrfPHT7FR3bXaIkpD/yR5M+SeVd6/qzfsL6+Ml7BsqN7QU
 * 63HLd1h7evwMjDXegn6JRYqvIsfRgKiUEqyUhhMFz6hyatp5bQcLYdIVkLpuXD7P
 * bC0WfNmN/4100eIP5CQFHbJecVdWm5LPLUU2G6mBAoIBAGrT28RZqqn5MXUjC8to
 * o2gin1pwW15dXIRZPeWzi6RgK7Ta3mJwyAvm/aEOeqA+bMEF9dQ7b6OLRDd+ADo3
 * qZ//1UvQ7tzn2PF6Q/4wGPhqAZTLaQeyMBWhW5YqZFn1qL2PCZAyHEvUL2I68pFM
 * rWkYLx5+Qdbpxa3qwTPMEGWCUDnSZRTPPWAx/sNUPmymW3zi2dCo9NkTnd+5jVmP
 * PLoaswrKBQlHmQ7/ozGnPHOfmIh6yiNAVgbCBONTSDi7uPDROLS/96jl5CiQ8lXy
 * cFvEdfsjcXugOU3zmMp8pxwcdEEqa9GDyOGh8MvGqn09fr6t886BuS/744tlNa7x
 * 5TECggEAWIqESj36kq05c5XRZCQfzEJn6POgW5JTwxHcy8F4RSZ7Y+YHFk73mzR/
 * eW4VQRHdaIV1bFFt4qjbJ8wNIgJGIX3I8FF6qhNVXlRvGqf+tpWJ78+QGQBl5HTz
 * iYb0rPUD/pw7ISghg9S2T00h4vhcx5M/BNECe415vufWQVlWLOkf9bBB2wVZ57S/
 * l/ZuO9lo0AIB0oIAI0pAz2zxzoiM1u5LVzoj68JeK13jjgLsiMjQ/YX9Z4xLSR9n
 * YnXXd6eDjpepPfyAODWOAvU5hYY66vRsTCQcSQhjGZIfY4+pMX38xLYAPfVnKqPU
 * 5MiLPfgAVxZNpB8vcOC4qzxLpV74tw==
 * -----END PRIVATE KEY-----`
 * var publicKey=`-----BEGIN PUBLIC KEY-----
 * MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAw4f3Sd7ZdW4MtQu2J027
 * 1aEzk0CTNheJ2MWSMEmsBqo2u62B7E5251fcY4JDe4Mb1bd59Q1Gz4ydF1MuMDTZ
 * f5Sc03rwDbNC5aOFfQDmI1XfL028AehHs/7gE6ok9ssUw0DR0jebvelgRKhZ247O
 * vPG26lRqdvZ0mbDVAxgQOp/3avwryKaLBxheE8BrKsOWVIokvJ9MLf/U35+4025H
 * 2ZWh/tPxzV77DdqyHTcxbCLwPcZcN4RAhyodfrtwArIE6oOUhqCuOWPN8P1nUqP0
 * 0t8i2ZyosOJVjRZ4Dt6yCiqMStZ+RgrQ+a2ftYHZPKVJmZlOcR+mPxHjAMY1mxls
 * oPX8i8x9XeiMUFiHIIvONxdZaDaQYuk1orEi6AxCx/pvD3cx/S6E4LFHuAJr3t/9
 * ln46wkI2hxjCwq3skF6JCXfGG/2exCceSWO9Iku8pbp6HJbeRa762dGXmVGd25B6
 * H+QP82xkPaIm+r/JBia1lMIpuCwj9X0RDRU99spRXvaKI2Ms0eBPFLz3rK7uN3EV
 * cyV+7bNRHMykF5pRNFKroGj+4m86tcQsIUkwPHbt+HoE2ZSi5P9ck9BkmFxsjRnG
 * Enq3Xdz+B2yi7hgawhisCFX6dy9RPwerArUGeohqMDIovzaOO+udCfCzZ1Ce8OfQ
 * 9zjQjw47yraucbNv5Ax82tMCAwEAAQ==
 * -----END PUBLIC KEY-----`
 * var options={privateKey,publicKey}
 *
 * var privateEncrypted = Crypto.privateEncrypt('data',options)
 * console.log(privateEncrypted)
 *
 * var publicDecrypted = Crypto.publicDecrypt(privateEncrypted,options)
 * console.log(publicDecrypted)
 *
 * var publicEncrypted = Crypto.publicEncrypt('data',options)
 * console.log(publicEncrypted)
 *
 * var privateDecrypted = Crypto.privateDecrypt(publicEncrypted,options)
 * console.log(privateDecrypted)
 *
 * var signature = Crypto.sign('data',options)
 * console.log(signature)
 *
 * var verified = Crypto.verify('data',signature,options)
 * console.log(verified)
 *
 * var base64Encoded = Crypto.base64Encode('data')
 * console.log(base64Encoded)
 *
 * var base64Decoded = Crypto.base64Decode(base64Encoded)
 * console.log(base64Decoded)
 *
 * var base64UrlEncoded = Crypto.base64UrlEncode('data')
 * console.log(base64UrlEncoded)
 *
 * var base64UrlDecoded = Crypto.base64UrlDecode(base64UrlEncoded)
 * console.log(base64UrlDecoded)
 *
 * var hashed = Crypto.hash('data')
 * console.log(hashed)
 *
 * var hmaced = Crypto.hmac('data')
 * console.log(hmaced)
 * ```
 * 
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
 */
function base64Encode(data) {
    return Buffer.from(data).toString("base64");
}

/**
 * Base64 Decode
 * @param {String} data -
 * @returns {String}
 */
function base64Decode(data) {
    return Buffer.from(data, "base64").toString();
}

/**
 * Base64URL Encode
 * @param {String} data -
 * @returns {String}
 */
function base64UrlEncode(data) {
    return Buffer.from(data).toString("base64url");
}

/**
 * Base64URL Decode
 * @param {String} data -
 * @returns {String}
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
