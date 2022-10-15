# Express Metamask Ethers TypeScript Skeleton

Typescript implementation of connecting Metamask to Ethers.js on Express. This repo has been modified from `express-generator` to enable prototyping of TypeScript applications using Express. 

This repo also comes with a working Ethers.js `provider` under the `/ethers/` directory. Functions implemented include:
/*:
    * Trigger Metamask to prompt user to login when wallet is locked
    * Listen for changes in accounts
    * Refresh the page when network is changed (see Ethers.js best practices)
    */


To run the application, user will have to run:
```
npm install
npm start
```

This repository utilises nodemon upon `npm start` to automatically refresh the application when any changes have been made.