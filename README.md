# Ethereum Signing and Validation of Messages

Sample implementation of Ethereum message signing. Message can be customised via the UI and signing is via the Issuer's Metamask wallet.

For the full guide on Medium, please refer:

As Ethers.Js will be running in the browser, we will need to compile the `.ts` files in order to `browserify` it to be served on the browser:
```
tsc
browserify build/client/ethers/signer.js build/client/signing/sign.js  build/client/signing/validate.js -o public/javascripts/bundle.js
```

To run the application, user will have to run:
```
npm install
npm start
```

This repository utilises nodemon upon `npm start` to automatically refresh the application when any changes have been made.