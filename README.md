#### new Crypto()

Source:

*   [index.js](index.js.html), [line 6](index.js.html#line6)

### Methods

#### (static) base32Decode(data) → {String}

Source:

*   [index.js](index.js.html), [line 241](index.js.html#line241)

##### Parameters:

Name

Type

Description

`data`

`String`

##### Returns:

Type:

`String`

#### (static) base32Encode(data) → {String}

Source:

*   [index.js](index.js.html), [line 206](index.js.html#line206)

##### Parameters:

Name

Type

Description

`data`

`String`

##### Returns:

Type:

`String`

#### (static) base64Decode(data) → {String}

Source:

*   [index.js](index.js.html), [line 174](index.js.html#line174)

##### Parameters:

Name

Type

Description

`data`

`String`

##### Returns:

Type:

`String`

#### (static) base64Encode(data) → {String}

Source:

*   [index.js](index.js.html), [line 165](index.js.html#line165)

##### Parameters:

Name

Type

Description

`data`

`String`

##### Returns:

Type:

`String`

#### (static) base64UrlDecode(data) → {String}

Source:

*   [index.js](index.js.html), [line 193](index.js.html#line193)

##### Parameters:

Name

Type

Description

`data`

`String`

##### Returns:

Type:

`String`

#### (static) base64UrlEncode(data) → {String}

Source:

*   [index.js](index.js.html), [line 184](index.js.html#line184)

##### Parameters:

Name

Type

Description

`data`

`String`

##### Returns:

Type:

`String`

#### (static) decrypt(data, options) → {String}

Source:

*   [index.js](index.js.html), [line 35](index.js.html#line35)

##### Parameters:

Name

Type

Description

`data`

`String`

`options`

`Object`

Name

Type

Default

Description

`algorithm`

`String`

aes256

`key`

`String`

`iv`

`String`

`encoding`

`String`

hex

##### Returns:

Type:

`String`

#### (static) encrypt(data, options) → {String}

Source:

*   [index.js](index.js.html), [line 19](index.js.html#line19)

##### Parameters:

Name

Type

Description

`data`

`String`

`options`

`Object`

Name

Type

Default

Description

`algorithm`

`String`

aes256

`key`

`String`

`iv`

`String`

`encoding`

`String`

hex

##### Returns:

Type:

`String`

#### (static) hash(data, options) → {String}

Source:

*   [index.js](index.js.html), [line 140](index.js.html#line140)

##### Parameters:

Name

Type

Description

`data`

`String`

`options`

`Object`

Name

Type

Default

Description

`algorithm`

`String`

sha256

`encoding`

`String`

hex

##### Returns:

Type:

`String`

#### (static) hmac(data, options) → {String}

Source:

*   [index.js](index.js.html), [line 154](index.js.html#line154)

##### Parameters:

Name

Type

Description

`data`

`String`

`options`

`Object`

Name

Type

Default

Description

`algorithm`

`String`

sha256

`key`

`String`

`encoding`

`String`

hex

##### Returns:

Type:

`String`

#### (static) privateDecrypt(data, options) → {String}

Source:

*   [index.js](index.js.html), [line 63](index.js.html#line63)

##### Parameters:

Name

Type

Description

`data`

`String`

`options`

`Object`

Name

Type

Default

Description

`privateKey`

`String`

`encoding`

`String`

hex

##### Returns:

Type:

`String`

#### (static) privateEncrypt(data, options) → {String}

Source:

*   [index.js](index.js.html), [line 49](index.js.html#line49)

##### Parameters:

Name

Type

Description

`data`

`String`

`options`

`Object`

Name

Type

Default

Description

`privateKey`

`String`

`encoding`

`String`

hex

##### Returns:

Type:

`String`

#### (static) publicDecrypt(data, options) → {String}

Source:

*   [index.js](index.js.html), [line 91](index.js.html#line91)

##### Parameters:

Name

Type

Description

`data`

`String`

`options`

`Object`

Name

Type

Default

Description

`privateKey`

`String`

`encoding`

`String`

hex

##### Returns:

Type:

`String`

#### (static) publicEncrypt(data, options) → {String}

Source:

*   [index.js](index.js.html), [line 77](index.js.html#line77)

##### Parameters:

Name

Type

Description

`data`

`String`

`options`

`Object`

Name

Type

Default

Description

`privateKey`

`String`

`encoding`

`String`

hex

##### Returns:

Type:

`String`

#### (static) sign(data, options) → {String}

Source:

*   [index.js](index.js.html), [line 106](index.js.html#line106)

##### Parameters:

Name

Type

Description

`data`

`String`

`options`

`Object`

Name

Type

Default

Description

`algorithm`

`String`

sha256

`privateKey`

`String`

`encoding`

`String`

hex

##### Returns:

Type:

`String`

#### (static) verify(data, signature, options) → {String}

Source:

*   [index.js](index.js.html), [line 124](index.js.html#line124)

##### Parameters:

Name

Type

Description

`data`

`String`

`signature`

`String`

`options`

`Object`

Name

Type

Default

Description

`algorithm`

`String`

sha256

`privateKey`

`String`

`encoding`

`String`

hex

##### Returns:

Type:

`String`