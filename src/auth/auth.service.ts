import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return 'Iam sign in';
  }

  signup() {
    return 'Iam sign up';
  }
}
