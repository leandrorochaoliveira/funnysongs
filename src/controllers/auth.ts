import { signInAnonymously, linkWithCredential, signInWithCredential } from "firebase/auth";
import { auth } from "../infra/firebaseConfig"
import AsyncStorage from "@react-native-async-storage/async-storage";


class AuthController {

  auth: any;
  uid: any;

  constructor() {
    this.auth = auth
    this.uid = null
  }
  
  async verifyAuth() {
    this.uid = await AsyncStorage.getItem('uid');
    if (this.uid) {
      console.log('have uid', this.uid)
    } else {
      this.authAnonymously()
      // Não há ID de usuário anônimo armazenado localmente, o usuário precisa ser autenticado novamente.
    }
  }

  authAnonymously():void {
    console.log("login anonimo")
    signInAnonymously(this.auth)
      .then((userCredential) => {
        const uid = userCredential.user?.uid;
        if (uid) {
          this.uid = uid
          AsyncStorage.setItem('uid', uid);
        }
      })
      .catch((error) => {
        console.log(error)
      });
  }
  linkCredential(credential):void {
    linkWithCredential(this.auth.currentUser, credential)
      .then((usercred) => {
        const user = usercred.user;
        console.log("Anonymous account successfully upgraded", user);
      })
      .catch((error) => {
        console.log("Error upgrading anonymous account", error);
      });
  }
}

export default AuthController