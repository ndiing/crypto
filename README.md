<a name="Crypto"></a>

## Crypto
### Install```npm install @ndiing/crypto```

**Kind**: global class  
**See**: [./test.js](./test.js)  

* [Crypto](#Crypto)
    * [.encrypt(data, options)](#Crypto.encrypt) ⇒ <code>String</code>
    * [.decrypt(data, options)](#Crypto.decrypt) ⇒ <code>String</code>
    * [.privateEncrypt(data, options)](#Crypto.privateEncrypt) ⇒ <code>String</code>
    * [.publicDecrypt(data, options)](#Crypto.publicDecrypt) ⇒ <code>String</code>
    * [.publicEncrypt(data, options)](#Crypto.publicEncrypt) ⇒ <code>String</code>
    * [.privateDecrypt(data, options)](#Crypto.privateDecrypt) ⇒ <code>String</code>
    * [.sign(data, options)](#Crypto.sign) ⇒ <code>String</code>
    * [.verify(data, signature, options)](#Crypto.verify) ⇒ <code>String</code>
    * [.base64Encode(data)](#Crypto.base64Encode) ⇒ <code>String</code>
    * [.base64Decode(data)](#Crypto.base64Decode) ⇒ <code>String</code>
    * [.base64UrlEncode(data)](#Crypto.base64UrlEncode) ⇒ <code>String</code>
    * [.base64UrlDecode(data)](#Crypto.base64UrlDecode) ⇒ <code>String</code>
    * [.hash(data, options)](#Crypto.hash) ⇒ <code>String</code>
    * [.hmac(data, options)](#Crypto.hmac) ⇒ <code>String</code>
    * [.base32Encode(data, variant)](#Crypto.base32Encode) ⇒ <code>String</code>
    * [.base32Decode(input, variant)](#Crypto.base32Decode) ⇒ <code>String</code>

<a name="Crypto.encrypt"></a>

### Crypto.encrypt(data, options) ⇒ <code>String</code>
**Kind**: static method of [<code>Crypto</code>](#Crypto)  

| Param | Type | Default |
| --- | --- | --- |
| data | <code>String</code> |  | 
| options | <code>Object</code> |  | 
| options.algorithm | <code>String</code> | <code>aes256</code> | 
| options.key | <code>String</code> |  | 
| options.iv | <code>String</code> |  | 
| options.encoding | <code>String</code> | <code>hex</code> | 

<a name="Crypto.decrypt"></a>

### Crypto.decrypt(data, options) ⇒ <code>String</code>
**Kind**: static method of [<code>Crypto</code>](#Crypto)  

| Param | Type | Default |
| --- | --- | --- |
| data | <code>String</code> |  | 
| options | <code>Object</code> |  | 
| options.algorithm | <code>String</code> | <code>aes256</code> | 
| options.key | <code>String</code> |  | 
| options.iv | <code>String</code> |  | 
| options.encoding | <code>String</code> | <code>hex</code> | 

<a name="Crypto.privateEncrypt"></a>

### Crypto.privateEncrypt(data, options) ⇒ <code>String</code>
**Kind**: static method of [<code>Crypto</code>](#Crypto)  

| Param | Type | Default |
| --- | --- | --- |
| data | <code>String</code> |  | 
| options | <code>Object</code> |  | 
| options.privateKey | <code>String</code> |  | 
| options.encoding | <code>String</code> | <code>hex</code> | 

<a name="Crypto.publicDecrypt"></a>

### Crypto.publicDecrypt(data, options) ⇒ <code>String</code>
**Kind**: static method of [<code>Crypto</code>](#Crypto)  

| Param | Type | Default |
| --- | --- | --- |
| data | <code>String</code> |  | 
| options | <code>Object</code> |  | 
| options.publicKey | <code>String</code> |  | 
| options.encoding | <code>String</code> | <code>hex</code> | 

<a name="Crypto.publicEncrypt"></a>

### Crypto.publicEncrypt(data, options) ⇒ <code>String</code>
**Kind**: static method of [<code>Crypto</code>](#Crypto)  

| Param | Type | Default |
| --- | --- | --- |
| data | <code>String</code> |  | 
| options | <code>Object</code> |  | 
| options.publicKey | <code>String</code> |  | 
| options.encoding | <code>String</code> | <code>hex</code> | 

<a name="Crypto.privateDecrypt"></a>

### Crypto.privateDecrypt(data, options) ⇒ <code>String</code>
**Kind**: static method of [<code>Crypto</code>](#Crypto)  

| Param | Type | Default |
| --- | --- | --- |
| data | <code>String</code> |  | 
| options | <code>Object</code> |  | 
| options.privateKey | <code>String</code> |  | 
| options.encoding | <code>String</code> | <code>hex</code> | 

<a name="Crypto.sign"></a>

### Crypto.sign(data, options) ⇒ <code>String</code>
**Kind**: static method of [<code>Crypto</code>](#Crypto)  

| Param | Type | Default |
| --- | --- | --- |
| data | <code>String</code> |  | 
| options | <code>Object</code> |  | 
| options.algorithm | <code>String</code> | <code>sha256</code> | 
| options.privateKey | <code>String/Object</code> |  | 
| options.privateKey.key | <code>String</code> |  | 
| options.privateKey.padding | <code>String</code> |  | 
| options.privateKey.saltLength | <code>String</code> |  | 
| options.privateKey.dsaEncoding | <code>String</code> |  | 
| options.encoding | <code>String</code> | <code>hex</code> | 

<a name="Crypto.verify"></a>

### Crypto.verify(data, signature, options) ⇒ <code>String</code>
**Kind**: static method of [<code>Crypto</code>](#Crypto)  

| Param | Type | Default |
| --- | --- | --- |
| data | <code>String</code> |  | 
| signature | <code>String</code> |  | 
| options | <code>Object</code> |  | 
| options.algorithm | <code>String</code> | <code>sha256</code> | 
| options.privateKey | <code>String/Object</code> |  | 
| options.privateKey.key | <code>String</code> |  | 
| options.privateKey.padding | <code>String</code> |  | 
| options.privateKey.saltLength | <code>String</code> |  | 
| options.privateKey.dsaEncoding | <code>String</code> |  | 
| options.encoding | <code>String</code> | <code>hex</code> | 

<a name="Crypto.base64Encode"></a>

### Crypto.base64Encode(data) ⇒ <code>String</code>
**Kind**: static method of [<code>Crypto</code>](#Crypto)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 

<a name="Crypto.base64Decode"></a>

### Crypto.base64Decode(data) ⇒ <code>String</code>
**Kind**: static method of [<code>Crypto</code>](#Crypto)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 

<a name="Crypto.base64UrlEncode"></a>

### Crypto.base64UrlEncode(data) ⇒ <code>String</code>
**Kind**: static method of [<code>Crypto</code>](#Crypto)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 

<a name="Crypto.base64UrlDecode"></a>

### Crypto.base64UrlDecode(data) ⇒ <code>String</code>
**Kind**: static method of [<code>Crypto</code>](#Crypto)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 

<a name="Crypto.hash"></a>

### Crypto.hash(data, options) ⇒ <code>String</code>
**Kind**: static method of [<code>Crypto</code>](#Crypto)  

| Param | Type | Default |
| --- | --- | --- |
| data | <code>String</code> |  | 
| options | <code>Object</code> |  | 
| options.algorithm | <code>String</code> | <code>sha256</code> | 
| options.encoding | <code>String</code> | <code>hex</code> | 

<a name="Crypto.hmac"></a>

### Crypto.hmac(data, options) ⇒ <code>String</code>
**Kind**: static method of [<code>Crypto</code>](#Crypto)  

| Param | Type | Default |
| --- | --- | --- |
| data | <code>String</code> |  | 
| options | <code>Object</code> |  | 
| options.algorithm | <code>String</code> | <code>sha256</code> | 
| options.key | <code>String</code> |  | 
| options.encoding | <code>String</code> | <code>hex</code> | 

<a name="Crypto.base32Encode"></a>

### Crypto.base32Encode(data, variant) ⇒ <code>String</code>
**Kind**: static method of [<code>Crypto</code>](#Crypto)  

| Param | Type |
| --- | --- |
| data | <code>String</code> | 
| variant | <code>String</code> | 

<a name="Crypto.base32Decode"></a>

### Crypto.base32Decode(input, variant) ⇒ <code>String</code>
**Kind**: static method of [<code>Crypto</code>](#Crypto)  

| Param | Type |
| --- | --- |
| input | <code>String</code> | 
| variant | <code>String</code> | 

