import { AuthController } from '../controllers/AuthController';

export const makeAuthAdapter = (): AuthController =>
  new AuthController();