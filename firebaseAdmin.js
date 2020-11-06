const admin = require("firebase-admin");
const serviceAccount = require("./secret.json");

export const verifyIdToken = (token) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://next-firebase-auth-8e6d4.firebaseio.com",
    });
  }
  return admin
    .auth()
    .verifyIdToken(token)
    .catch((error) => {
      throw error;
    });
};
