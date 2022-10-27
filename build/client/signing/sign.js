"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const signer_1 = require("../ethers/signer");
let unsignedMessage;
let signedMessage; // Raw signature of the user signed message
const messageInput = document.querySelector('#message');
const signForm = document.querySelector('#signMessage');
signForm.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    unsignedMessage = messageInput.value;
    yield signMessage();
}));
function signMessage() {
    return __awaiter(this, void 0, void 0, function* () {
        // Get the user to sign the message with their private keys on the browser
        signedMessage = yield signer_1.signer.signMessage(unsignedMessage);
        console.log(`Raw Signed Message:`);
        console.debug(signedMessage);
        // Get the fully expanded signature
        let fullyExpandedSig = ethers_1.ethers.utils.splitSignature(signedMessage);
        console.log(`Fully Expanded Signature:`);
        console.debug(fullyExpandedSig);
        yield fetch('/api/signedMessage', {
            method: 'POST',
            body: JSON.stringify({ unsignedMessage, signedMessage, fullyExpandedSig }),
            headers: { 'Content-Type': 'application/json' }
        }).then((res) => __awaiter(this, void 0, void 0, function* () {
            const message = yield res.text();
            console.log(JSON.parse(message).message);
        }));
    });
}
;
