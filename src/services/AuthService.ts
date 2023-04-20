import { auth } from "../config/firebaseConfig"
import { UserCredential, AuthCredential } from "@firebase/auth";
import { signInAnonymously, linkWithCredential, signInWithCredential } from "firebase/auth";

export class AuthService {
  
  private authInstance: any;

  constructor() {
    this.authInstance = auth
  }

  public async authAnonymously(): Promise<UserCredential> {
    const userCredential = await signInAnonymously(this.authInstance);
    return userCredential;
  }

  public async linkCredential(credential: AuthCredential): Promise<UserCredential> {
    const userCredential = await linkWithCredential(this.authInstance.currentUser!, credential);
    return userCredential;
  }

  public async signInWithCredential(credential: AuthCredential): Promise<UserCredential> {
    const userCredential = await signInWithCredential(this.authInstance, credential);
    return userCredential;
  }
}
