
# Crypto





## [Methods]()

<!-- _Methods._ -->


### Crypto.encrypt()

AES Encryption

#### [Syntax]()

    encrypt(data,options)

##### [Parameters]()

name|type|defaultvalue
---|---|---
data|`String`|
options|`Object`|
options.algorithm|`String`|aes256
options.key|`String`|
options.iv|`String`|
options.encoding|`String`|hex

##### [Return value]()

`String`

### Crypto.decrypt()

AES Decryption

#### [Syntax]()

    decrypt(data,options)

##### [Parameters]()

name|type|defaultvalue
---|---|---
data|`String`|
options|`Object`|
options.algorithm|`String`|aes256
options.key|`String`|
options.iv|`String`|
options.encoding|`String`|hex

##### [Return value]()

`String`

### Crypto.privateEncrypt()

RSA Private Encryption

#### [Syntax]()

    privateEncrypt(data,options)

##### [Parameters]()

name|type|defaultvalue
---|---|---
data|`String`|
options|`Object`|
options.privateKey|`String`|
options.encoding|`String`|hex

##### [Return value]()

`String`

### Crypto.privateDecrypt()

RSA Private Decryption

#### [Syntax]()

    privateDecrypt(data,options)

##### [Parameters]()

name|type|defaultvalue
---|---|---
data|`String`|
options|`Object`|
options.privateKey|`String`|
options.encoding|`String`|hex

##### [Return value]()

`String`

### Crypto.publicEncrypt()

RSA Public Encryption

#### [Syntax]()

    publicEncrypt(data,options)

##### [Parameters]()

name|type|defaultvalue
---|---|---
data|`String`|
options|`Object`|
options.privateKey|`String`|
options.encoding|`String`|hex

##### [Return value]()

`String`

### Crypto.publicDecrypt()

RSA Public Decryption

#### [Syntax]()

    publicDecrypt(data,options)

##### [Parameters]()

name|type|defaultvalue
---|---|---
data|`String`|
options|`Object`|
options.privateKey|`String`|
options.encoding|`String`|hex

##### [Return value]()

`String`

### Crypto.sign()

Create Signature

#### [Syntax]()

    sign(data,options)

##### [Parameters]()

name|type|defaultvalue
---|---|---
data|`String`|
options|`Object`|
options.algorithm|`String`|sha256
options.privateKey|`String`|
options.encoding|`String`|hex

##### [Return value]()

`String`

### Crypto.verify()

Verify Signature

#### [Syntax]()

    verify(data,signature,options)

##### [Parameters]()

name|type|defaultvalue
---|---|---
data|`String`|
signature|`String`|
options|`Object`|
options.algorithm|`String`|sha256
options.privateKey|`String`|
options.encoding|`String`|hex

##### [Return value]()

`String`

### Crypto.hash()

HASH

#### [Syntax]()

    hash(data,options)

##### [Parameters]()

name|type|defaultvalue
---|---|---
data|`String`|
options|`Object`|
options.algorithm|`String`|sha256
options.encoding|`String`|hex

##### [Return value]()

`String`

### Crypto.hmac()

HMAC

#### [Syntax]()

    hmac(data,options)

##### [Parameters]()

name|type|defaultvalue
---|---|---
data|`String`|
options|`Object`|
options.algorithm|`String`|sha256
options.key|`String`|
options.encoding|`String`|hex

##### [Return value]()

`String`

### Crypto.base64Encode()

Base64 Encode

#### [Syntax]()

    base64Encode(data)

##### [Parameters]()

name|type|defaultvalue
---|---|---
data|`String`|

##### [Return value]()

`String`

### Crypto.base64Decode()

Base64 Decode

#### [Syntax]()

    base64Decode(data)

##### [Parameters]()

name|type|defaultvalue
---|---|---
data|`String`|

##### [Return value]()

`String`

### Crypto.base64UrlEncode()

Base64URL Encode

#### [Syntax]()

    base64UrlEncode(data)

##### [Parameters]()

name|type|defaultvalue
---|---|---
data|`String`|

##### [Return value]()

`String`

### Crypto.base64UrlDecode()

Base64URL Decode

#### [Syntax]()

    base64UrlDecode(data)

##### [Parameters]()

name|type|defaultvalue
---|---|---
data|`String`|

##### [Return value]()

`String`

### Crypto.base32Encode()

Base32 Encode

#### [Syntax]()

    base32Encode(data)

##### [Parameters]()

name|type|defaultvalue
---|---|---
data|`String`|

##### [Return value]()

`String`

### Crypto.base32Decode()

Base32 Decode

#### [Syntax]()

    base32Decode(data)

##### [Parameters]()

name|type|defaultvalue
---|---|---
data|`String`|

##### [Return value]()

`String`

# 




