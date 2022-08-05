<a name="module_crypto"></a>

## crypto
Nodejs and Web Cryptography module### Install```npm install @ndiing/crypto```### CDN```https://cdn.jsdelivr.net/gh/ndiing/crypto/crypto.js```


* [crypto](#module_crypto)
    * [~encrypt(data, options)](#module_crypto..encrypt) ⇒ <code>String</code>
    * [~decrypt(data, options)](#module_crypto..decrypt) ⇒ <code>String</code>
    * [~privateEncrypt(data, options)](#module_crypto..privateEncrypt) ⇒ <code>String</code>
    * [~publicDecrypt(data, options)](#module_crypto..publicDecrypt) ⇒ <code>String</code>
    * [~publicEncrypt(data, options)](#module_crypto..publicEncrypt) ⇒ <code>String</code>
    * [~privateDecrypt(data, options)](#module_crypto..privateDecrypt) ⇒ <code>String</code>
    * [~sign(data)](#module_crypto..sign) ⇒ <code>String</code>
    * [~verify(data)](#module_crypto..verify) ⇒ <code>String</code>
    * [~base64Encode(data)](#module_crypto..base64Encode) ⇒ <code>String</code>
    * [~base64Decode(data)](#module_crypto..base64Decode) ⇒ <code>String</code>
    * [~base64UrlEncode(data)](#module_crypto..base64UrlEncode) ⇒ <code>String</code>
    * [~base64UrlDecode(data)](#module_crypto..base64UrlDecode) ⇒ <code>String</code>
    * [~hash(data, options)](#module_crypto..hash) ⇒ <code>String</code>
    * [~hmac(data, options)](#module_crypto..hmac) ⇒ <code>String</code>

<a name="module_crypto..encrypt"></a>

### crypto~encrypt(data, options) ⇒ <code>String</code>
AES Encryption

**Kind**: inner method of [<code>crypto</code>](#module_crypto)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>String</code> |  | - |
| options | <code>Object</code> |  | - |
| [options.algorithm] | <code>String</code> | <code>aes256</code> | - |
| options.key | <code>String</code> |  | - |
| options.iv | <code>String</code> |  | - |
| [options.encoding] | <code>String</code> | <code>hex</code> | - |

<a name="module_crypto..decrypt"></a>

### crypto~decrypt(data, options) ⇒ <code>String</code>
AES Eecryption

**Kind**: inner method of [<code>crypto</code>](#module_crypto)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>String</code> |  | - |
| options | <code>Object</code> |  | - |
| [options.algorithm] | <code>String</code> | <code>aes256</code> | - |
| options.key | <code>String</code> |  | - |
| options.iv | <code>String</code> |  | - |
| [options.encoding] | <code>String</code> | <code>hex</code> | - |

<a name="module_crypto..privateEncrypt"></a>

### crypto~privateEncrypt(data, options) ⇒ <code>String</code>
RSA Private Encryption

**Kind**: inner method of [<code>crypto</code>](#module_crypto)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>String</code> |  | - |
| options | <code>Object</code> |  | - |
| options.privateKey | <code>String</code> |  | - |
| [options.encoding] | <code>String</code> | <code>hex</code> | - |

<a name="module_crypto..publicDecrypt"></a>

### crypto~publicDecrypt(data, options) ⇒ <code>String</code>
RSA Public Decryption

**Kind**: inner method of [<code>crypto</code>](#module_crypto)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>String</code> |  | - |
| options | <code>Object</code> |  | - |
| options.privateKey | <code>String</code> |  | - |
| [options.encoding] | <code>String</code> | <code>hex</code> | - |

<a name="module_crypto..publicEncrypt"></a>

### crypto~publicEncrypt(data, options) ⇒ <code>String</code>
RSA Private Decryption

**Kind**: inner method of [<code>crypto</code>](#module_crypto)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>String</code> |  | - |
| options | <code>Object</code> |  | - |
| options.privateKey | <code>String</code> |  | - |
| [options.encoding] | <code>String</code> | <code>hex</code> | - |

<a name="module_crypto..privateDecrypt"></a>

### crypto~privateDecrypt(data, options) ⇒ <code>String</code>
RSA Private Decryption

**Kind**: inner method of [<code>crypto</code>](#module_crypto)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>String</code> |  | - |
| options | <code>Object</code> |  | - |
| options.privateKey | <code>String</code> |  | - |
| [options.encoding] | <code>String</code> | <code>hex</code> | - |

<a name="module_crypto..sign"></a>

### crypto~sign(data) ⇒ <code>String</code>
Create Signature

**Kind**: inner method of [<code>crypto</code>](#module_crypto)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>String</code> |  | - |
| options.privateKey | <code>String/Object</code> |  | - |
| options.privateKey.key | <code>String/String</code> |  | - |
| options.privateKey.dsaEncoding | <code>String/String</code> |  | - |
| options.privateKey.padding | <code>String/String</code> |  | - |
| options.privateKey.saltLength | <code>String/String</code> |  | - |
| [options.algorithm] | <code>String</code> | <code>sha256</code> | - |
| [options.encoding] | <code>String</code> | <code>hex</code> | - |

<a name="module_crypto..verify"></a>

### crypto~verify(data) ⇒ <code>String</code>
Verify Signature

**Kind**: inner method of [<code>crypto</code>](#module_crypto)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>String</code> |  | - |
| options.privateKey | <code>String/Object</code> |  | - |
| options.privateKey.key | <code>String/String</code> |  | - |
| options.privateKey.dsaEncoding | <code>String/String</code> |  | - |
| options.privateKey.padding | <code>String/String</code> |  | - |
| options.privateKey.saltLength | <code>String/String</code> |  | - |
| [options.algorithm] | <code>String</code> | <code>sha256</code> | - |
| [options.encoding] | <code>String</code> | <code>hex</code> | - |

<a name="module_crypto..base64Encode"></a>

### crypto~base64Encode(data) ⇒ <code>String</code>
Base64 Encode

**Kind**: inner method of [<code>crypto</code>](#module_crypto)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>String</code> | - |

<a name="module_crypto..base64Decode"></a>

### crypto~base64Decode(data) ⇒ <code>String</code>
Base64 Decode

**Kind**: inner method of [<code>crypto</code>](#module_crypto)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>String</code> | - |

<a name="module_crypto..base64UrlEncode"></a>

### crypto~base64UrlEncode(data) ⇒ <code>String</code>
Base64URL Encode

**Kind**: inner method of [<code>crypto</code>](#module_crypto)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>String</code> | - |

<a name="module_crypto..base64UrlDecode"></a>

### crypto~base64UrlDecode(data) ⇒ <code>String</code>
Base64URL Decode

**Kind**: inner method of [<code>crypto</code>](#module_crypto)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>String</code> | - |

<a name="module_crypto..hash"></a>

### crypto~hash(data, options) ⇒ <code>String</code>
Create HASH

**Kind**: inner method of [<code>crypto</code>](#module_crypto)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>String</code> |  | - |
| options | <code>Object</code> |  | - |
| [options.algorithm] | <code>String</code> | <code>sha256</code> | - |
| [options.encoding] | <code>String</code> | <code>hex</code> | - |

<a name="module_crypto..hmac"></a>

### crypto~hmac(data, options) ⇒ <code>String</code>
Create HMAC

**Kind**: inner method of [<code>crypto</code>](#module_crypto)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>String</code> |  | - |
| options | <code>Object</code> |  | - |
| [options.algorithm] | <code>String</code> | <code>sha256</code> | - |
| options.key | <code>String</code> |  | - |
| [options.encoding] | <code>String</code> | <code>hex</code> | - |

