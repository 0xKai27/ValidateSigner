import { ethers } from 'ethers';
import { signer as ethersSigner } from '../ethers/signer'

let unsignedMessage: string; 
let signedMessage: string; // Raw signature of the user signed message

const messageInput = document.querySelector('#message') as HTMLFormElement;
const signForm = document.querySelector('#signMessage') as HTMLFormElement;

signForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    unsignedMessage = messageInput.value;

    await signMessage();
});

async function signMessage() {

    // Get the user to sign the message with their private keys on the browser
    signedMessage = await ethersSigner.signMessage(unsignedMessage);
    console.log(`Raw Signed Message:`);
    console.debug(signedMessage);

    // Get the fully expanded signature
    let fullyExpandedSig: ethers.Signature = ethers.utils.splitSignature(signedMessage);
    console.log(`Fully Expanded Signature:`);
    console.debug(fullyExpandedSig);

    await fetch('/api/signedMessage', {
        method: 'POST',
        body: JSON.stringify({unsignedMessage, signedMessage, fullyExpandedSig}),
        headers: { 'Content-Type': 'application/json' }
    }).then(async (res) => {
        const message = await res.text();
        console.log(JSON.parse(message).message);
    });
};