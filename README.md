# Axia Tokenisation test

Basic test to verify tokenising of a credit card so that the token can be saved in an application and reused for payment

## Use


### Configure

- First, edit `config/index.js` to include two Axia source keys as templated


### Run tests

```
npm install
npm test
```

## Key Points

- This illustrates how to tokenise a card for a source key with no pin, but also for a source key which has a pin set; this requires two different source keys configured in an Axia environment (e.g. [sandbox](https://sandbox.axiaepay.com))
- If a pin is set, the UMhash field is required; this value is constructed using a specific format
- Format is: `m/<seed>/md5(UMcommand:<sourcekeypin>:UMamount:UMinvoice:<seed>)/`, where `<seed>` is some/any salt value (e.g. timestamp)
- `UMamount` and `UMinvoice` are required, even if you are tokenising a credit card; provide dummy values in the form so that you can construct the hash according to the format, and hash evaluation can resolve correctly
- If the redirect value (`UMredir`) is provided, the result is in the "location" header, but if `UMredir` is not provided, the result is in the response body
