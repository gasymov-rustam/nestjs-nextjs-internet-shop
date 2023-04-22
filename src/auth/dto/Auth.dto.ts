interface AuthValidateRequestProps {
  username: string;
  email: string;
  userId: string;
}

export class AuthValidateResponse {
  userId: string;

  username: string;

  email: string;

  constructor({ email, userId, username }: AuthValidateRequestProps) {
    this.username = username;
    this.email = email;
    this.userId = userId;
  }
}
