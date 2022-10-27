const getServerMessagesButton = document.querySelector('#getServerMessages') as HTMLButtonElement;
const signedMessageSpan = document.querySelector('#signedMessage') as HTMLSpanElement;
const unsignedMessageSpan = document.querySelector('#unsignedMessage') as HTMLSpanElement;
const validateSignatureButton = document.querySelector('#validateSignature') as HTMLButtonElement;
const messageSignerSpan = document.querySelector('#messageSigner') as HTMLSpanElement;

getServerMessagesButton.addEventListener('click', async () => {

    await fetch('/api/serverMessages', {
        method: 'GET',
    }).then(async (res) => {
        const message = await res.text();
        signedMessageSpan.innerHTML = JSON.parse(message).serverSignedMessage;
        unsignedMessageSpan.innerHTML = JSON.parse(message).serverUnsignedMessage;
    });

});

validateSignatureButton.addEventListener('click', async () => {

    await fetch('/api/validateSignature', {
        method: 'GET'
    }).then(async (res) => {
        const message = await res.text();
        messageSignerSpan.innerHTML = JSON.parse(message).messageSigner;
    });

});