import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public async register(): Promise<void> {
    try {
      const userCredential = await this.authService.authAnonymously();
    } catch (err) {
     
    }
  }
}