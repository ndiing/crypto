## Crypto.base32Decode()
_Todo description..._

### Syntax
```
base32Decode(data)
```

### Parameters
<dl>
    <dt><code>data</code></dt>
    <dd>A <code>String</code> encoded base32 data</dd>
</dl>

### Return value

<dl>
    <dt>A <code>String</code></dt>
</dl>

### Examples
```
// encode>decode base32const encoded = Crypto.base32Encode("data");console.log(encoded); //MRQXIYI=const decoded = Crypto.base32Decode(encoded);console.log(decoded); //data
```



