<a name="module_Crypto"></a>

## Crypto
Nodejs cryptography module### Install```npm i @ndiing/crypto```

**See**: [./examples/index.js](./examples/index.js)  

* [Crypto](#module_Crypto)
    * [~Crypto](#module_Crypto..Crypto)
        * [.encrypt(data, options)](#module_Crypto..Crypto.encrypt) ⇒ <code>String</code>
        * [.decrypt(data, options)](#module_Crypto..Crypto.decrypt) ⇒ <code>String</code>
        * [.privateEncrypt(data, options)](#module_Crypto..Crypto.privateEncrypt) ⇒ <code>String</code>
        * [.publicDecrypt(data, options)](#module_Crypto..Crypto.publicDecrypt) ⇒ <code>String</code>
        * [.publicEncrypt(data, options)](#module_Crypto..Crypto.publicEncrypt) ⇒ <code>String</code>
        * [.privateDecrypt(data, options)](#module_Crypto..Crypto.privateDecrypt) ⇒ <code>String</code>
        * [.sign(data)](#module_Crypto..Crypto.sign) ⇒ <code>String</code>
        * [.verify(data)](#module_Crypto..Crypto.verify) ⇒ <code>String</code>
        * [.base64Encode(data)](#module_Crypto..Crypto.base64Encode) ⇒ <code>String</code>
        * [.base64Decode(data)](#module_Crypto..Crypto.base64Decode) ⇒ <code>String</code>
        * [.base64UrlEncode(data)](#module_Crypto..Crypto.base64UrlEncode) ⇒ <code>String</code>
        * [.base64UrlDecode(data)](#module_Crypto..Crypto.base64UrlDecode) ⇒ <code>String</code>
        * [.hash(data, options)](#module_Crypto..Crypto.hash) ⇒ <code>String</code>
        * [.hmac(data, options)](#module_Crypto..Crypto.hmac) ⇒ <code>String</code>

<a name="module_Crypto..Crypto"></a>

### Crypto~Crypto
**Kind**: inner class of [<code>Crypto</code>](#module_Crypto)  

* [~Crypto](#module_Crypto..Crypto)
    * [.encrypt(data, options)](#module_Crypto..Crypto.encrypt) ⇒ <code>String</code>
    * [.decrypt(data, options)](#module_Crypto..Crypto.decrypt) ⇒ <code>String</code>
    * [.privateEncrypt(data, options)](#module_Crypto..Crypto.privateEncrypt) ⇒ <code>String</code>
    * [.publicDecrypt(data, options)](#module_Crypto..Crypto.publicDecrypt) ⇒ <code>String</code>
    * [.publicEncrypt(data, options)](#module_Crypto..Crypto.publicEncrypt) ⇒ <code>String</code>
    * [.privateDecrypt(data, options)](#module_Crypto..Crypto.privateDecrypt) ⇒ <code>String</code>
    * [.sign(data)](#module_Crypto..Crypto.sign) ⇒ <code>String</code>
    * [.verify(data)](#module_Crypto..Crypto.verify) ⇒ <code>String</code>
    * [.base64Encode(data)](#module_Crypto..Crypto.base64Encode) ⇒ <code>String</code>
    * [.base64Decode(data)](#module_Crypto..Crypto.base64Decode) ⇒ <code>String</code>
    * [.base64UrlEncode(data)](#module_Crypto..Crypto.base64UrlEncode) ⇒ <code>String</code>
    * [.base64UrlDecode(data)](#module_Crypto..Crypto.base64UrlDecode) ⇒ <code>String</code>
    * [.hash(data, options)](#module_Crypto..Crypto.hash) ⇒ <code>String</code>
    * [.hmac(data, options)](#module_Crypto..Crypto.hmac) ⇒ <code>String</code>

<a name="module_Crypto..Crypto.encrypt"></a>

#### Crypto.encrypt(data, options) ⇒ <code>String</code>
AES Encryption

**Kind**: static method of [<code>Crypto</code>](#module_Crypto..Crypto)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>String</code> |  | - |
| options | <code>Object</code> |  | - |
| [options.algorithm] | <code>String</code> | <code>aes256</code> | - |
| options.key | <code>String</code> |  | - |
| options.iv | <code>String</code> |  | - |
| [options.encoding] | <code>String</code> | <code>hex</code> | - |

<a name="module_Crypto..Crypto.decrypt"></a>

#### Crypto.decrypt(data, options) ⇒ <code>String</code>
AES Eecryption

**Kind**: static method of [<code>Crypto</code>](#module_Crypto..Crypto)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>String</code> |  | - |
| options | <code>Object</code> |  | - |
| [options.algorithm] | <code>String</code> | <code>aes256</code> | - |
| options.key | <code>String</code> |  | - |
| options.iv | <code>String</code> |  | - |
| [options.encoding] | <code>String</code> | <code>hex</code> | - |

<a name="module_Crypto..Crypto.privateEncrypt"></a>

#### Crypto.privateEncrypt(data, options) ⇒ <code>String</code>
RSA Private Encryption

**Kind**: static method of [<code>Crypto</code>](#module_Crypto..Crypto)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>String</code> |  | - |
| options | <code>Object</code> |  | - |
| options.privateKey | <code>String</code> |  | - |
| [options.encoding] | <code>String</code> | <code>hex</code> | - |

<a name="module_Crypto..Crypto.publicDecrypt"></a>

#### Crypto.publicDecrypt(data, options) ⇒ <code>String</code>
RSA Public Decryption

**Kind**: static method of [<code>Crypto</code>](#module_Crypto..Crypto)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>String</code> |  | - |
| options | <code>Object</code> |  | - |
| options.privateKey | <code>String</code> |  | - |
| [options.encoding] | <code>String</code> | <code>hex</code> | - |

<a name="module_Crypto..Crypto.publicEncrypt"></a>

#### Crypto.publicEncrypt(data, options) ⇒ <code>String</code>
RSA Private Decryption

**Kind**: static method of [<code>Crypto</code>](#module_Crypto..Crypto)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>String</code> |  | - |
| options | <code>Object</code> |  | - |
| options.privateKey | <code>String</code> |  | - |
| [options.encoding] | <code>String</code> | <code>hex</code> | - |

<a name="module_Crypto..Crypto.privateDecrypt"></a>

#### Crypto.privateDecrypt(data, options) ⇒ <code>String</code>
RSA Private Decryption

**Kind**: static method of [<code>Crypto</code>](#module_Crypto..Crypto)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>String</code> |  | - |
| options | <code>Object</code> |  | - |
| options.privateKey | <code>String</code> |  | - |
| [options.encoding] | <code>String</code> | <code>hex</code> | - |

<a name="module_Crypto..Crypto.sign"></a>

#### Crypto.sign(data) ⇒ <code>String</code>
Create Signature

**Kind**: static method of [<code>Crypto</code>](#module_Crypto..Crypto)  

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

<a name="module_Crypto..Crypto.verify"></a>

#### Crypto.verify(data) ⇒ <code>String</code>
Verify Signature

**Kind**: static method of [<code>Crypto</code>](#module_Crypto..Crypto)  

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

<a name="module_Crypto..Crypto.base64Encode"></a>

#### Crypto.base64Encode(data) ⇒ <code>String</code>
Base64 Encode

**Kind**: static method of [<code>Crypto</code>](#module_Crypto..Crypto)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>String</code> | - |

<a name="module_Crypto..Crypto.base64Decode"></a>

#### Crypto.base64Decode(data) ⇒ <code>String</code>
Base64 Decode

**Kind**: static method of [<code>Crypto</code>](#module_Crypto..Crypto)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>String</code> | - |

<a name="module_Crypto..Crypto.base64UrlEncode"></a>

#### Crypto.base64UrlEncode(data) ⇒ <code>String</code>
Base64URL Encode

**Kind**: static method of [<code>Crypto</code>](#module_Crypto..Crypto)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>String</code> | - |

<a name="module_Crypto..Crypto.base64UrlDecode"></a>

#### Crypto.base64UrlDecode(data) ⇒ <code>String</code>
Base64URL Decode

**Kind**: static method of [<code>Crypto</code>](#module_Crypto..Crypto)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>String</code> | - |

<a name="module_Crypto..Crypto.hash"></a>

#### Crypto.hash(data, options) ⇒ <code>String</code>
Create HASH

**Kind**: static method of [<code>Crypto</code>](#module_Crypto..Crypto)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>String</code> |  | - |
| options | <code>Object</code> |  | - |
| [options.algorithm] | <code>String</code> | <code>sha256</code> | - |
| [options.encoding] | <code>String</code> | <code>hex</code> | - |

<a name="module_Crypto..Crypto.hmac"></a>

#### Crypto.hmac(data, options) ⇒ <code>String</code>
Create HMAC

**Kind**: static method of [<code>Crypto</code>](#module_Crypto..Crypto)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>String</code> |  | - |
| options | <code>Object</code> |  | - |
| [options.algorithm] | <code>String</code> | <code>sha256</code> | - |
| options.key | <code>String</code> |  | - |
| [options.encoding] | <code>String</code> | <code>hex</code> | - |

