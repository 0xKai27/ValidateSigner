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
exports.signedMessage = exports.unsignedMessage = void 0;
const sign_1 = require("./sign");
Object.defineProperty(exports, "unsignedMessage", { enumerable: true, get: function () { return sign_1.unsignedMessage; } });
Object.defineProperty(exports, "signedMessage", { enumerable: true, get: function () { return sign_1.signedMessage; } });
const getSignedMessageButton = document.querySelector('#getSignedMessage');
const signedMessageSpan = document.querySelector('#signedMessage');
getSignedMessageButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    signedMessageSpan.innerHTML = sign_1.signedMessage;
}));
