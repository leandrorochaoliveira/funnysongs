import { signInAnonymously, linkWithCredential } from "firebase/auth";
import { auth } from "../infra/firebaseConfig"

class AuthController {
  authAnonymously() {
    signInAnonymously(auth)
      .then(() => {
        // Signed in..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  }
  linkCredential(credential) {
    linkWithCredential(auth.currentUser, credential)
      .then((usercred) => {
        const user = usercred.user;
        console.log("Anonymous account successfully upgraded", user);
      })
      .catch((error) => {
        console.log("Error upgrading anonymous account", error);
      });
  }
}