import { ethers } from 'ethers';

declare global {
    interface Window {
        ethereum?: ethers.providers.ExternalProvider;
    }
}

// Get the provider and signer from the browser window
const provider: ethers.providers.Web3Provider = new ethers.providers.Web3Provider(window.ethereum!, "any");
let signer: ethers.providers.JsonRpcSigner = provider.getSigner();

// Initialise the page objects to interact with
const ethereumButton = document.querySelector('.enableEthereumButton') as HTMLButtonElement;
const showAccount = document.querySelector('.showAccount') as HTMLSpanElement;
const showChainId = document.querySelector('.showChainId') as HTMLSpanElement;

// Initialise the active account and chain id
let activeAccount: string;
let activeChainId: string;

// Update the account and chain id when user clicks on button
ethereumButton.addEventListener('click', () => {
    getAccount();
    getChainId();
});

// Get the account in the window object
async function getAccount() {
    // Prompt the user to login with Metamask if wallet is locked
    if (signer['_address'] === null) { 
        await login();
    }
    
    signer = provider.getSigner();
    const account: string = await signer.getAddress();
    if (account !== activeAccount) {
      activeAccount = account;
    }
    showAccount.innerHTML = activeAccount;
};

// Get the connected network chainId
async function getChainId() {
    activeChainId = (await provider.getNetwork()).chainId.toString();
    showChainId.innerHTML = activeChainId;
};

// Request the user to login with Metamask
async function login() {
    await provider.send("eth_requestAccounts", []);
};

// Update the connected account if user switches accounts on Metamask
(provider.provider as any).on("accountsChanged", async () => {
    await getAccount();
});

// Force page refresh on network changes (see Ethers best practices)
provider.on("network", (newNetwork, oldNetwork) => {
    if (oldNetwork) {
        window.location.reload();
    }
});

export { provider, signer};