import { ethers } from 'ethers';

let serverUnsignedMessage: string;
let serverSignedMessage: string;
let serverFullyExpandedSig: ethers.Signature;

async function setUnsignedMessage(unsignedMessage: string) {
    serverUnsignedMessage = unsignedMessage;
}

async function setSignedMessage(signedMessage: string) {
    serverSignedMessage = signedMessage;
}

async function setFullyExpandedSig(fullyExpandedSig: ethers.Signature) {
    serverFullyExpandedSig = fullyExpandedSig;
}

async function getUnsignedMessage(): Promise<string> {
    return serverUnsignedMessage;
}

async function getSignedMessage(): Promise<string> {
    return serverSignedMessage;
}

async function getFullyExpandedSig(): Promise<ethers.Signature> {
    return serverFullyExpandedSig;
}

async function validateSignature() : Promise<string> {

    console.log(`Server Unsigned Message:`);
    console.debug(serverUnsignedMessage);
    console.log(`Server Fully Expanded Signature:`);
    console.debug(serverFullyExpandedSig);

    let signingAddress: string = ethers.utils.verifyMessage(serverUnsignedMessage, serverFullyExpandedSig);

    return signingAddress;
}

export {
    setUnsignedMessage,
    setSignedMessage,
    setFullyExpandedSig,
    getUnsignedMessage,
    getSignedMessage,
    getFullyExpandedSig,
    validateSignature,
}