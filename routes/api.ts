import express from 'express';

import { 
    setUnsignedMessage, 
    setSignedMessage,
    setFullyExpandedSig,
    getUnsignedMessage,
    getSignedMessage,
    getFullyExpandedSig,
    validateSignature,
} from '../server/validate';

const router: express.Router = express.Router();

/* POST client signed and unsigned message to be saved on server */
router.post('/signedMessage', async (req, res) => {
    await setUnsignedMessage(req.body.unsignedMessage);
    await setSignedMessage(req.body.signedMessage);
    await setFullyExpandedSig(req.body.fullyExpandedSig);

    res.status(200).json({
        message: "Successfully saved on server!"
    });
});

/* GET the unsigned message */
router.get('/serverMessages', async (req, res) => {
    const serverSignedMessage: string = await getSignedMessage();
    const serverUnsignedMessage: string = await getUnsignedMessage();

    res.status(200).json({
        serverSignedMessage,
        serverUnsignedMessage
    });
})

/* GET the message validation */
router.get('/validateSignature', async (req, res) => {
    let messageSigner: string = await validateSignature();

    res.status(200).json({
        messageSigner
    });
})


export { router as apiRouter };