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
exports.signer = exports.provider = void 0;
const ethers_1 = require("ethers");
// Get the provider and signer from the browser window
const provider = new ethers_1.ethers.providers.Web3Provider(window.ethereum, "any");
exports.provider = provider;
let signer = provider.getSigner();
exports.signer = signer;
// Initialise the page objects to interact with
const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');
const showChainId = document.querySelector('.showChainId');
// Initialise the active account and chain id
let activeAccount;
let activeChainId;
// Update the account and chain id when user clicks on button
ethereumButton.addEventListener('click', () => {
    getAccount();
    getChainId();
});
// Get the account in the window object
function getAccount() {
    return __awaiter(this, void 0, void 0, function* () {
        // Prompt the user to login with Metamask if wallet is locked
        if (signer['_address'] === null) {
            yield login();
        }
        exports.signer = signer = provider.getSigner();
        const account = yield signer.getAddress();
        if (account !== activeAccount) {
            activeAccount = account;
        }
        showAccount.innerHTML = activeAccount;
    });
}
;
// Get the connected network chainId
function getChainId() {
    return __awaiter(this, void 0, void 0, function* () {
        activeChainId = (yield provider.getNetwork()).chainId.toString();
        showChainId.innerHTML = activeChainId;
    });
}
;
// Request the user to login with Metamask
function login() {
    return __awaiter(this, void 0, void 0, function* () {
        yield provider.send("eth_requestAccounts", []);
    });
}
;
// Update the connected account if user switches accounts on Metamask
provider.provider.on("accountsChanged", () => __awaiter(void 0, void 0, void 0, function* () {
    yield getAccount();
}));
// Force page refresh on network changes (see Ethers best practices)
provider.on("network", (newNetwork, oldNetwork) => {
    if (oldNetwork) {
        window.location.reload();
    }
});
