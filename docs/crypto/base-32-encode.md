## Crypto.base32Encode()
_Todo description..._

### Syntax
```
base32Encode(data)
```

### Parameters
<dl>
    <dt><code>data</code></dt>
    <dd>A <code>String</code> data to be encoded to base32</dd>
</dl>

### Return value

<dl>
    <dt>A <code>String</code></dt>
</dl>

### Examples
```
// encode>decode base32const encoded = Crypto.base32Encode("data");console.log(encoded); //MRQXIYI=const decoded = Crypto.base32Decode(encoded);console.log(decoded); //data
```



