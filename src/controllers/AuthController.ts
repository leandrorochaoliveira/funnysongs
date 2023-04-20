import { AuthService } from '../services/AuthService';
import AsyncStorage from "@react-native-async-storage/async-storage";

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public async register(): Promise<void> {
    try {
      const userCredential = await this.authService.authAnonymously();
      const uid = userCredential.user?.uid;
      if (uid) {
        AsyncStorage.setItem('uid', uid);
        console.log(uid)
      }
    } catch (err) {
     
    }
  }
}