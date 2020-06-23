const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require('./config/blog-bc173-firebase-adminsdk-s12gy-d569ec180b.json')

const createUser = require('./createUser');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://blog-bc173.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);