import { applicationDefault, initializeApp } from 'firebase-admin/app';
import { getMessaging } from 'firebase-admin/messaging';


const app = initializeApp({
    credential:applicationDefault(),
    projectId:"baat-chit-1eb3c"
});

export const messaging = getMessaging(app)