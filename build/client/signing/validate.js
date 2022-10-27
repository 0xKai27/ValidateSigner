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
const getServerMessagesButton = document.querySelector('#getServerMessages');
const signedMessageSpan = document.querySelector('#signedMessage');
const unsignedMessageSpan = document.querySelector('#unsignedMessage');
const validateSignatureButton = document.querySelector('#validateSignature');
const messageSignerSpan = document.querySelector('#messageSigner');
getServerMessagesButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    yield fetch('/api/serverMessages', {
        method: 'GET',
    }).then((res) => __awaiter(void 0, void 0, void 0, function* () {
        const message = yield res.text();
        signedMessageSpan.innerHTML = JSON.parse(message).serverSignedMessage;
        unsignedMessageSpan.innerHTML = JSON.parse(message).serverUnsignedMessage;
    }));
}));
validateSignatureButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    yield fetch('/api/validateSignature', {
        method: 'GET'
    }).then((res) => __awaiter(void 0, void 0, void 0, function* () {
        const message = yield res.text();
        messageSignerSpan.innerHTML = JSON.parse(message).messageSigner;
    }));
}));
